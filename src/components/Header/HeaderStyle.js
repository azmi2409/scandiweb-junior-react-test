import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 20vh;
  max-width: 100vw;
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
    margin: 0 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    height: 100%;
    align-items: center;
    ${props => props.active && `border-bottom: 2px solid #5ECE7B;
        color: #5ECE7B;`
    }
`;

export const NavCategory = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-start;
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
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
`

export const NavMenu = styled.div`
    display: flex;
    margin: 0 0.5rem;
    padding: 0 0.5rem;
`

export const Currency = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    right: 0;
    font-size: 0.9em;
    height: 220%;
    transform: translateY(90%) translateX(-30%);
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
    transform: translateY(20%);
`;