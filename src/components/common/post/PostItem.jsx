import React from "react";

function PostItem() {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/900/600" alt="" />
      </div>
      <div className="card-text">
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          temporibus illo blanditiis similique error est ea iure, nemo ipsam qui
          dolorem numquam minima iste placeat dignissimos molestias quam facilis
          eligendi aspernatur maiores? Sequi nisi quaerat vel voluptatibus nulla
          nobis molestiae!
        </p>
        <button className="detail_button">
          İncele<i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default PostItem;
