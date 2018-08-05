import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    // first_name(pin): "steve"
    // last_name(pin): "cao"
    // email(pin): "steve@gmail.com"
    // photo(pin): null
    // current_company(pin): null
    // username(pin): "steve"
    const { title, company, salary, equity } = this.props;
    // if (this.props.jobs[0].title || this.props.search[0].title) {
    // console.log('CARD', this.props, this.category);

    if (this.props.category === 'companies') {
      return (
        <div className="Card">
          <img
            src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640"
            alt="placeholder"
          />
          <div className="Card-Container">
            <div className="Card-Details">
              <div>{this.props.name}</div>
              <strong>@{this.props.handle}</strong>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.category === 'users') {
      return (
        // <Link to={`/users/${this.props.username}`}>
        <div className="Card">
          <img
            src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640"
            alt="placeholder"
          />
          <div className="Card-Container">
            <div className="Card-Details">
              <div>
                {this.props.first_name} {this.props.last_name}
              </div>
              <strong>@{this.props.username}</strong>
            </div>
          </div>
        </div>
        // </Link>
      );
    }
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

    // } else {
    //   return <div>not a job</div>;
    // }
  }
}
