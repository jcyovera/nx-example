import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactLibProps {}

const StyledReactLib = styled.div`
  color: pink;
`;

export function ReactLib(props: ReactLibProps) {
  return (
    <StyledReactLib>
      <h1>Welcome to ReactLib!</h1>
    </StyledReactLib>
  );
}

export default ReactLib;
