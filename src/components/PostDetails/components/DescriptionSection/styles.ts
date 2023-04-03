import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces[6]};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.grayDark};
  line-height: 3rem;
`;

export const Description = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.grayDark};
`;
