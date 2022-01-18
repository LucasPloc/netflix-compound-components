import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.8rem solid #222;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none`}
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  margin: 0 5.6rem;
  height: 6.4rem;
  padding: 1.8rem 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 3rem;
  }
`;

export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 3rem;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type: {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 1rem;
  top: 3.2rem;
  right: 1rem;
  width: 15rem;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 1rem;
  }
  p {
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 2rem;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.5s ease;
  font-weight: bold;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 3rem;
  font-size: 1.4rem;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
export const Logo = styled.img`
  height: 3.2rem;
  width: 10.8rem;
  margin-right: 4rem;

  @media (max-width: 1449px) {
    height: 4.5rem;
    width: 10rem;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background: #e50914;
  width: 8.5rem;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1.5rem;
  border-radius: 0.3rem;
  padding: 0.8rem 1.7rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled(Container)`
  padding: 15rem 0 50rem 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 2.2rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallout = styled.h2`
  color: white;
  font-size: 5rem;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 2rem;
`;
