import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="main-img">
        <div className="bodyContainer">
          <h5 style={{ fontSize: 24 }}>
            {' '}
            Internationl Directory of Donut Academies
          </h5>
          <p style={{ fontSize: 12 }}>
            Donuts are the most overlooked students in all of academia.
            Fortunately, we are here to provide you with a directory of the top
            tier of Donut Academies. These unviersities take their donuts
            through the rigorous baking curriculum and ensure the tasitiest
            outcomes. You can be sure that any university in our directory will
            deliver only the most prestigious and hardworking donuts.
          </p>
        </div>
      </div>
    );
  }
}
