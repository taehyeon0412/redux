import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 사용할 Action creator를 import 합니다.
import { minusOne, plusOne, addNum, subNum } from "./redux/modules/counter";
import { RootState } from "./redux/config/configStore";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.number);
  const [number, setNumber] = useState(0);

  console.log(number);

  return (
    <div>
      {counter}
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)} //+는 문자열을 숫자로 바꿔준다.
      />
      <br />

      <button
        onClick={() => {
          dispatch(addNum(number)); //Action creator를 가져옴
        }}
      >
        더하기
      </button>
      {/* 빼기 버튼 추가 */}
      <button
        onClick={() => {
          dispatch(subNum(number)); //Action creator를 가져옴
        }}
      >
        빼기
      </button>
    </div>
  );
};

export default App;
