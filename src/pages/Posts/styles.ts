import styled from "styled-components";

// Since I don't have good design source, I can't know what fonts and font sizes to use,
// what are the sizes, spaces, colors and etc. Everything I do is trying to use something
// similar and to make it look as close as possible to the original, but it's not totally
// possible, unless I have access to design tool.
// For smaller resolutions I don't have any designs provided at all, even on PDF format.

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100vw;
  height: 100vh;
`;

export { Wrapper };
