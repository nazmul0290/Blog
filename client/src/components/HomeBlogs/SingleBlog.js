import { BsHeart } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { BiShareAlt } from "react-icons/bi";
import CommonAuthor from "./CommonAuthor";

const SingleBlog = () => {
  return (
    <div class="col-lg-6 d-flex">
      <div className="blog blog--mobile">
        <div class="row justify-content-center">
          <div className=" col-sm-5 blog__img blog__img--mobile">
            <img src="images/beauty1.jpg" alt="" />
          </div>
          <div className="col-sm-7 blog__content align-self-center">
            <a href="#" className="second__header">
              Natural-Spa Where you feel unique and special
            </a>
           
            <CommonAuthor name="Author Name" date={"July 13, 2020"}/>
            <ul className="d-flex gap-3 py-2">
              <li className="default__icon">
                <BsHeart />
              </li>
              <li className="default__icon">
                <GoComment />
              </li>
              <li className="default__icon">
                <BiShareAlt />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
