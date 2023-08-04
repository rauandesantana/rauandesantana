import React, { useEffect, useRef, useState } from "react";
import { Container, ContainerLogo, Content, ImageLogo } from "./style";

import Actions from "./actions";
import ActionsMobile from "./actions-mobile";

const AppBar = ({ $actions, $maxWidth }) => {
  const state = StateAppBar();

  return (
    <Container>
      <Content $maxWidth={$maxWidth}>
        <ContainerLogo ref={state.logoRef}>
          <ImageLogo />
        </ContainerLogo>
        {state.mobileMode === true ? (
          <ActionsMobile
            $ref={state.actionsRef}
            $visible={state.mobileMode === undefined ? false : true}
            $actions={$actions}
          />
        ) : (
          <Actions
            $ref={state.actionsRef}
            $visible={state.mobileMode === undefined ? false : true}
            $actions={$actions}
          />
        )}
      </Content>
    </Container>
  );
};

function StateAppBar() {
  const logoRef = useRef();
  const actionsRef = useRef();
  const logoWidth = useRef(undefined);
  const actionsWidth = useRef(undefined);

  const [state, setState] = useState({
    logoRef: logoRef,
    actionsRef: actionsRef,
    windowSize: { with: undefined, height: undefined },
    logoSize: { with: undefined, height: undefined },
    actionsSize: { with: undefined, height: undefined },
    mobileMode: undefined,
  });

  const resizedAppBar = () => {
    const windowWidth = window.innerWidth;
    let result = false;

    if (isNaN(windowWidth) || window.screen.width < 720) {
      result = true;
    } else {
      const logoInit = logoWidth.current === undefined;
      const actionsInit = actionsWidth.current === undefined;

      if (logoInit) logoWidth.current = logoRef.current?.offsetWidth;
      if (actionsInit) actionsWidth.current = actionsRef.current?.offsetWidth;

      if (isNaN(logoWidth.current) || isNaN(actionsWidth.current)) {
        result = true;
      } else {
        const limitWidth = windowWidth * 0.9 - 50;
        const contentWidth = logoWidth.current + actionsWidth.current;
        result = limitWidth - contentWidth < 0;
      }
    }

    setState((prevState) => {
      return {
        ...prevState,
        windowSize: {
          with: window.innerWidth ?? undefined,
          height: window.innerHeight ?? undefined,
        },
        logoSize: {
          with: logoRef.current?.offsetWidth ?? undefined,
          height: logoRef.current?.offsetHeight ?? undefined,
        },
        actionsSize: {
          with: actionsRef.current?.offsetWidth ?? undefined,
          height: actionsRef.current?.offsetHeight ?? undefined,
        },
        mobileMode: result,
      };
    });
  };

  useEffect(() => {
    resizedAppBar();
    window.addEventListener("resize", resizedAppBar);
    return () => window.removeEventListener("resize", resizedAppBar);
  }, []);

  return state;
}

export default AppBar;
