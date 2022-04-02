import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 1em;
  padding: 1em;
  margin: 1em;
`;

export const SidePict = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin-right: 2em;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1em;
`;