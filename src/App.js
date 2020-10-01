import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import TeamForm from './containers/TeamForm/TeamForm';

import { addTeam, addPlayer } from './store/actions';

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const teams = [
            {
                name: 'Barcelona',
                description: 'Barcelona Squad',
                players: [
                    {
                        playerId: 1,
                        position: 0
                    },
                    {
                        playerId: 2,
                        position: 1
                    },
                    {
                        playerId: 3,
                        position: 2
                    },
                    {
                        playerId: 4,
                        position: 3
                    },
                    {
                        playerId: 5,
                        position: 4
                    },
                    {
                        playerId: 6,
                        position: 5
                    },
                    {
                        playerId: 7,
                        position: 6
                    },
                    {
                        playerId: 8,
                        position: 7
                    },
                    {
                        playerId: 9,
                        position: 8
                    },
                    {
                        playerId: 10,
                        position: 9
                    },
                ]
            },
            {
                name: 'Real Madrid',
                description: 'Real Madrid Squad',
                players: [
                    {
                        playerId: 1,
                        position: 0
                    },
                    {
                        playerId: 2,
                        position: 1
                    },
                    {
                        playerId: 3,
                        position: 2
                    },
                    {
                        playerId: 4,
                        position: 3
                    },
                    {
                        playerId: 5,
                        position: 4
                    },
                    {
                        playerId: 6,
                        position: 5
                    },
                    {
                        playerId: 7,
                        position: 6
                    },
                    {
                        playerId: 8,
                        position: 7
                    },
                    {
                        playerId: 9,
                        position: 8
                    },
                    {
                        playerId: 10,
                        position: 9
                    },
                ]
            },
            {
                name: 'Liver Pool',
                description: 'Liver Pool Squad',
                players: [
                    {
                        playerId: 1,
                        position: 0
                    },
                    {
                        playerId: 2,
                        position: 1
                    },
                    {
                        playerId: 3,
                        position: 2
                    },
                    {
                        playerId: 4,
                        position: 3
                    },
                    {
                        playerId: 5,
                        position: 4
                    },
                    {
                        playerId: 6,
                        position: 5
                    },
                    {
                        playerId: 7,
                        position: 6
                    },
                    {
                        playerId: 8,
                        position: 7
                    },
                    {
                        playerId: 11,
                        position: 8
                    },
                    {
                        playerId: 10,
                        position: 9
                    },
                ]
            }
        ];

        const players = [
            {
                name: 'Cristiano Ronaldo',
                age: 32,
                nacionality: 'Portugal'
            },
            {
                name: 'Ronaldo Luiz de Alves',
                age: 28,
                nacionality: 'Brazil'
            },
            {
                name: 'Ronaldo da Silva de Souza',
                age: 18,
                nacionality: 'Brazil'
            },
            {
                name: 'Lionel Messi',
                age: 33,
                nacionality: 'Argentina'
            },
            {
                name: 'Ronaldinho Gaúcho',
                age: 40,
                nacionality: 'Brazil'
            },
            {
                name: 'Daniel Alves',
                age: 37,
                nacionality: 'Brazil'
            },
            {
                name: 'Gabriel Jesus',
                age: 23,
                nacionality: 'Brazil'
            },
            {
                name: 'Philippe Coutinho',
                age: 28,
                nacionality: 'Brazil'
            },
            {
                name: 'Kylian Mbappé',
                age: 21,
                nacionality: 'France'
            },
            {
                name: 'Diego Maradona',
                age: 59,
                nacionality: 'Argentina'
            },
            {
                name: 'Mané Garrincha',
                age: 50,
                nacionality: 'Brazil'
            },
            {
                name: 'Fred',
                age: 36,
                nacionality: 'Brazil'
            },
        ];
        
        teams.forEach(team => {
            dispatch(addTeam(team));
        });

        players.forEach(player => {
            dispatch(addPlayer(player));
        });
    }, [dispatch]);
    
    return (
        <div className="App">
        <BrowserRouter>
        <Switch>
        <Route strict path="/" component={HomePage} exact />
        <Route strict path="/team/new" component={TeamForm} />
        <Route component={() => (<div style={{fontSize:'25px'}}>Erro 404: Page not found :(</div>)} />
        </Switch>
        </BrowserRouter>
        </div>
        );
    }
    
    export default App;