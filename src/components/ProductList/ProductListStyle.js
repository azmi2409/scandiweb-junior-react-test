import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  padding: 1em;
  margin: 1em;
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
  background: #FFFFFF;
  opacity: 0.5;
  display: flex;
  font-weight: 400;
  font-size: 1.5em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  color: #8D8F9A;
  z-index: 1000;
  :hover {
    opacity: 1;
  }
`;

export const CartLogo = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5em;
  max-width: 100%;
  max-height: 20rem;
  cursor: pointer;
  display: none;
  transform: translateY(60%);
  ${Card}:hover & {
    display: flex;
  }
`;