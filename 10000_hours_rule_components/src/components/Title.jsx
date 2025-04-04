import clockImage from "../img/clock.png"
import titleImage from "../img/title.png"
import "../css/title.css"

function Title() {
  return (
    <div className="title">
      <img src={clockImage} alt="" className="clock_img" />
      <div className="title_img">
        <img src={titleImage} alt="1만 시간의 법칙" />
      </div>
    </div>
  );
}

export default Title;
