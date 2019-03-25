import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectArea} from '../actions';
import {bindActionCreators} from 'redux';
import '../styles/hotel-area.css';

class HotelArea extends Component {
  render() {
    return (
      <div className="rv-container">
        <div className="rv-title">
          Where do you want to stay?
          <div className="underlined"></div>
        </div>
        <div className="row" style={{marginTop:'35px', marginBottom:'100px'}}>
        {this.props.hotelArea.map((area) => (
          <div className="col-xs-12 col-md-4" key={area.id} style={{position:'relative', cursor:'pointer'}}
          onClick={() => this.props.selectArea(area)} >
           <img src={area.image} className="area-img"/>
           <div className="area-titlecont">
             {area.name}
           </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

HotelArea.propTypes = {
  hotelArea: PropTypes.arrayOf(PropTypes.object),
  selectedArea: PropTypes.object,
  selectArea: PropTypes.func
};

function mapStateToProps(state) {
  return {
    hotelArea: state.hotelArea,
    selectedArea: state.selectedArea
  };
}

function mapDispatchToProps(dispath) {
  return bindActionCreators({selectArea}, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelArea);
