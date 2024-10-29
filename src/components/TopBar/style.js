import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: #f9f9f9;
  height: 60px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Center = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Search = styled.input`
  height: 40px;
  min-width: 200px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonSocialMedia = styled.a`
  text-decoration: none;
  color: inherit;
  outline: none;
`;
