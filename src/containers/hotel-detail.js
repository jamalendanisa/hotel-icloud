import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import '../styles/hotel-detail.css';

class HotelDetail extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
    openLightbox(event, obj) {
    this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
    });
    }
    closeLightbox() {
    this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
    });
    }
    gotoPrevious() {
    this.setState({
        currentImage: this.state.currentImage - 1,
    });
    }
    gotoNext() {
    this.setState({
        currentImage: this.state.currentImage + 1,
    });
    }
  render() {
     const {hotel} = this.props;
    return (
      <div className="row" style={{padding:'20px'}}>   
       <div className="col-6"> 
       <Gallery photos={hotel.imgList} 
        onClick={this.openLightbox}
        columns='3'/>
        <Lightbox images={hotel.imgList}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <div className="btn-book">BOOK HOTEL</div>
       </div>
        <div className="col-6"> 
            <div style={{fontSize:'30px'}}>{hotel.name}</div>
            <div style={{fontSize:'14px'}}>{hotel.address}</div>
            <div style={{fontSize:'18px', paddingTop:'30px'}}>{hotel.description}</div>
        </div>
      </div>
    );
  }
}

HotelDetail.propTypes = {
  hotel: PropTypes.object
};


export default HotelDetail;
