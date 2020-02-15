import React from 'react';
import Address from './Address'
import ContactForm from './ContactForm'

const ContactArea = ({contactData}) => {
    return (
        <div id="contact" className="paddsection">
            <div className="container">
                <div className="contact-block1">
                    <div className="row">
                        <Address addrs={contactData.contactDetails}/>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;