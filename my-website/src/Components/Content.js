import React from "react";
import styled from 'styled-components';
import HomeButton from "./HomeButton";

const StyledContentContainer = styled.div`
  max-width: 1200px;
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: column
`;

function Content(props) {

  const {children, noHomeButton, ...other } = props;

  return (
    <StyledContentContainer {...other}>
      {children}
      /* {noHomeButton && <HomeButton/>} */
    </StyledContentContainer>
  );
}
  
export default Content;