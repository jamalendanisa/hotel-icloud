import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Geosuggest from 'react-geosuggest';
import { DateTimePicker } from 'react-widgets';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import '../styles/search-form.css';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en')
momentLocalizer()

class SearchForm extends Component {

  render() {

    return (
      <div className="row search-card">
       <div className="search-form">
       <div className="row">
          <div className="col-11" style={{paddingRight: '0'}}>
            <Geosuggest 
            placeholder="Where do you want to stay?"/>
          </div>
          <div className="col-1" style={{padding: '0'}}>
            <span className="icon-cont"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
          </div> 
       </div>
       <div className="row">
            <div className="col-xs-12 col-md-6">
              <DateTimePicker
                time={false}
                placeholder="Check in"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <InputGroup>
                <Input placeholder="Staying Duration" type="number"/>
                <InputGroupAddon addonType="append">
                  <i className="fa fa-moon-o"></i>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          <div className="row"  style={{marginTop: '15px'}}>
            <div className="col-xs-12 col-md-6">
              <InputGroup>
                <Input placeholder="Number of Guests" type="number"/>
                <InputGroupAddon addonType="append">
                  <i className="fa fa-users"></i>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="col-xs-12 col-md-6">
              <InputGroup>
                <Input placeholder="Number of Rooms" type="number"/>
                <InputGroupAddon addonType="append">
                  <i className="fa fa-bed"></i>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="btn-search">SEARCH HOTEL</div>
        </div>

      
       </div>
       <div className="bg-img">
         <img className="img-bg" src="http://tripology.ir/wp-content/uploads/2018/03/summer-holiday-vacation-booking-online-concept_6280-597.jpg"/>
       </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  hotel: PropTypes.object
};

function mapStateToProps(state) {
  return {
    hotel: state.searchHotel
  };
}

export default connect(mapStateToProps)(SearchForm);
