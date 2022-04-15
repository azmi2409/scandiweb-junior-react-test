import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 6.375rem;
  padding-bottom: 11.9375rem;
  margin: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  margin: 0;
  column-gap: 0.5rem;
  row-gap: 6.4375rem
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  `;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1em;
  margin: 0;
  width: 24.125em;
  height: 27.75em;
  :hover {
    box-shadow: 0 0.4em 2.1875rem rgba(168, 172, 176, 0.19);
  }
  @media (max-width: 1366px) {
    width: 22.6775em;
    height: 26.085em;
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
  font-size: 1.5rem;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  color: #8d8f9a;
  z-index: 2;
`;

export const CartLogo = styled.div`
  display: flex;
  position: absolute;
  bottom: -3.125rem;
  right: 1.9375rem;
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
  font-size: 2.625rem;
  line-height: 160%;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 1.3125rem;
`;

export const ImgHero = styled.img`
  object-fit: contain;
  height: 21.25rem;
  width: 22.25rem;

  @media (max-width: 1366px) {
    height: 19.5rem;
    width: 20.5rem;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.3125rem;
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
  z-index: 3;
`;

export const PriceTag = styled.span`
  font-size: 1.125rem;
  line-height: 160%;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
`;

export const Main = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  position: relative;
`;
