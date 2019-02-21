import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { oauthHref } from "../utils";

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SignIn = () => {
  return (
    <BtnWrap>
      <Button color="red" size="large" href={oauthHref}>
        Sign in with AGOL
      </Button>
    </BtnWrap>
  );
};

export default SignIn;
