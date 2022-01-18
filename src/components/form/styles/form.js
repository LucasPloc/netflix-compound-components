import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: "flex";
  flex-direction: column;
  min-height: 66rem;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 45rem;
  padding: 6.8rem 4rem;
  margin-bottom: 10rem;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  width: 100%;
`;
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 1.4rem;
  margin: 0 0 1.6rem;
  color: white;
  padding: 1.5rem 2rem;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 2.8rem;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 1.6rem;
  font-weight: 500;
`;
export const TextSmall = styled.p`
  margin-top: 1rem;
  font-size: 1.3rem;
  line-hright: normal;
  color: #8c8c8c;
`;
export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 5rem;
  line-height: 5rem;
  padding: 0.5rem 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  outline: none;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2.4rem 0 1.2rem;
  padding: 1.6rem;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
