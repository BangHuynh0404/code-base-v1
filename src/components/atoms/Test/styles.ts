import styled from '@emotion/styled';
import { css } from '@emotion/react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StyledTestProps {}

const StyledTest = styled.div`
  ${(props: StyledTestProps) => {
    const root = 'a-test';
    return css``;
  }}
`;

export default StyledTest;
