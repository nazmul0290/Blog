import CommonAuthor from "./CommonAuthor.js"


const SingleBTwo = () => {
  return (
    <div class="col-md-6">
      <div className=" blog-2__single">
        <img src="/images/image1.jpg" alt="" />
        <div class="my-2 d-flex flex-column gap-2 p-3">
          <div >
            <span className="common__category">category</span>
          </div>
          <a className="second__header">
            The three eyeshadow pallettes I own & how to downsize your stash
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Quis
            vitae sit.
          </p>
          <CommonAuthor name="Isabella ava" date="July 13, 2020" />
        </div>
      </div>
    </div>
  );
};

export default SingleBTwo;
