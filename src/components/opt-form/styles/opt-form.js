import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  max-width: 45rem;
  width: 100%;
  border: none;
  padding: 1rem;
  height: 5rem;
  font-size: 2rem;
  outline: none;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 5rem;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 3.2rem;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 1rem;
    filter: brightness(0) invert(1);
    width: 2rem;

    @media (max-width: 1000px) {
      width: 1.6rem;
    }
  }

  @media (max-width: 1000px) {
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
    font-weight: bold;
  }
`;
export const Text = styled.p`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;
