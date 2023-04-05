import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};
`;

export const Avatar = styled.img`
  width: ${({ theme }) => theme.avatar.medium};
  height: ${({ theme }) => theme.avatar.medium};
  border: 2px solid ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.radius.full};
`;

export const Username = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;
