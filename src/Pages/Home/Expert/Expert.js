import React from "react";

const Expert = ({ expert }) => {
    const {name,img} = expert;
  return (
    <div id="experts" class="col-sm-6 col-md-3">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expert;
