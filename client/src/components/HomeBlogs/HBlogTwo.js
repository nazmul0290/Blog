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
              <h2>This is the advertisement area</h2>
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
