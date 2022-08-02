import styled, { css } from "styled-components";

const target_size = {
  desktop: 1024,
  tablet: 768,
};
const media = Object.keys(target_size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${target_size[label] / 16}em) {
        ${css(...args)}
    }
  `;
  return acc;
}, {});

const StyledBox = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  text-align: center;
  ${media.desktop`width: 768px`}
  ${media.tablet`width: 100%`}
`;

const StyledButton = styled.button`
  background: white;
  color: black;
  border: 2px solid white;
  border-radius: 10%;
  padding: 0.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: black;
    color: white;
  }

  ${(props) =>
    props.inverted &&
    css`
      background: transparent;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <div className="componentWrapper">
    <StyledBox color="black">
      <StyledButton>#1</StyledButton>
      &nbsp;
      <StyledButton inverted={true}>#2</StyledButton>
    </StyledBox>
  </div>
);

export default StyledComponent;
