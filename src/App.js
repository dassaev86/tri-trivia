import React from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
