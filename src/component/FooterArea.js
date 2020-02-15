import React from 'react';

const FooterArea = ({footerData}) => {
    return (
        <div id="footer" class="text-center">
            <div class="container">
                <p>{footerData.footerText}</p>
            </div>
        </div>
    );
};

export default FooterArea;