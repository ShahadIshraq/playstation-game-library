import React, { Component } from 'react';
import moment from 'moment';
import Game from './game';
import GameForm from './gameForm';
import { getGames } from './actions';
import banner from './banner.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      games: []
    };
    this.goToGamePage = this.goToGamePage.bind(this);
    this.reload = this.reload.bind(this);
  }
  
  componentDidMount() {
    this.reload();
  }

  reload() {
    getGames().then((response) => {
      this.setState({games: response.data.games});
    });
  }
  
  goToGamePage(id) {
    this.setState({
      page: 'game',
      id
    });
  }
  
  render() {
    const { page } = this.state;  
    if (page === 'home') {
      const { games } = this.state;
      return (
        <div style={{width: '100%'}}>
          <img src={banner} style={{width: '70%', marginBottom: '5%'}}/>
          <br/>
          <table>
            <tbody>
              <tr>
              <th>Name</th><th>Platform</th><th>Released On</th>
              </tr>

              {
                games.map((game,i) => (
                  <tr key={game._id} onClick={() => this.goToGamePage(game._id)}>
                    <td key={game._id+'name'}>{game.name}</td>
                    <td key={game._id+'platform'}>{game.platform}</td>
                    <td key={game._id+'releasedOn'}>
                    {
                      moment(game.releasedOn).isValid() ?
                      moment(game.releasedOn).format('DD MMM, YYYY') : ''
                    }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <h2>Add New Game</h2>
          <GameForm onAddition={this.reload}/>
        </div>
      );
    }
    else if (page === 'game') {
      const { id } = this.state;
      return (
        <Game id={id} />
        );
    }  
  }
}
      
export default Home;
