import React, { ReactElement } from "react";
import "./assets/nullstyle.sass";
import "./assets/styles.sass";
import Header from "./components/Header/Header";
import Main from "./views/Main";

const App = (): ReactElement => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
