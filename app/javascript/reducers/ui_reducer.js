import { combineReducers } from 'redux';

import modal from './modal_reducer'
import email from './email_reducer'


export default combineReducers({
    modal,
    email,
});