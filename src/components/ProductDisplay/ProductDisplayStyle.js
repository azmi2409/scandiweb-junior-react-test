import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 8fr;
  grid-gap: 1em;
  padding: 5rem 6.3125rem;
  margin: 0;
  min-height: 100vh;
  height: 100%;
  max-width: 100%;
`;

export const SidePict = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-height: 35rem;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 35rem;
`;

export const MainPict = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Swatch = styled.div`
  display: flex;
  height: 2.8125rem;
  width: 3.9375rem;
  border: 0.0625rem solid #1D1F22;
  box-sizing: border-box
  cursor: pointer;
  background-color: ${(props) => props.color};
  ${(props) => props.selected && `border: 0.25rem solid #1D1F22;`}
  ${(props) => props.disabled && `opacity: 0.5; cursor: not-allowed;`}
`;

export const Properties = styled.button`
  display: flex;
  height : 2.8125rem;
  width: 3.9375rem;
  background: white;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid #1D1F22;
  box-sizing: border-box
  cursor: pointer;
  font-weight: 400;
  ${(props) => props.selected && `background: #1D1F22; color: white;`}
  ${(props) => props.disabled && `opacity: 0.5; cursor: not-allowed;`}
`;

export const Galleries = styled.img`
  max-height: 5.5rem;
  cursor: pointer;
`;

export const Gallery = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Brand = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.6875rem;
  margin: 0;
  padding: 0;
`;

export const Item  = styled.h3`
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.6875rem;
  margin: 0;
  margin-bottom: 2.1875rem;
  padding: 0;

`;

export const Attributes = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 2rem;
`;

export const AttrName = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0.5rem 0;
  font-family: 'Roboto Condensed'
`;

export const AttrPrice = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0;
  margin-top: 0.125rem;
  margin-bottom: 0.25rem;
`;


export const AttrType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.5em 0;
  gap: 0.75rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const Submit = styled.button`
  width: 18.25rem;
  height: 3.25rem;
  padding: 1rem 2rem;
  background: #5ECE7B;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin: 1em 0;
  transition: all 200ms ease-in-out;
  :active {
    transform: scale(0.95);
  }
  ${(props) => props.disabled && `
    background: #C4C4C4;
    cursor: not-allowed;
    color: #1D1F22;`}
  `;

export const ProductDesc = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 159.96%;
width: 18.25rem;
min-height: 6.4375rem;
overflow: scroll;
color: #1D1F22;
`;

export const Overlay = styled.div`
  position: absolute;
  cursor: default;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  opacity: 0.5;
  display: flex;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  color: #8d8f9a;
  z-index: 2;
`;

export const Error = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0.5em 0;
  font-family: 'Roboto Condensed';
  color: red;
`;

export const Success = styled.h2`
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1rem;
  padding: 0.5em 2em;
  margin: 1em;
  background: #5ECE7B;
  color: white;
  opacity: 0.8;
  border-radius: 0.25rem;
`;
  