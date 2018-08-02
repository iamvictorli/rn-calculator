import * as React from 'react';
import styled from 'styled-components/native';

type DisplayProps = {
  num: number;
};

const DisplayResultContainer = styled.View`
  padding-right: 10;
  background-color: #424242;
  border-bottom-width: 1;
  border-color: #fff;
`;

const DisplayResult = styled.Text`
  color: #fff;
  text-align: right;
  font-size: 30;
  font-weight: bold;
`;

const Display: React.SFC<DisplayProps> = ({ num }) => (
  <DisplayResultContainer>
    <DisplayResult>{num}</DisplayResult>
  </DisplayResultContainer>
);

export default Display;
