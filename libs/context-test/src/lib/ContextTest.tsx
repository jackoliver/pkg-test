import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ContextTestProps {}

const StyledContextTest = styled.div`
  color: pink;
`;

export function ContextTest(props: ContextTestProps) {
  return (
    <StyledContextTest>
      <h1>Welcome to ContextTest!</h1>
    </StyledContextTest>
  );
}

export default ContextTest;
