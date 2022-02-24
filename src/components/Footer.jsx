import React from 'react';
//import pizza5 from './pictures/pizza5.jpg';
//import p1 from './pictures2/p1.png';
//import p7 from './pictures2/p7.png';
import p2 from './pictures2/p2.png';
import p3 from './pictures2/p3.png';
import p5 from './pictures2/p5.png';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <div>
      <Box className="footer">
        <div>
          <img src={p3} className="footerPic3"  alt='p3'/>
          <img src={p2} className="footerPic2" alt='p2'/>
        </div>
        <div class="divTable">
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">Navigation</div>
              <div class="divTableCell">Menu</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">
                <p> Order Online</p>
                <p>Our Menu</p>
                <p>Press</p>
                <p>Location</p>
              </div>
              <div class="divTableCell">
                <p>Pizza</p>
                <p>Vagitarian</p>
                <p>Non-Vagitarian</p>
                <p>Drinks</p>
              </div>
            </div>
          </div>
        </div>
        <div>
         
          <div>
            <div className="f1">
              <img src={p5} className="footerPic5" alt='p5'/>
              <img src={p2} className="footerPic2" alt='p2'/>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default Footer;
