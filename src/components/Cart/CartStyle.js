import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 2em;
  margin: 1em 2em;
  max-width: 100%;
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
  height: 40vh;
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
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  height: 90%;
  align-self: center;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
`;

export const CartFigure = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  margin: 0 1em;
`;

export const CartImg = styled.img`
  height: 185px;
  object-fit: contain;
  width: 141px;
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

export const MiniCartContainer = styled.div`
  display: flex;
  margin-right: 87px;
  z-index: 51;
  background: #ffffff;
  height: 540px;
  width: 325px;
  padding: 0 1em;
  flex-direction: column;
`;

export const MiniCartHeader = styled.h2`
display: flex;
flex-direction: rows;
font-weight: 700;
font-size: 16px;
line-height: 160%;
width: 100%;
`;

export const MiniCartItems = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
`;

export const MiniCartQuantity = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  height: 90%;
  align-self: center;
`;

export const MiniQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
`;

export const MiniCartFigure = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  margin: 0 1em;
`;

export const MiniCartImg = styled.img`
  height: 137px;
  object-fit: contain;
  width: 105px;
`;

export const MiniButton = styled.button`
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
