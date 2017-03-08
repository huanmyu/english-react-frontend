// @flow
import React, { Component } from 'react';

class WordsList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {words: []};
  }

  componentDidMount() {
    fetch('api/words').then((response) => {
      console.log(response);
      this.setState({
        words: response.json()
      });
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
  
  render() {
    const wordRows = this.state.words.map((word, idx) => (
      <tr
        key = {idx}
      >
        <td>{word.id}</td>
        <td>{word.name}</td>
        <td>{word.phonogram}</td>
        <td>{word.explanation}</td>
      </tr>
    ));

    return (
      <div className="WordsList">
        <table>
          <caption>Daily Words List</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phonogram</th>
              <th>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {wordRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WordsList;
