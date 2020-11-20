/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import Post1 from '../../assets/Post1.svg';

import {
  Container,
  Header,
  HeaderContent,
  Button,
  Post,
  Footer,
  PageContent,
  PageNotRegularContent,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="logo" />

          <Link to="/">
            <Button>Voltar</Button>
          </Link>
        </HeaderContent>
      </Header>

      <PageNotRegularContent>
        <h1>Blog</h1>
        <p>Posts para te auxiliar com técnicas de uso dos nosso produto</p>
      </PageNotRegularContent>

      <PageContent>
        <a
          target="_blank"
          href="https://medium.com/@vazcaino/a-import%C3%A2ncia-da-comunica%C3%A7%C3%A3o-no-desenvolvimento-de-software-3167e4d402eb"
        >
          <Post>
            <PageContent>
              <div style={{ marginTop: 20, marginLeft: 30 }}>
                <h1>
                  A importância da comunicação no desenvolvimento de software.
                </h1>
              </div>
              <img width={500} src={Post1} alt="" />
            </PageContent>
            <PageContent>
              <div style={{ marginLeft: 30 }}>
                <p>Autor: Luciano Vaz</p>
              </div>
              <div style={{ marginLeft: 50 }}>
                <p>Tempo de leitura: 5 min</p>
              </div>
            </PageContent>
          </Post>
        </a>
      </PageContent>
      <PageContent>
        <a
          target="_blank"
          href="https://medium.com/@vazcaino/a-import%C3%A2ncia-da-comunica%C3%A7%C3%A3o-no-desenvolvimento-de-software-3167e4d402eb"
        >
          <Post>
            <PageContent>
              <div style={{ marginTop: 20, marginLeft: 30 }}>
                <h1>Pair Programming: The Good, The Bad, and The Ugly.</h1>
              </div>
              <img
                width={500}
                src="https://miro.medium.com/max/700/0*wPN40eNkhZgT7NHP"
                alt=""
              />
            </PageContent>
            <PageContent>
              <div style={{ marginLeft: 30 }}>
                <p>Justin Travis Waith-Mair</p>
              </div>
              <div style={{ marginLeft: 50 }}>
                <p>Tempo de leitura: 6 min</p>
              </div>
            </PageContent>
          </Post>
        </a>
      </PageContent>

      <Footer>
        <p>Feito com ♥ pelos nossos Devs </p>
      </Footer>
    </Container>
  );
};

export default Main;
