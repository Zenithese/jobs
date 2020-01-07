var $ = require('jquery');

export const sendEmail = (message, email, unionEmail) => {
    
    return $.ajax({
        method: 'POST',
        url: 'api/emails',
        data: { message, email, unionEmail }
    });
};