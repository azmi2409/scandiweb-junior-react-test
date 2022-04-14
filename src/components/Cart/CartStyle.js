import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 3em;
  margin: 1em 0.5em;
  max-width: 100%;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  width: 100%;
  margin: 2em auto;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
  padding: 0;
  text-transform: uppercase;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 0;
  margin: 0 1em;
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  height: 100%;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  gap: 0.5em;
`;

export const CartFigure = styled.div`
  display: flex;
  height: 100%;
`;

export const CartImg = styled.img`
  height: 100%;
  object-fit: contain;
  width: 150px;
`;

export const Button = styled.button`
  display: flex;
  height: 45px;
  width: 45px;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  font-weight: 400;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 160%;
  :active {
    background: #1d1f22;
    color: white;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: 700;
  color: #1d1f22;
`;

export const Brand = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  padding: 0;
`;

export const Name = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 27px;
  padding: 0;
  margin-top: 0;
`;

export const Price = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
  padding: 0;
  margin: 0;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: rgba(57, 55, 72, 0.22);
  z-index: 50;
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

export const Attributes = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1em;
height: 100%;
margin: 1.5em 0;
`;