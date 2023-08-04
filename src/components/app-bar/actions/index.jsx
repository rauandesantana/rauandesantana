import React from "react";
import {
  ActionsButton,
  ActionsContent,
  ActionsItem,
  ActionsListButton,
} from "./style";

const Actions = ({ $actions, $ref, $visible }) => {
  return (
    <ActionsContent $visible={$visible} ref={$ref}>
      {$actions
        ? $actions.map((item) => {
            const path = item.path;
            const status =
              item.status == null
                ? path === window.location.pathname
                  ? "selected"
                  : "default"
                : item.status;
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
  );
};

export default Actions;
