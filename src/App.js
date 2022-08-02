import React, { Component } from 'react'
import Board from './Board'
import Reset from './Reset';

class App extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                    <br />
                    <Reset reset="Start Over" />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TEST */}</ol>

                </div>
            </div>
        )
    }
}

export default App;