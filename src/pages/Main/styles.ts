import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  height: 80px;
  padding: 14px 0;
  background: #fafafa;
  align-items: center;
  align-content: center;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  width: 250px;
  height: 45px;
  left: 123px;
  top: 28px;
  font-size: 36px;
  line-height: 50px;

  color: #000000;
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Button = styled.button`
  background: #fc0097;
  height: 48px;
  border-radius: 24px;
  border: 0;
  padding: 0 16px;
  width: 160px;
  color: #fafafa;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#fc0097')};
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const MenuListItem = styled.li`
  color: #000;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
  }

  & + li {
    margin-left: 16px;
  }
`;

export const PageFirstContent = styled.div`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 56px;
    color: #000;
  }
`;

export const PageRegularContent = styled.div`
  max-width: 1120px;
  margin: 150px auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  h1 {
    color: #000;
    font-size: 40px;
  }

  p {
    color: #000;
  }

  label {
    color: #000;
    align-self: flex-start;
  }
`;

export const PageNotRegularContent = styled.div`
  max-width: 1120px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  h1 {
    color: #000;
    font-size: 62px;
  }

  p {
    color: #000;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Contato = styled.div`
  width: 1118px;
  height: 638px;
  background: #fafafa;
  border-radius: 79px;
`;

export const Input = styled.input`
  background: #b5ddff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #b5ddff;
  color: #000;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  height: 100px;
  padding: 14px 0;
  background: #fafafa;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 20px;
    color: #312e38;
    align-self: center;
  }
`;
