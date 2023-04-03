import styled from "styled-components";

export const Wrapper = styled.div<{ bg: string }>`
  width: 100%;
  height: 100%;
  background-color: slategrey;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  overflow: hidden;
`;

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(${({ theme }) => theme.spaces[1]});
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.spaces[1]}
    ${({ theme }) => theme.spaces[1]} 30px black;
  object-fit: contain;
`;
