import React from 'react'

const Footer = () => {
    return (
        <div className='footerStyle'>
            <div style={{ float: 'left' }}>
                &copy; 2018 Okike Foods. All Rights Reserved
            </div>
            <div style={{ float: 'right' }}>
                <i className='fab fa-facebook'></i> &nbsp;&nbsp;
                <i className='fab fa-twitter'></i> &nbsp;&nbsp;
                <i className='fab fa-instagram'></i> &nbsp;&nbsp;
            </div>
            <p style={{ textAlign: 'center', marginLeft: -30 }}>
                +08100000000000 &nbsp;&nbsp;&nbsp; @info@okikefoods.ng
            </p>
        </div>
    )
}

export default Footer;