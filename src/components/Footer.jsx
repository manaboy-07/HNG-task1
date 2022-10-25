/** @format */

import React from "react";
import Zuri from "../images/zuri.svg";
import World from "../images/I4G.svg";
function Footer() {
  return (
    <section className='footer'>
      <div>
        <img src={Zuri} alt='' />
      </div>
      <div>
        <h4>HNG Internship 9 Frontend Task</h4>
      </div>
      <div>
        <img src={World} alt='' />
      </div>
    </section>
  );
}

export default Footer;
