import React from "react";
import { ActionMenu } from "./components/ActionMenu/ActionMenu";
import { ActionMenuButton } from "./components/ActionMenu/ActionMenuButton";
import { ActionMenuList } from "./components/ActionMenu/ActionMenuList";
import { ActionMenuItem } from "./components/ActionMenu/ActionMenuItem";

import "./App.css";

const App: React.FC = () => {
  return (
    <main className="App">
      <h2 className="font-bold text-salt-1000 text-2xl my-6">
        Action Menu "Default" Size
      </h2>
      <ActionMenu analyticsId="ID-123-default">
        <ActionMenuButton ariaLabel="Action Menu Button Default Size">
          Label
        </ActionMenuButton>
        <ActionMenuList>
          <ActionMenuItem label="Option 1" />
          <ActionMenuItem label="Option 2" />
          <ActionMenuItem label="Option 3" />
        </ActionMenuList>
      </ActionMenu>

      <hr className="my-12" />

      <h2 className="font-bold text-salt-1000 text-2xl my-6">
        Action Menu "Large" Size
      </h2>
      <ActionMenu analyticsId="ID-123-large">
        <ActionMenuButton
          ariaLabel="Action Menu Button Large Size"
          size="large"
        >
          Label
        </ActionMenuButton>
        <ActionMenuList size="large">
          <ActionMenuItem label="Option 1" />
          <ActionMenuItem label="Option 2" />
          <ActionMenuItem label="Option 3" />
        </ActionMenuList>
      </ActionMenu>

      <hr className="my-12" />

      <h2 className="font-bold text-salt-1000 text-2xl my-6">
        Action Menu (Disabled)
      </h2>
      <ActionMenu analyticsId="ID-123-disabled">
        <ActionMenuButton ariaLabel="Action Menu Button Disabled" disabled>
          Label
        </ActionMenuButton>
      </ActionMenu>
    </main>
  );
};

export default App;
