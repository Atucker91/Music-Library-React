import React from 'react';
import './Footer.css';
import img from '../../../src/TOS2.png'

const Footer = () => {
    return ( 
        <footer className="footer nopadding">
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-xl-12'>
                        <img src={img} alt="Dwyer"/> 
                    </div>
                </div>
            </div> */}
            
            <img src={img} alt="Dwyer" width='100%'/>
        </footer>
     );
}
 
export default Footer;