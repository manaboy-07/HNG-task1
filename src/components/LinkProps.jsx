/** @format */

import React from "react";
import Links from "./Links";
import Slack from "../images/slack.svg";
import Github from "../images/Icon.svg";
function LinkProps() {
  return (
    <div className='link-container'>
      <Links
        name='Twitter Link'
        id='twitter'
        link='https://twitter.com/Mana_boy07'
        title="Manasseh's twitter home page"
      />
      <Links
        name='Zuri Team'
        id='btn__zuri'
        link='https://training.zuri.team/'
        title="The Zuri Team"
      />
      <Links name='Zuri Books' id='books' link='http://books.zuri.team' title="Books on Design and Coding by zuri"/>
      <Links
        name='Python Books'
        id='book__python'
        link='https://books.zuri.team/python-for-beginners?ref_id=Oruebor Manasseh'
        title="Find books about design and coding"
      />
      <Links
        name='Background Check for Coders'
        id='pitch'
        link='https://background.zuri.team'
        title="Coders Background Check"
      />
      <Links
        name='Design Book'
        id='book__design'
        link='https://books.zuri.team/design-rules'
        title="free design books offered by Zuri."
      />
      <div className='icons'>
        <img src={Slack} alt='' />
        <img src={Github} alt='' />
      </div>
    </div>
  );
}

export default LinkProps;
