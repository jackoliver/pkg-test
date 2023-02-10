import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PackageAProps {}

const StyledPackageA = styled.div`
  color: pink;
`;

export function PackageA(props: PackageAProps) {
  return (
    <StyledPackageA>
      <h1>Welcome to PackageA!</h1>
    </StyledPackageA>
  );
}

export default PackageA;
