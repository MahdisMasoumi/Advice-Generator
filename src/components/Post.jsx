import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const date = new Date().toLocaleDateString();

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>{advice}</h1>
      </div>
      <div className="center">
        <a className="btn" onClick={getAdvice}>
          Get Advice
        </a>
      </div>
      <div className="time">
        The time is {time} on {date}
      </div>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p className="count">
      (You have read <strong>{props.count}</strong> pieces of advice)
    </p>
  );
}
