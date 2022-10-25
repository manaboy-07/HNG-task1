/** @format */

import React from "react";

function Links({ name, id, link }) {
  return (
    <div>
      <button>
        <a href={link} id={id}>
          {name}
        </a>
      </button>
    </div>
  );
}

export default Links;
