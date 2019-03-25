import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Slider from "react-slick";
import './slider.css';

class Slide extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}> 
         {this.props.hotelBanner.map((banner) => (
            <div className="img-banner" key={banner.id}>
              <div className="banner-title">
                 <span>{banner.name}</span>
                 <div className="btn-visit">VISIT 4D TOUR</div>
             </div> 
              <img src={banner.image} className="img"/>
             </div>
            ))}
      </Slider>
    );
  }
}

Slide.propTypes = {
    hotelBanner: PropTypes.arrayOf(PropTypes.object)
};
  
function mapStateToProps(state) {
    return {
        hotelBanner: state.hotelBanner
    };
}

export default connect(mapStateToProps)(Slide);