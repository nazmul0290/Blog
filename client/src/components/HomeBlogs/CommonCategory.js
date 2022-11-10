import { AiOutlineClockCircle } from "react-icons/ai";

const CommonCategory = () => {
    return(
        <div className="d-flex align-items-center category mb-3">
              <div className="cat__icon p-3"><AiOutlineClockCircle/></div>
              <h4 className=" cat__name">category</h4>
            </div>
    )
}

export default CommonCategory;