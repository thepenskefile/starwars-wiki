import React, { Component, Fragment } from 'react';
import { Button } from 'fannypack';
import styled from 'fannypack/styled';

const StyledButton = styled(Button)`
  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(221, 221, 221);
  border-radius: 5px;
  margin: 20px 20px;
  color: black;
  background-color: #ffd700;
  font-family: death-star;
`;
type Props = {
  onClick: Function,
  backPage: string,
  nextPage: string
};
export default class Pagination extends Component<Props> {
  render = () => {
    const { onClick, backPage, nextPage } = this.props;
    return (
      <Fragment>
        {backPage !== null && <StyledButton onClick={() => onClick(backPage)}>Previous</StyledButton>}
        {nextPage !== null && <StyledButton onClick={() => onClick(nextPage)}>Next</StyledButton>}
      </Fragment>
    );
  };
}
