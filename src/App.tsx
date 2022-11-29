import React, { ReactElement } from "react";
import "./assets/nullstyle.sass";
import "./assets/styles.sass";
import Header from "./components/Header";

const App = (): ReactElement => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
