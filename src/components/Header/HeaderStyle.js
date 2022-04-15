import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 80px;
  max-width: 100%;
  padding: 1px 101px;
  margin: 0;
`;

export const NavLink = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
  padding-bottom: 32px;
  padding-top: 28px;
  height: 100%;
  padding: 0;
  margin: 0;
`;


export const NavItem = styled.li`
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.active &&
    `border-bottom: 2px solid #5ECE7B;
    color: #5ECE7B;
    font-weight: 600;`}
`;

export const NavCategory = styled.div`
  display: flex;
  height: 100%;
  padding-left: 16px;
  justify-content: flex-start;
`;

export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 30px;
`;

export const NavMenus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  gap: 22px;
`;

export const NavMenu = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  position: relative;
`;

export const Currency = styled.div`
  display: flex;
  padding: 20px;
  position: absolute;
  flex-direction: column;
  gap: 50px;
  top: 70%;
  left: -150%;
  bottom: 0;
  right: 0;
  font-size: 18px;
  line-height: 160%;
  font-weight: 500;
  overflow: scroll;
  height: 169px;
  width: 114px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
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
  height: 20px;
  width: 20px;
  font-size: 14px;
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
