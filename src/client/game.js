import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getGameById } from './actions';
import banner from './banner.jpg';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        name: '',
        platform: '',
        genre: '',
        releasedOn: null,
        noOfPlayers: 'Not specified',
        publisher: 'Not specified',
        boxArt: null,
      }
    }
  }

  componentDidMount() {
    const { id } = this.props;
    getGameById(id)
    .then(response => {
      console.log(typeof(response.data.game.boxArt.data.data[0]));
      this.setState({game: response.data.game});
    });
  }

  arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return btoa(binary);
  };
  
  render() {
    const { game } = this.state;
    return (
      <div style={{width: '100%'}}>
        <img src={banner} style={{width: '70%', marginBottom: '5%'}}/>
        <h1> {game.name} </h1>
        Platform: {game.platform}<br/>
        Genre: {game.genre || 'Not Specified'}<br/>
        Release Date: {moment(game.releasedOn).isValid() ?
                        moment(game.releasedOn).format('DD MMM, YYYY') :
                          'Not Specified'}<br/>
        Number Of Players: {game.noOfPlayers || 'Not Specified'}<br/>
        Publisher: {game.publisher|| 'Not Specified'}<br/><br/>
        Box Art:<br/>
        {game.boxArt && 
        <img
          style={{width: '50%'}}
          src={`data:${game.boxArt.contentType};base64,${this.arrayBufferToBase64(game.boxArt.data.data)}`} />
        }
      </div>
    );
  }
}
  
  Game.propTypes = {
    id: PropTypes.string.isRequired,
  };
  
  export default Game;