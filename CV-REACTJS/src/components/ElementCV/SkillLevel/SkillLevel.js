import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class SkillLevel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.level
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
    this.props.data(nextValue);
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div className="skill-level">
        <StarRatingComponent 
          name = "rate1" 
          starCount={10}
          value={rating}
          onStarClick = {this.onStarClick}
        />
      </div>
    );
  }
}

export default SkillLevel;
