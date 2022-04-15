import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 6.3125rem;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7.125rem;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 11.5625rem;
  border-top: 0.0625rem solid #e5e5e5;
  border-bottom: 0.0625rem solid #e5e5e5;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 1.25rem 0;
  gap: 0.75rem;
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
  margin: 1.3125rem 0;
  gap: 0.75rem;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 160%;
  gap: 1.875rem;
`;

export const CartFigure = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

export const CartImg = styled.img`
  height: 100%;
  object-fit: contain;
  width: 9.375rem;
`;

export const Button = styled.button`
  display: flex;
  height: 2.8125rem;
  width: 2.8125rem;
  background: white;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid #1d1f22;
  cursor: pointer;
  font-weight: 400;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 160%;
  :active {
    background: #1d1f22;
    color: white;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #1d1f22;
`;

export const Brand = styled.h2`
  display: flex;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.6875rem;
  margin: 0.25rem 0;
`;

export const Name = styled.h2`
  display: flex;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.6875rem;
  padding: 0;
  margin: 0.875rem 0;
`;

export const Price = styled.h2`
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.125rem;
  padding: 0;
  margin: 0.875rem 0;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  background: rgba(57, 55, 72, 0.22);
  z-index: 50;
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
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  height: 100%;
  margin: 1em 0;
`;

export const RightPointer = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
  zindex: 10;
  align-items: center;
  cursor: pointer;
  ${CartFigure}:hover & {
    display: flex;
  }
`;

export const LeftPointer = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  right: 0;
  zindex: 10;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  ${CartFigure}:hover & {
    display: flex;
  }
`;

export const Attribute = styled.div`
  flex-direction: row;
  display: flex;
  gap: 0.75em;
`;
