import * as APIUtil from '../utils/email_api_util';

export const SEND_MESSAGE = "SEND_MESSAGE"
export const OPEN_EMAIL = "OPEN_EMAIL"
export const CLOSE_EMAIL = "CLOSE_EMAIL"

export const openEmail = email => {
    
    return {
        type: OPEN_EMAIL,
        email,
    }
};

export const closeEmail = () => {
    return {
        type: CLOSE_EMAIL,
    }
};

export const sendEmail = (message, email, unionEmail) => dispatch => {
    return APIUtil.sendEmail(message, email, unionEmail)
};