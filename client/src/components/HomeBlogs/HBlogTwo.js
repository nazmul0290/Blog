import CommonCategory from "./CommonCategory";
import "./HBlogTwo.css";
import SingleBTwo from "./SingleBTwo";

const HBlogTwo = () => {
  return (
    <div className="blog-2">
      <div className="container section__my ">
        <div class="row">
          <div className="col-lg-8 ">
            <h2 className="big__header pb-3">Editor's Pick</h2>
            <div className="row">
              <SingleBTwo />
              <SingleBTwo />
              <div className="col-12">
                <div className="blog-2__advertisement d-flex align-items-center justify-content-between my-3  p-3">
                  <h2 className="big__header">Advertise With Us</h2>
                  <button className="second__type">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <h2 className="big__header pb-3">Categories</h2>
            <div className="category-container">
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
              <CommonCategory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HBlogTwo;
