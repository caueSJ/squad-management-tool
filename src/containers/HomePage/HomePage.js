import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './HomePage.scss';
import Section from '../../components/Section/Section';
import Table from '../../components/Table/Table';
import TableRow from '../../components/Table/TableRow/TableRow';
import TableHead from '../../components/Table/TableHead/TableHead';
import TableCell from '../../components/Table/TableCell/TableCell';
import TableBody from '../../components/Table/TableBody/TableBody';
import PageDefault from '../../components/PageDefault/PageDefault';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ListGroup from '../../components/ListGroup/ListGroup';
import List from '../../components/ListGroup/List/List';
import ListItem from '../../components/ListGroup/ListItem/ListItem';
import Stats from '../../components/Stats/Stats';
import RoundedImage from '../../components/RoundedImage/RoundedImage';
import {FaTrash, FaShareAlt, FaPen} from 'react-icons/fa';
import {TiArrowSortedUp, TiArrowSortedDown} from 'react-icons/ti';

import { deleteTeam } from '../../store/actions';

const HomePage = () => {
    const dispatch = useDispatch();
    const teams = useSelector(state => state.team.teams);
    const players = useSelector(state => state.player.players);

    const [tableOrder, setTableOrder] = useState({column: 'name', order: 'a-z'});

    const sortByCriteria = (list, field, order) => {
        const fr = order === 'a-z' ? -1 : 1;
        const lr = order === 'a-z' ? 1 : -1;

        return [...list].sort((a, b) => {
            if ( a[field] < b[field] ){
                return fr;
            }
            if ( a[field] > b[field] ){
                return lr;
            }
            return 0;
        });
    };

    const renderTeamsTable = () => {
        const ordenededTeams = tableOrder ? sortByCriteria(teams, tableOrder.column, tableOrder.order) : teams.map(t => ({...t}));

        const teamRows = ordenededTeams.map(team => {
            return(
                <TableRow key={team.id}>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>
                        {team.description}
                    </TableCell>
                    <TableCell class="action-icons">
                        <span className="tooltip" onClick={() => deleteTeamRow(team.id)}>
                            <FaTrash size="11" />
                            <span className="tiptext">Remove</span>
                        </span>
                        <span className="tooltip">
                            <FaShareAlt size="11" />
                            <span className="tiptext">Share</span>
                        </span>
                        <Link to={`/team/new/${team.id}`}>
                            <span className="tooltip">
                                <FaPen size="11" />
                                <span className="tiptext">Edit</span>
                            </span>
                        </Link>
                    </TableCell>
                </TableRow>
            );
        });
    
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name 
                            <span className="sort-wrapper">
                                <button onClick={() => setTableOrder({column: 'name', order: 'a-z'})}><TiArrowSortedUp /></button>
                                <button onClick={() => setTableOrder({column: 'name', order: 'z-a'})}><TiArrowSortedDown /></button>
                            </span>
                        </TableCell>
                        <TableCell colspan="2">
                            Description
                            <span className="sort-wrapper">
                                <button onClick={() => setTableOrder({column: 'description', order: 'a-z'})}><TiArrowSortedUp /></button>
                                <button onClick={() => setTableOrder({column: 'description', order: 'z-a'})}><TiArrowSortedDown /></button>
                            </span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamRows}
                </TableBody>
            </Table>
        );
    }

    const renderTeamStatsList = (title, type) => {
        const teamsWithAvg = teams.map(team => {
            let sumAges = 0;
            team.players.forEach((playerInfo) => {
                const player = players.filter(player => player.id === playerInfo.playerId)[0];
                sumAges += player.age;
            });
            return {
                ...team,
                ageAvg: sumAges / 10
            };
        });

        const ordenededTeams = sortByCriteria(teamsWithAvg, 'ageAvg', type);
        
        return (
            <ListGroup title={title}>
                <List>
                {ordenededTeams.slice(0, 5).map(team => (
                        <ListItem key={team.id} info={team.ageAvg}>
                            {team.name}
                        </ListItem>    
                    ))}
                </List>
            </ListGroup>
        );
    }

    const renderTeamStatsPicked = (title, type) => {
        const nPickPlayer = [];

        teams.forEach(team => {
            team.players.forEach((playerInfo) => {
                const playerIndex = nPickPlayer.findIndex(player => player.id === playerInfo.playerId);

                if(playerIndex !== -1) {
                    nPickPlayer[playerIndex] = {
                        ...nPickPlayer[playerIndex],
                        n: nPickPlayer[playerIndex].n + 1
                    };
                } else {
                    nPickPlayer.push({
                        id: playerInfo.playerId,
                        n: 1
                    });
                }
            });
        });

        const percentPickPlayer = nPickPlayer.map(e => ({
            id: e.id,
            percent: e.n / teams.length * 100
        }));

        const ordenededPlayers = sortByCriteria(percentPickPlayer, 'percent', type);

        const choosenPlayerInfo = ordenededPlayers[0] ? ordenededPlayers[0] : null;

        if(choosenPlayerInfo === null) {
            return (<div></div>);
        }

        const choosenPlayer = players.filter(player => player.id === choosenPlayerInfo.id)[0];

        return (
            type === 'MPP' ?
                <Stats title={title} percentage={choosenPlayerInfo.percent}>
                    <RoundedImage dashed alt={choosenPlayer.name} />
                </Stats>
                : <Stats title="Less picked player" percentage={choosenPlayerInfo.percent}>
                    <RoundedImage borderColor="#A40763" alt={choosenPlayer.name} />
                </Stats>
        );
    }

    const deleteTeamRow = (id) => {
      dispatch(deleteTeam(id));
    }

    return (
        <PageDefault>
            <div className="HomePage">
                <Section>
                    <SectionTitle title="My teams" addButton="Add team"/>
                    {renderTeamsTable()}
                </Section>
                <Section>
                    <SectionTitle title="Top 5"/>
                    <div className="top-5">
                        {renderTeamStatsList('Highest avg age', 'z-a')}
                        {renderTeamStatsList('Lowest avg age', 'a-z')}
                    </div>
                </Section>
                <Section bgGradientH>
                    <div className="player-stats">
                        {renderTeamStatsPicked('Most picked player', 'z-a')}
                        {renderTeamStatsPicked('Less picked player', 'a-z')}
                    </div>
                </Section>
            </div>
        </PageDefault>
    );
}

export default HomePage;