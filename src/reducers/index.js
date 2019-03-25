import {combineReducers} from 'redux';
import filteredHotel from './hotel-filtered';
import hotelList from './hotel-list';
import hotelBanner from './hotel-banner';
import hotelArea from './hotel-area';

const rootReducer = combineReducers({
  hotels: hotelList,
  filteredHotel: filteredHotel,
  hotelBanner: hotelBanner,
  hotelArea: hotelArea
});

export default rootReducer;
