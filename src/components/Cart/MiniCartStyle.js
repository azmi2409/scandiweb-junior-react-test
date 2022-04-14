import styled from "styled-components";
export const MiniCartContainer = styled.div`
  display: grid;
  padding-right: 87px;
  background: #ffffff;
  max-height: 540px;
  height: 100%;
  padding: 0 1em;
  grid-template-rows: 1fr 8fr 1fr 1fr;
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
  height: 100%;
  gap: 0.5em;
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

export const MiniCartBottom = styled.div`
  display: flex;
  flex-direction: rows;
  font-weight: 700;
  font-size: 16px;
  gap: 1em;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5em;
  align-items: center;
`;

export const MiniButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: ${(props) => props.bg};
  width: 140px;
  height: 43px;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  border: none;
  color: ${(props) => props.color};
  :active {
    transform: scale(0.95);
  }
  ${(props) =>
    props.border &&
    `border: 1px solid #1d1f22;
  box-sizing: border-box;`}
`;

export const Swatch = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  margin: 0;
  border: 1px solid #a6a6a6;
  box-sizing: border-box;
  background-color: ${(props) => props.color};
  ${(props) => props.selected && `border: 2px solid #1D1F22;`}
  ${(props) => !props.selected && `color: #A6A6A6; opacity: 0.5;`}
`;

export const Properties = styled.button`
  display: flex;
  height : 24px;
  margin: 0;
  min-width: 24px;
  max-width: 32px;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #A6A6A6;
  box-sizing: border-box
  font-weight: 400;
  font-size: 14px;
  font-family: 'Source Sans Pro';
  ${(props) => props.selected && `background: #1D1F22; color: white;`}
  ${(props) =>
    !props.selected && `color: #A6A6A6; background: rgba(166, 166, 166, 0.2);`}
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

export const Button = styled.button`
  display: flex;
  height: 24px;
  width: 24px;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d1f22;
  cursor: pointer;
  font-weight: 400;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 160%;
  :active {
    background: #1d1f22;
    color: white;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5 em;
  overflow-y: auto;
`;

export const CartFigure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  min-height: 137px;
  font-size: 14px;
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: 700;
  color: #1d1f22;
`;

export const Brand = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  margin: 0;
`;

export const Name = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  margin: 0;
`;

export const Price = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  margin: 0.1em 0;
`;

export const MiniCartPrices = styled.div`
  height: 100%
  padding : 1em 1em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Total = styled.h3`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
`;

export const TotalPrices = styled.h3`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
`;