import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: ${({ theme }) => theme.spaces[6]};
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaces[12]};
  color: ${({ theme }) => theme.colors.black};

  & > span {
    margin-right: ${({ theme }) => theme.spaces[2]};
  }
`;

export const Views = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;

export { Wrapper };
