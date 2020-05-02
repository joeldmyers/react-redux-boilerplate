import React from "react";
import Counter from "../components/Counter/Counter";
import "./App.scss";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import mainReducer from "../reducers";
// const store = createStore(mainReducer);

const App = () => {
  return (
    // <Provider store={store}>
    <Counter />
    // </Provider>
  );
};

export default App;
