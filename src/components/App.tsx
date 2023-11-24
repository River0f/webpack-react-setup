import { useState } from "react";
import s from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [counter, setCounter] = useState(0);

  console.log(__PLATFORM__);
  return (
    <div>
      <h1 className={s.title}>Hello World!</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <p>Counter: {counter}</p>
      <button
        data-testid="decrease"
        onClick={() => setCounter((prev) => --prev)}
      >
        Decrease
      </button>
      <button onClick={() => setCounter((prev) => ++prev)}>Increase</button>
      <Outlet />
    </div>
  );
};
