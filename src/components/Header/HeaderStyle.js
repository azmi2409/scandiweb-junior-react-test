import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  max-height: 20vh;
  max-width: 100vw;
  padding: 1em;
`;

export const NavLink = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
    padding: 0;
    margin: 0;
`;

export const NavItem = styled.li`
    margin: 0 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    height: 100%;
    align-items: center;
`

export const NavCategory = styled.div`
    display: flex;
    height: 100%;
`

export const NavBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavMenus = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
`

export const NavMenu = styled.div`
    display: flex;
    margin: 0 0.5rem;
`

export const Currency = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    right: 0;
    overflow: hidden;
    font-size: 0.9em;
    height: 300%;
    width: 100%;
    transform: translateY(92%) translateX(-20%);
    background: #FFFFFF;
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
    height: 1.5em;
    width: 1.5em;
    font-size: 0.9em;
    padding: 0.3em;
    background: #1D1F22;
    color: white;
    border-radius: 50%;
    z-index: 2000;
    transform: translateY(20%) translateX(20%);
`;