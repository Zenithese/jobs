import React, { useEffect, useState } from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { ReCaptcha } from 'react-recaptcha-google';

function ContactModal({ modal, closeModal }) {
    console.log(modal)
    if (modal !== "contact") {
        return null;
    }

    let captcha = null;

    const captchaLoaded = (el) => {
        captcha = el;
    }

    const [ verified, setVerified ] = useState(false);

    useEffect(() => {
        if (captcha) {
            console.log("started, just a second...")
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
        closeModal();
    }

    const handleSubmit = (e) => {
        if (verified) {
            e.preventDefault();
            alert('Solidarity!');
        } else {
            alert('Silly bot, unions are for humans');
        }
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <form className="session-form" onSubmit={handleSubmit}>
                    <a className="btn-floating waves-effect waves-light" onClick={(e) => handleClose(e)}><i className="material-icons">close</i></a>
                    <div className="">
                        <label>Name:</label>
                        <input type="text"/>
                    </div>
                    <div className="">
                        <label>Email:</label>
                        <input type="text"/>
                    </div>
                    <div className="">
                        <label>Message:</label>
                        <textarea style={{ overflow: 'auto', resize: 'none', outline: 'none', borderRadius: '5px', backgroundColor: 'whitesmoke', height: '100px', border: '0px'}} placeholeder='write a message' type="text" defaultValue="" onChange={console.log('change')}/>
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
                    <input className="btn waves-effect waves-light" type="submit" value="send" />
                </form>
            </div>
        </div>
    );
}

const msp = state => {
    return {
        modal: state.ui.modal,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(msp, mdp)(ContactModal);