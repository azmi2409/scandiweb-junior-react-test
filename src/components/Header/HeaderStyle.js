import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 5rem;
  max-width: 100vw;
  padding: 0.0625rem 6.3125rem;
  margin: 0;
`;

export const NavLink = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  padding-bottom: 2rem;
  padding-top: 1.75rem;
  height: 100%;
  padding: 0;
  margin: 0;
`;


export const NavItem = styled.li`
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.active &&
    `border-bottom: 0.125rem solid #5ECE7B;
    color: #5ECE7B;
    font-weight: 600;`}
`;

export const NavCategory = styled.div`
  display: flex;
  height: 100%;
  padding-left: 1rem;
  justify-content: flex-start;
`;

export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding-bottom: 1.25rem;
  padding-top: 1.875rem;
`;

export const NavMenus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  gap: 1.375rem;
`;

export const NavMenu = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 1.125rem;
  position: relative;
`;

export const Currency = styled.div`
  display: flex;
  padding: 1.25rem;
  position: absolute;
  flex-direction: column;
  gap: 3.125rem;
  top: 70%;
  left: -150%;
  bottom: 0;
  right: 0;
  font-size: 1.125rem;
  line-height: 160%;
  font-weight: 500;
  overflow: scroll;
  height: 10.5625rem;
  width: 7.125rem;
  background: #ffffff;
  box-shadow: 0 0.25rem 2.1875rem rgba(168, 172, 176, 0.19);
  z-index: 2000;
`;

export const CurrItem = styled.div`
  display: flex;
  :hover {
    background: #f5f5f5;
  }
`;

export const CartNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50%;
  right: -50%;
  height: 1.25rem;
  width: 1.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Roboto Condensed";
  background: #1d1f22;
  color: white;
  border-radius: 50%;
  z-index: 2000;
`;

export const ArrowImg = styled.img`
  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0deg)")};
`;
