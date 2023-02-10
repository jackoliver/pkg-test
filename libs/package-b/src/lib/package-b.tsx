import styled from '@emotion/styled';
/* eslint-disable-next-line */
import {PackageA} from "corinnekrych-package-a";

/* eslint-disable-next-line */
export interface PackageBProps {}

const StyledPackageB = styled.div`
  color: pink;
`;

export function PackageB(props: PackageBProps) {
  return (
    <StyledPackageB>
      <h1>Welcome to PackageB!</h1>
      <PackageA>With a dependency to package A</PackageA>
    </StyledPackageB>
  );
}

export default PackageB;
