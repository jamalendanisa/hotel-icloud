import {HOTEL_AREA} from '../actions';

function selectArea(state = null, action) {
  switch (action.type) {
    case HOTEL_AREA:
      return action.payload;
    default:
      return state;
  }
}

export default selectArea;
