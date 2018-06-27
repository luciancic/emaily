import { FETCH_SURVEYS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SURVEYS: {
            action.payload.fetched = true;
            return action.payload;
        }
        default: return state;
    }
}