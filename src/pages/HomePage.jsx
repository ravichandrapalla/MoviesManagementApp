import { useEffect } from "react";
import store, { increment, decrement, addSum, addData } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

const Homepage = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(store.getState());
  }, [counter]);
  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addSum())}>addSum</button>
      <button onClick={() => dispatch(addData("first"))}>addSum</button>
    </div>
  );
};

export default Homepage;
