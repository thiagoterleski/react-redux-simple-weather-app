import {FETCH_WHEATER} from '../actions/index';

export default function(state=[],action) {
  switch (action.type) {
    case FETCH_WHEATER:
      return [ action.payload.data, ...state ];
  }
  return state;
}
