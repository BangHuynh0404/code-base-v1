import React from 'react';
import StylesTest from './styles';

export interface TestProps {
  children?: React.ReactNode;
}

const Test: React.FC<TestProps> = ({ children }) => {
  // Some Logic
  return <StylesTest className="a-test">{children}</StylesTest>;
};

Test.defaultProps = {
  children: undefined,
};

export default Test;
