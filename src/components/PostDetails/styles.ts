import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  background: ${({ theme }) => theme.colors.bg};
  grid-template-rows: 1fr 1fr 1fr;
  border-left: ${({ theme }) => theme.spaces[1]} solid
    ${({ theme }) => theme.colors.blue};
`;

export { Wrapper };
