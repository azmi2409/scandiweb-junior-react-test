import styled from "styled-components";

export const Container = styled.div`
  padding: 2em 1em;
  margin: 0 0.5em;
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
  width: 100%;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 16px;
  gap: 0.5em;
  width: 386px;
  height: 444px;
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
  bottom: -26px;
  right: 31px;
  padding: 0;
  display: none;

  :active {
    transform: scale(0.95);
  }

  ${Card}:hover & {
    display: flex;
  }
`;

export const CartImage = styled.img`
  display: flex;
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
  object-fit: contain;
  height: 338px;
  width: 356px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PriceTag = styled.span`
  font-size: 18px;
  line-height: 160%;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
`;

export const Main = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;
