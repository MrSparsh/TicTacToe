import React from 'react';
import Game from './Game';
import '../styles/App.css'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <div id='gameHeader'>
                    <h1>Tic-Tac-Toe</h1>
                </div>
                <Game />
            </div>
        );
    }
}