import "./Testimonials.scss";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="../../src/assets/right-arrow.png" className="left" alt="" />
            <img className="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU" alt="" />
            <img className="right" src="../../src/assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia et recusandae voluptatem consequatur, commodi iure voluptate amet corporis possimus libero.
          </div>
          <div className="bottom">
            <h3>Alex</h3>
            <h4>CEO of LinkedIn</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
