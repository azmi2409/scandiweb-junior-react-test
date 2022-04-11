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
  margin: 0.5em 1em;
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
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  height: 40vh;
  `;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1em;
  margin: 0.5em 1em;
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
`;

export const CartFigure = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  margin: 0 1em;
`;

export const CartImg = styled.img`
  height: 100%;
  object-fit: contain;
  width: 15vw;
`;

export const Button = styled.button`
  display: flex;
  height : 45px;
  width: 45px;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #1D1F22;
  cursor: pointer;
  font-weight: 400;
  :active {
  background: #1D1F22; 
  color: white;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  `;

export const Brand = styled.h2`
  font-size: 1em;
  font-weight: 600;
`;

export const Name = styled.h2`
  font-size: 1em;
  font-weight: 400;
`;

export const Price = styled.h2`
  font-size: 0.8em;
  font-weight: 700;
`;