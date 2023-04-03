import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: end;
  padding: ${({ theme }) => theme.spaces[6]};
`;

export default Wrapper;
