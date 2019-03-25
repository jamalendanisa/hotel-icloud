import React, {Component} from 'react';
import Slide from './Slider/Slider';
import Navb from './Navbar';
import SearchForm from '../containers/search-form'
import HotelList from '../containers/hotel-list'
import HotelArea from '../containers/hotel-area'
import '../styles/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navb/>
        <Slide/>
        <SearchForm/>
        <HotelList/>
        <HotelArea/>
        <div className="footer">
            @2019 silversea-media
        </div>
      </div>
    );
  }
}

export default App;
