import { OPEN_EMAIL, CLOSE_EMAIL } from '../actions/email_actions';

const emailReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_EMAIL:
            return action.email
        case CLOSE_EMAIL:
            return null;
        default:
            return state;
    }
};

export default emailReducer;