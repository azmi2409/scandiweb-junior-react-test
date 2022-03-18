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
    align-items: flex-start;
    border-bottom: 2px solid #5ECE7B;
    color: #5ECE7B;
`

export const NavCategory = styled.div`
    display: flex;
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
`

export const NavMenu = styled.div`
    display: flex;
    margin: 0 1rem;
`