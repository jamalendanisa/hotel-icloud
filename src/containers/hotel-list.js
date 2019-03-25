import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Modal} from 'reactstrap';
import HotelDetail from './hotel-detail';
import '../styles/hotel-list.css';

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hotel: {}
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.selectHotel = this.selectHotel.bind(this);
  }

  toggleModal(e){
    this.setState({
        modal: !this.state.modal
    });
 
  }
  
  selectHotel(hotel){
    this.setState({
      hotel: hotel
    });
  }
  
  render() {
    const { hotels, selectedArea} = this.props;

    return (
      <div className="rv-container">
        <div className="rv-title">
           {selectedArea == undefined && 
            <span>Recently Viewed</span>
           }
           { selectedArea !== undefined &&
            <span>{selectedArea.name}</span>
           }
          <div className="underlined"></div>
        </div>
        {selectedArea == undefined &&
        <div className="row" style={{marginTop:'35px'}}>
            {hotels.slice(0, 2).map((hotel) => (
              <div className="col-xs-12 col-md-6" key={hotel.id} style={{position:'relative',cursor:'pointer'}} 
                onClick={(e)=> {this.selectHotel(hotel); this.toggleModal(e);}}>
              <img src={hotel.img} className="hotel-img"/>
              <div className="hotel-titlecont">
                {hotel.name}
              </div>
              </div>
            ))}
             <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
              <HotelDetail hotel={this.state.hotel}/>
             </Modal> 
        </div>
          }
        {selectedArea !== undefined && 
         <div className="row" style={{marginTop:'35px'}}>
            {hotels.filter((htl) => {return htl.place === selectedArea.name}).map((hotel) => (
              <div className="col-xs-12 col-md-6" key={hotel.id} style={{position:'relative',cursor:'pointer'}} 
                onClick={(e)=> {this.selectHotel(hotel); this.toggleModal(e);}}>
              <img src={hotel.img} className="hotel-img"/>
              <div className="hotel-titlecont">
                {hotel.name}
              </div>
              </div>
            ))}
            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
              <HotelDetail hotel={this.state.hotel}/>
             </Modal> 
         </div>
          }
       
      </div>
    );
  }
}

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object),
  hotel: PropTypes.object,
  selectHotel: PropTypes.func
};

function mapStateToProps(state) {
  return {
    hotels: state.hotels,
    hotel: state.hotel
  };
}


export default connect(mapStateToProps)(HotelList);
