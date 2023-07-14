import React from "react";
import {
  AppBarActions,
  AppBarList,
  AppBarContainer,
  AppBarHeader,
  AppBarItem,
  AppBarLink,
  AppBarLogo,
  AppBarTitle,
} from "./style";

const AppBar = ({ title, actions, disableLogo }) => {
  return (
    <AppBarContainer>
      <AppBarHeader>
        <AppBarLogo disable={disableLogo} src='logo192.png' alt='logo' />
        <AppBarTitle>{(title === undefined) ? 'Rauan Rosa' : title }</AppBarTitle>
      </AppBarHeader>
      <AppBarActions>
        <AppBarList>
          {actions.map((item) => (
            <AppBarItem>
              <AppBarLink href={item.url}>
                {item.title}
              </AppBarLink>
            </AppBarItem>
          ))}
        </AppBarList>
      </AppBarActions>
    </AppBarContainer>
  );
};

export default AppBar;
