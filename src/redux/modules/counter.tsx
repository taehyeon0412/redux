// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

interface PlusOneAction {
  type: typeof PLUS_ONE;
}

interface MinusOneAction {
  type: typeof MINUS_ONE;
}

type CounterActionTypes = PlusOneAction | MinusOneAction;

// 리듀서
const counter = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        number: state.number + 1,
      };
    case MINUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;

/*Action Creator를 사용했을때 type를 바꿔야 되는 경우에는 
const PLUS_ONE = "PLUS_ONE"; " " 부분만 바꾸면 되어 관리가 용이합니다.
*/
