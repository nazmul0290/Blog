import { AiOutlineClockCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { BiShareAlt } from "react-icons/bi";

const SingleBlog = () => {
  return (
    <div class="col-lg-6 d-flex">
      <div className="blog blog--mobile">
        <div class="row justify-content-center">
          <div className=" col-sm-5 blog__img blog__img--mobile">
            <img src="images/beauty1.jpg" alt="" />
          </div>
          <div className="col-sm-7 blog__content align-self-center">
            <h2 className="second__header">
              Natural-Spa Where you feel unique and special
            </h2>
            <div className="blog__author d-flex align-items-center gap-2">
              <img src="images/image1.jpg" alt="" />
              <ul>
                <li className="author__name">Author name</li>
                <li>
                  July 13, 2020 . <AiOutlineClockCircle /> 1min
                </li>
              </ul>
            </div>
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
