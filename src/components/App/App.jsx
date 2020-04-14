import React, { useState } from "react";

import "./App.scss";

import commands from "../../data/commands";
import Display from "../Display/Display";
import Command from "../Command/Command";

const App = () => {
  const [result] = useState("0");
  const [history] = useState("");

  return (
    <div className="o-container">
      <div className="c-calculator">
        <Display result={result} history={history} />

        <div className="c-operations">
          {commands.map((cmd) => (
            <Command key={cmd.id} command={cmd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
