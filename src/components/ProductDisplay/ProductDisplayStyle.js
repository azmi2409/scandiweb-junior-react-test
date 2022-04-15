import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 8fr;
  grid-gap: 1em;
  padding: 80px 101px;
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
  gap: 32px;
  max-height: 560px;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 560px;
`;

export const MainPict = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Swatch = styled.div`
  display: flex;
  height: 45px;
  width: 63px;
  border: 1px solid #1D1F22;
  box-sizing: border-box
  cursor: pointer;
  background-color: ${(props) => props.color};
  ${(props) => props.selected && `border: 4px solid #1D1F22;`}
  ${(props) => props.disabled && `opacity: 0.5; cursor: not-allowed;`}
`;

export const Properties = styled.button`
  display: flex;
  height : 45px;
  width: 63px;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #1D1F22;
  box-sizing: border-box
  cursor: pointer;
  font-weight: 400;
  ${(props) => props.selected && `background: #1D1F22; color: white;`}
  ${(props) => props.disabled && `opacity: 0.5; cursor: not-allowed;`}
`;

export const Galleries = styled.img`
  max-height: 88px;
  cursor: pointer;
`;

export const Gallery = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Brand = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  margin: 0;
  padding: 0;
`;

export const Item  = styled.h3`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  margin: 0;
  margin-bottom: 35px;
  padding: 0;

`;

export const Attributes = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 32px;
`;

export const AttrName = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  margin: 8px 0;
  font-family: 'Roboto Condensed'
`;

export const AttrPrice = styled.h4`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  margin-top: 2px;
  margin-bottom: 4px;
`;


export const AttrType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.5em 0;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const Submit = styled.button`
  width: 292px;
  height: 52px;
  padding: 16px 32px;
  background: #5ECE7B;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
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
font-size: 16px;
line-height: 159.96%;
width: 292px;
min-height: 103px;
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
  font-size: 24px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  color: #8d8f9a;
  z-index: 2;
`;

export const Error = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  margin: 0.5em 0;
  font-family: 'Roboto Condensed';
  color: red;
`;

export const Success = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin: 0.5em 0;
  font-family: 'Roboto Condensed';
  color: #5ECE7B;
`;
  