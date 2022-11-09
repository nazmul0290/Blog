import "./HomeBlogs.css";
import SingleBlog from "./SingleBlog";

const HomeBlogs = () => {
  return (
    <div className="container section__my ">
        <div className="d-flex align-items-center justify-content-between">
      <h2 className="big__header mb-4">Blogs</h2>
      <button>View More</button>

        </div>
      <div class="row align-items-center justify-content-between ">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
};

export default HomeBlogs;
