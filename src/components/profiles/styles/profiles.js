import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;
export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 4.8rem;
  text-align: center;
  font-weight: 500;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const User = styled.div``;
export const Picture = styled.img`
  width: 100%;
  max-width: 15rem;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1.6rem;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;
export const Item = styled.li`
  max-height: 20rem;
  max-width: 20rem;
  list-style-type: none;
  text-align: center;
  margin-right: 3rem;

  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
