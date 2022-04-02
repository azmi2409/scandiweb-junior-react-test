import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 8fr;
  grid-gap: 1em;
  padding: 1em;
  margin: 1em;
  width: 100%;
`;

export const SidePict = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    height: 70vh;
    overflow: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1em;
    width: 100%;
`;

export const MainPict = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    justify-content: flex-start;
    align-items: center;
    padding: 1em 2em;
`;