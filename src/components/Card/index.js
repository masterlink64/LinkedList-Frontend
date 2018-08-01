import React, { Component } from 'react';
import './style.css';

export default class Card extends Component {
  render() {
    const { title, company, salary, equity } = this.props;
    return (
      <div className="Card">
        <img
          src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640"
          alt="placeholder"
        />
        <div className="Card-Container">
          <div className="Card-Details">
            <div>
              {title} <strong>@{company}</strong>
            </div>
            {salary} | {equity}
          </div>
          <button className="Card-Button">Apply</button>
        </div>
      </div>
    );
  }
}
