import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 80vh;
  max-width: 1500px;
  background-image: url(${({ $url }) => $url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  border-radius: 1rem;
  overflow: hidden;
  
  -webkit-box-shadow: -10px 10px 13px 1px rgba(0,0,0,1);
  -moz-box-shadow: -10px 10px 13px 1px rgba(0,0,0,1);
  box-shadow: -10px 10px 13px 1px rgba(0,0,0,1);

  display: flex;
  flex-flow: row wrap;
`;

export const ImageSpaceView = styled.div`
  min-width: 300px;

  flex: 2;
  display: flex;
`;

export const ContentSpaceView = styled.div`
  min-width: 600px;
  
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    min-width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  opacity: 0.9;
  background-color: black;
  border-radius: 1rem;
  
  -webkit-box-shadow: 0px 0px 44px 37px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 44px 37px rgba(0,0,0,1);
  box-shadow: 0px 0px 44px 37px rgba(0,0,0,1);

  display: flex;
`;