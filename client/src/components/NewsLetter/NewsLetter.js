import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__inside d-flex align-items-center justify-content-center flex-column p-5">
          <h5 className="big__header">Subscribe to our newsletter!</h5>
          <p>
            We'll send you the best of our blog just once a month. We promise.
          </p>
          <div className="d-md-flex gap-2 newsletter__inputarea align-items-center justify-content-center my-3">
            <div className="newsletter__input common__border d-flex align-items-center p-2 my-2">
              <input type="text" name="" id="" placeholder="Email Address"/>
            </div>
            <button className="second__type">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
