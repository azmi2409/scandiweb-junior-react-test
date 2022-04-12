import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 80px;
  max-width: 1440px;
  padding: 1em 3em;
  margin: 0 2em;
`;

export const NavLink = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 1em;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  height: 100%;
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
  justify-content: flex-start;
`;

export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavMenus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;
`;

export const NavMenu = styled.div`
  display: flex;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  font-weight: 500;
  font-size: 18px;
`;

export const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  right: 0;
  font-size: 18px;
  line-height: 160%;
  font-weight: 500;
  height: 169px;
  width: 114px;
  transform: translateY(90%) translateX(-30%);
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  z-index: 2000;
`;

export const CartNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 20px;
  width: 20px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto Condensed';
  background: #1d1f22;
  color: white;
  border-radius: 50%;
  z-index: 2000;
  margin-top: 0.8em;
  margin-right: 0.2em;
`;

export const ArrowImg = styled.img`
    transform: ${(props) => (props.rotate? 'rotate(180deg)' : 'rotate(0deg)')};
    `;