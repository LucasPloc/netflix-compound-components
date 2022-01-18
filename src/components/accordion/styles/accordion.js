import styled from "styled-components";

export const Container = styled.div`
  display: "flex";
  border-bottom: 0.8rem solid #222;
`;
export const Inner = styled.div`
  display: flex;
  padding: 7rem 4.5rem;
  flex-direction: column;
  max-width: 81.5rem;
  margin: auto;
`;
export const Title = styled.h1`
  font-size: 3.7rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: white;
  text-align: center;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;
export const Frame = styled.div`
  margin-bottom: 4rem;
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 1rem;
  &:first-of-type {
    margin-top: 3rem;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.1rem;
  font-size: 2.5rem;
  font-weight: 300;
  background: #303030;
  padding: 1.2rem 1.8rem;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 2.5rem;

    @media (max-width: 600px) {
      width: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
export const Body = styled.div`
  transition: all 0.5s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 2rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 1.5rem 2.4rem;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 2.2rem;
    padding: 1.2rem 2rem;
  }
`;
