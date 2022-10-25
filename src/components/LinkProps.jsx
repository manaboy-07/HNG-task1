/** @format */

import React from "react";
import Links from "./Links";
function LinkProps() {
  return (
    <div className='link-container'>
      <Links name='Twitter Link' id='twitter' link='https://twitter.com/Mana_boy07' />
      <Links
        name='Zuri Team'
        id='btn__zuri'
        link='https://training.zuri.team/'
      />
      <Links name='Zuri Books' id='books' link='http://books.zuri.team' />
      <Links
        name='Python Books'
        id='book__python'
        link='https://books.zuri.team/'
      />
      <Links
        name='Background Check for Coders'
        id='pitch'
        link='https://background.zuri.team'
      />
      <Links
        name='Design Book'
        id='book__design'
        link='https://books.zuri.team/design-rules'
      />
    </div>
  );
}

export default LinkProps;
