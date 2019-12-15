import React, { Component } from 'react';
import { createGame } from './actions';

class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      platform: '',
      genre: '',
      releasedOn: '',
      numberOfPlayers: 0,
      publisher: '',
      boxArt: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, event) {
    this.setState({
      [field]: field === 'boxArt' ? event.target.files[0] : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData() 
    for (let key in this.state) {      
      if (this.state.hasOwnProperty(key) && this.state[key]) {
        data.append(key, this.state[key]);
      }
    }

    createGame(data)
    .then(response => {
      console.log('Got it',response);
    })
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={event => this.handleChange('name', event)} />
        </label> &nbsp;
        <label>
          Platform:
          <input type="text" value={this.state.platform} onChange={event => this.handleChange('platform', event)} />
        </label> &nbsp;
        <label>
          Genre:
          <input type="text" value={this.state.genre} onChange={event => this.handleChange('genre', event)} />
        </label> &nbsp;
        <label>
          Release Date:
          <input type="date" value={this.state.releasedOn} onChange={event => this.handleChange('releasedOn', event)} />
        </label> <br/><br/>
        <label>
          Number of players:
          <input type="number" value={this.state.numberOfPlayers} onChange={event => this.handleChange('numberOfPlayers', event)} />
        </label> &nbsp;
        <label>
          Publisher:
          <input type="text" value={this.state.publisher} onChange={event => this.handleChange('publisher', event)} />
        </label> &nbsp;
        <label>
          Box art:
          <input type="file" onChange={event => this.handleChange('boxArt', event)} />
        </label><br/><br/>
        
        <input type="submit" value="Save" /><br/><br/>
      </form>
    );
  }
}

export default GameForm;
