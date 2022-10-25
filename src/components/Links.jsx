/** @format */

import React from "react";

function Links({ name, id, link }) {
  return (
    <div>
      <button>
        <a href={link} id={id} target='_blank'>
          {name}
        </a>
      </button>
    </div>
  );
}

export default Links;
