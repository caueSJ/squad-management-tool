import React, { useState } from 'react';

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

const HomePage = () => {
    const [teamListOrdened, setTeamListOrdened] = useState('default');
    const [teamToDelete, setTeamToDelete] = useState(null);

    // Object for test
    const teams = {
        0: {
            id: 0,
            name: 'Barcelona',
            description: 'Barcelona Squad'
        },
        1: {
            id: 1,
            name: 'Real Madrid',
            description: 'Real Madrid Squad'
        },
        2: {
            id: 3,
            name: 'Liver Poooooooooooooooooool',
            description: 'Liver Poooooooooooooooooool Squad'
        }
    }

    const stats = {
        0: {
            id: 0,
            name: 'Barcelona',
            percent: '24'
        },
        1: {
            id: 1,
            name: 'Real Madrid',
            percent: '25.5'
        },
        2: {
            id: 3,
            name: 'Liver Poooooooooooooooooool',
            percent: '27'
        }
    }

    const renderTeamsTable = () => {
        const teamsArray = Object.values(teams);
        const teamRows = teamsArray.map(team => {
            return(
                <TableRow key={team.id}>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>
                        {team.description}
                    </TableCell>
                    <TableCell class="action-icons">
                        <FaTrash onClick={() => deleteTeamRow(team.id)} size="11" />
                        <FaShareAlt onClick={() => deleteTeamRow(team.id)} size="11" />
                        <FaPen onClick={() => deleteTeamRow(team.id)} size="11" />
                    </TableCell>
                </TableRow>
            );
        });
    
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell colspan="2">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamRows}
                </TableBody>
            </Table>
        );
    }

    const renderTeamStatsList = (title, infoList) => {
        const statsArray = Object.values(infoList);
        return (
            <ListGroup title={title}>
                <List>
                    {statsArray.map(team => (
                        <ListItem info={team.percent}>
                            {team.name}
                        </ListItem>    
                    ))}
                </List>
            </ListGroup>
        );
    }

    const deleteTeamRow = (id) => {
        // dispatch(deleteTeam(teamToDelete));
        setTeamToDelete(null);
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
                        {renderTeamStatsList('Highest avg age', stats)}
                        {renderTeamStatsList('Lowest avg age', stats)}
                    </div>
                </Section>
                <Section bgGradient>
                    <div className="player-stats">
                        <Stats title="Most picked player" percentage="75">
                            <RoundedImage dashed />
                        </Stats>
                        <Stats title="Less picked player" percentage="35">
                            <RoundedImage borderColor="#A40763" />
                        </Stats>
                    </div>
                </Section>
            </div>
        </PageDefault>
    );
}

export default HomePage;