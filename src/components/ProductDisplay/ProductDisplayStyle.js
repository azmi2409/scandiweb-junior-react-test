import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 8fr 1fr;
  grid-gap: 1em;
  padding: 1em 2em;
  margin: 1em 2em;
  max-width: 100%;
`;

export const SidePict = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  height: 70vh;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1em;
`;

export const MainPict = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 2em;
`;

export const Swatch = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
  ${(props) => props.selected && "border: 2px solid #1D1F22;"}
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
`;

export const Galleries = styled.img`
  max-height: 88px;
  margin-top: 0.5em;
  cursor: pointer;
`;

export const Gallery = styled.img`
  max-height: 100%;
`;

export const Brand = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  margin: 0.5em 0;
`;

export const Item  = styled.h3`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  margin: 0.5em 0;
`;

export const Attributes = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;

export const AttrName = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  margin: 0.5em 0;
  font-family: 'Roboto Condensed'
`;

export const AttrPrice = styled.h4`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
  margin: 0.5em 0;
`;


export const AttrType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.5em 0;
  gap: 1em;
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
  `;

export const ProductDesc = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 159.96%;
width: 292px;
height: 103px;
color: #1D1F22;
`;