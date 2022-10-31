/** @format */

import React from "react";
import ProfileImg from "../images/pic.jpg";
function Profile() {
  return (
    <section className='profile-container'>
      <img src={ProfileImg} alt='' id='profile__img' />
      <h2 id='twitter'>Mana_boy07</h2>
      <h3 id="slack">manaboy07</h3>
    </section>
  );
}

export default Profile;
