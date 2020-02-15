import React from 'react';

const Address = ({addrs}) => {
    return (
        <div class="col-md-6">
            <div class="contact-contact">
                <h2 class="mb-30">GET IN TOUCH</h2>
                
                <ul class="contact-details">
                    {
                        addrs.map(item=>(
                            <li><span>{item.text}</span></li>
                        ))
                    }
                 </ul>
            </div>
          </div>
    );
};

export default Address;