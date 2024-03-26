import "./Intro.scss";
import { TypeAnimation } from 'react-type-animation';

function Intro() {
 
  return <div  id="intro" className="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="../../src/assets/realman.png" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Megi Reddy</h1>
        <h3>Software </h3>
        <div>
  <TypeAnimation
    sequence={[
      500,
      '', // initially rendered starting point
      1000,
      'Engineer',
      1000,
      'Developer',
      1000,
      'Designer',
      500,
      'Tester',
      500,
    ]}
    speed={50}
    style={{ fontSize: '30px',fontWeight:"bold",color:"crimson" }}
    repeat={Infinity}
  />
</div>
      </div>
      <a href="#portfolio">
        <img src="../../src/assets/down.png" alt="" />
      </a>
    </div>

  </div>;
}

export default Intro;
