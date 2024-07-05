import React from "react";
import { useDispatch, useSelector } from "react-redux";

// 사용할 Action creator를 import 합니다.
import { minusOne, plusOne } from "./redux/modules/counter";
import { RootState } from "./redux/config/configStore";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.counter.number);

  return (
    <div>
      {number}
      <br />
      <button
        onClick={() => {
          dispatch(plusOne()); //Action creator를 가져옴
        }}
      >
        + 1
      </button>
      {/* 빼기 버튼 추가 */}
      <button
        onClick={() => {
          dispatch(minusOne()); //Action creator를 가져옴
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;
