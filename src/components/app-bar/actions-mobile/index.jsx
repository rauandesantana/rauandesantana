import React, { useState } from "react";
import {
  ButtonShowActions,
  ActionsContainer,
  ActionsContent,
  ActionsListButton,
  ActionsButton,
  ActionsItem,
} from "./style";

const ActionsMobile = ({ $actions, $ref, $visible }) => {
  const [showActions, setShowActions] = useState(false);

  function handleShowActions() {
    setShowActions((previous) => !previous);
  }

  return (
    <>
      <ButtonShowActions
        ref={$ref}
        $visible={$visible}
        onClick={handleShowActions}
      >
        Menu
      </ButtonShowActions>
      <ActionsContainer $showActions={showActions}>
        <ActionsContent>
          {$actions
            ? $actions.map((item) => {
              const path = item.path;
              const status = item.status ?? (path === window.location.pathname) ? 'selected' : 'default';
              const url = status === "default" ? path : null;
              const title = item.title ?? "Null";

                return (
                  <ActionsListButton key={title.concat(path)}>
                    <ActionsButton href={url}>
                      <ActionsItem $status={status}>{title}</ActionsItem>
                    </ActionsButton>
                  </ActionsListButton>
                );
              })
            : null}
        </ActionsContent>
      </ActionsContainer>
    </>
  );
};

export default ActionsMobile;
