import styled from "styled-components";

export const Container = styled.div`
  padding: 1em 2em;
  margin: 1em 2em;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  padding: 1em;
  margin: 1em;
  max-width: 100%;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 0.5em;
  width: 100%;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
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

export const CartLogo = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0;
  max-width: 52px;
  max-height: 52px;
  cursor: pointer;
  display: none;
  margin-right: 27px;
  transform: translateY(50%);
  
  :active {
    transform: scale(0.95);
    transform: translateY(50%);
  }

  ${Card}:hover & {
    display: flex;
  }
`;

export const CategoryName = styled.h1`
  font-size: 42px;
  line-height: 160%;
  font-weight: 400;
  margin: 0 1em;
  text-transform: capitalize;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 356px;
  height: 338px;
`;

export const ImgHero = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 338px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5em 1em;
  gap: 0.5em;
`;

export const PriceTag = styled.span`
  font-size: 18px;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  `;

export const Main = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  `;