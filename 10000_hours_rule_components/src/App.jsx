import { useState } from 'react';
import '../src/css/10000hours.css';
import title from './img/title.png';
import txt_subtitle from './img/txt_subtitle.png';
import weniv from './img/weniv.png';

function App() {

  const [field, setField] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'field') {
      setField(value);
    } else if (name === 'time') {
      setTime(value);
    }
  };

  // 시간 계산 함수
  const calculate = (e) => {
    e.preventDefault();

    if (time > 24 || time <= 0) {
      alert('하루 훈련 시간을 입력하세요!');
      return;
    }

    const totalHoursRequired = 10000;
    const totalDaysRequired = Math.ceil(totalHoursRequired / time);

    setResult(totalDaysRequired);
  };

  return (
    <>
      <main id="app">
        <h1 className="tit-law">
          <img src={title} alt="1만 시간의 법칙" className="img-tit" />
        </h1>
        <img
          src={txt_subtitle}
          alt="연습은 어제의 당신보다 당신을 더 낫게 만든다"
          className="img-txt"
        />
        <p className="txt-desc">
          <strong className="tit-desc">1만 시간의 법칙</strong>은
          <br />
          어떤 분야의 전문가가 되기 위해서는
          <br />
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
        <form className="cont-inp">
          <p className="txt-wannabe">
            나는
            <input
              type="text"
              name="field"
              value={field}
              onChange={handleInputChange}
              placeholder="예) 프로그래밍"
              required
            />
            전문가가 될 것이다.
          </p>
          <p className="txt-time">
            그래서 앞으로 매일 하루에
            <input
              type="text"
              name="time"
              value={time}
              onChange={handleInputChange}
              placeholder="예) 5시간"
              required
            />
            시간씩 훈련할 것이다.
          </p>
          <button className="btn-exc" onClick={calculate}>
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </button>
        </form>
        {result && (
          <section className="cont-result">
            <h2 className="blind">결과 확인</h2>
            <p className="txt-wannabe">
              당신은 <strong>{field}</strong> 전문가가 되기 위해서
            </p>
            <p className="txt-time">
              대략 <strong>{result}</strong>일 이상 훈련하셔야 됩니다.
            </p>
            <button type="button" className="btn-go">
              훈련하러 가기 GO! GO!
            </button>
            <button type="button" className="btn-share">
              공유하기
            </button>
          </section>
        )}

        <footer className="cont-footer">
          <img src={weniv} alt="weniv" className="img-footer" />
          <p className="txt-footer">
            &#8251; 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
          </p>
          <p className="txt-footer">
            수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
