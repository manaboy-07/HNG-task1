/** @format */

import React from "react";

function Links({ name, id, link, title }) {
  return (
    <div>
      <button>
        <a href={link} id={id} target='_blank' title={title}>
          {name}
        </a>
      </button>
    </div>
  );
}

export default Links;
