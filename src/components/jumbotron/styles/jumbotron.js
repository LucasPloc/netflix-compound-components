import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 5rem 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 110rem;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
    padding: 0 4.5rem;
  }
`;
export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 0.8rem;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
export const SubTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  margin-top: 1.2rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 5rem;
    }
  }
`;
