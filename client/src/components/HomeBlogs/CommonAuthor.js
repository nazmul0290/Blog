import { AiOutlineClockCircle } from "react-icons/ai";


const CommonAuthor = ({name, date}) => {
  return (
    <div className="blog__author d-flex align-items-center gap-2">
      <img src="images/image1.jpg" alt="" />
      <ul>
        <li className="author__name">{name}</li>
        <li>
          {date} . <AiOutlineClockCircle /> 1min
        </li>
      </ul>
    </div>
  );
};

export default CommonAuthor
