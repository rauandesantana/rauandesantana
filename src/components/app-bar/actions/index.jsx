import React from "react";
import {
  ActionsButton,
  ActionsContent,
  ActionsItem,
  ActionsListButton,
} from "./style";

const Actions = ({ $actions }) => {
  return (
    <ActionsContent>
      {$actions
        ? $actions.map((item) => {
            const status = item.status ?? "default";
            const url = status === "default" ? item.url : null;
            const title = item.title ?? "Null";

            return (
              <ActionsListButton key={title.concat(url)}>
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
