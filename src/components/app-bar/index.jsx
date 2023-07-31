import React, { useEffect, useState } from "react";
import { Container, Content, ImageLogo } from "./style";

import Actions from "./actions";
import ActionsMobile from "./actions-mobile";

const AppBar = ({ $actions, $maxWidth, $maxWidthResize }) => {
  const size = ResizedAppBar();

  return (
    <Container>
      <Content $maxWidth={$maxWidth}>
        <ImageLogo src="logo.png" />
        {size.with < maxWidthResized($maxWidthResize) ? (
          <ActionsMobile $actions={$actions} />
        ) : (
          <Actions $actions={$actions} />
        )}
      </Content>
    </Container>
  );
};

function maxWidthResized(maxWidthResize) {
  const regex = /(\d+)/gm;
  const value = maxWidthResize.toString();

  if (regex.test(value)) {
    const m = value.match(regex);
    if (m.length > 1) return 0;
    return m[0];
  } else {
    return 0;
  }
}

function ResizedAppBar() {
  const [sizeWindow, setSizeWindow] = useState({
    with: window.innerWidth ?? undefined,
    height: window.innerHeight ?? undefined,
  });

  useEffect(() => {
    const resizedScreen = () =>
      setSizeWindow({
        with: window.innerWidth ?? undefined,
        height: window.innerHeight ?? undefined,
      });
    window.addEventListener("resize", resizedScreen);
    return () => window.removeEventListener("resize", resizedScreen);
  }, []);

  return sizeWindow;
}

export default AppBar;
