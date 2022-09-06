import React from "react";

const Blogs = () => {
  return (
    <section id="blog-section">
      <div class="section-heading">
        <h2>Their lives depend on your donation</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          quibusdam alias incidunt!
        </p>
      </div>

      <div class="blog-container">
        <article>
          <img src="./images/donation12.png" alt="" />
          <div class="blog-contents">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              quibusdam alias incidunt!
            </p>
            <button class="main-btn">
              <a href="#">Read More</a>
            </button>
          </div>
        </article>

        <article>
          <img src="./images/donation14.webp" alt="" />
          <div class="blog-contents">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              quibusdam alias incidunt!
            </p>
            <button class="main-btn">
              <a href="#">Read More</a>
            </button>
          </div>
        </article>

        <article>
          <img src="./images/donation13.jpg" alt="" />
          <div class="blog-contents">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              quibusdam alias incidunt!
            </p>
            <button class="main-btn">
              <a href="#">Read More</a>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blogs;
