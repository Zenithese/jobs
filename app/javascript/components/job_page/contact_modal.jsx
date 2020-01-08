import React, { useEffect, useState } from 'react';
import { sendEmail, closeEmail } from '../../actions/email_actions';
import { connect } from 'react-redux';
import { ReCaptcha } from 'react-recaptcha-google';

function ContactModal({ email, unionEmail, closeEmail }) {
    if (!unionEmail) {
        return null;
    }

    let captcha = null;

    const captchaLoaded = (el) => {
        captcha = el;
    }

    const [ verified, setVerified ] = useState(false);
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        if (captcha) {
            captcha.reset();
            //invisible:
            // this.captcha.execute();
        }
    }, [])

    const onLoadRecaptcha = () => {
        if (captcha) {
            captcha.reset();
            //invisible:
            // this.captcha.execute();
        }
    }

    const verifyCallback = (recaptchaToken) => {
        if (recaptchaToken) {
            setVerified(true);
        }
    }

    const handleClose = (e) => {
        e.preventDefault();
        closeEmail();
    }

    const handleSubmit = (e) => {
        if (verified) {
            e.preventDefault();
            closeEmail();
            alert('Email sent')
        } else {
            alert('Silly bot, unions are for humans');
        }
    }
    
    return (
        <div className="modal-background" onClick={closeEmail}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <form className="session-form" onSubmit={handleSubmit}>
                    <a className="btn-floating waves-effect waves-light" onClick={(e) => handleClose(e)}><i className="material-icons">close</i></a>
                    <div>
                        <label>Message:</label>
                        <textarea style={{ overflow: 'auto', resize: 'none', outline: 'none', borderRadius: '5px', backgroundColor: 'whitesmoke', height: '100px', border: '0px'}} placeholeder='write a message' type="text" defaultValue="" onChange={e => setMessage(e.target.value)}/>
                    </div>
                    <ReCaptcha
                        ref={(el) => captchaLoaded(el)}
                        // action='homepage'
                        // onChange={this.onChange}

                        //checkbox:
                        sitekey="6LdTScoUAAAAAN1mJ9m9qz9JAhUe8ysMldK4IwqX"
                        size="normal"
                        data-theme="dark"

                        //invisible:
                        // sitekey="6Lepv8sUAAAAACVOwNxHDThDdBQhtnNsP6qMTPaw"
                        // size="invisible" 

                        render="explicit"
                        onloadCallback={onLoadRecaptcha}
                        verifyCallback={verifyCallback}
                    />
                    <input className="btn waves-effect waves-light" type="submit" value="send" onClick={sendEmail(message, email, unionEmail)}/>
                </form>
            </div>
        </div>
    );
}

const msp = (state) => {
    let email = state.entities.users[state.session.id] ? 
    (
        state.entities.users[state.session.id].email
    ):(
        null
    )

    return {
        unionEmail: state.ui.email,
        email,
    };
};

const mdp = dispatch => {
    return {
        closeEmail: () => dispatch(closeEmail()),
        sendEmail: (message, email, unionEmail) => dispatch(sendEmail(message, email, unionEmail)),
    };
};

export default connect(msp, mdp)(ContactModal);