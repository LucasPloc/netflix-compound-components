import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 16.5rem 4.5rem;
  max-width: 81.5rem;
  margin: auto;
`;
export const Title = styled.h1`
  color: white;
  max-width: 64rem;
  font-size: 5rem;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`;
export const SubTitle = styled.h2`
  color: white;
  font-size: 2.6rem;
  font-weight: normal;
  margin: 1.6rem auto;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
