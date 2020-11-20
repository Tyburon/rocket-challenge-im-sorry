/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import firstImage from '../../assets/first-content.png';
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image2.png';
import Image3 from '../../assets/Image3.png';
import Parceiros1 from '../../assets/Parceiros1.png';
import Parceiros2 from '../../assets/Parceiros2.png';
import ContactImage from '../../assets/ContactImage.png';

import {
  Container,
  Header,
  HeaderContent,
  Button,
  MenuList,
  MenuListItem,
  PageFirstContent,
  PageRegularContent,
  PageNotRegularContent,
  Contato,
  Input,
  Footer,
} from './styles';

const Main: React.FC = () => {
  // Desculpa pela qualidade do codigo, eu realmente fiz o melhor qeu pude com o tempo que tinha
  // Me desculpa pelas gambiarras de Css, eu consigo fazer melhor, mas pra fazer rapido é mais facil de pensar

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="logo" />

          <MenuList>
            <MenuListItem>
              <a href="#quemSomos">Quem somos ?</a>
            </MenuListItem>
            <MenuListItem>
              <a href="#beneficios">Beneficios</a>
            </MenuListItem>
            <MenuListItem>
              <a href="#parceiros">Parceiros</a>
            </MenuListItem>
            <MenuListItem>
              <Link to="/blog">Blog</Link>
            </MenuListItem>
          </MenuList>

          <a href="#contato">
            <Button>Contato</Button>
          </a>
        </HeaderContent>
      </Header>

      <PageFirstContent>
        <div style={{ marginRight: 150 }}>
          <h1>
            Comunicação, <br /> a chave para o <br /> sucesso!
          </h1>
        </div>
        <div>
          <img src={firstImage} alt="" />
        </div>
      </PageFirstContent>
      <PageRegularContent id="quemSomos">
        <div>
          <img src={Image1} alt="" />
          Illustration by <a href="undefined">Icons 8</a> from{' '}
          <a href="https://icons8.com/">Icons8</a>
        </div>
        <div
          style={{
            marginLeft: 80,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 400,
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Quem Somos ?</h1>
          <p style={{ marginTop: 50, textAlign: 'left' }}>
            A comunicação (do latim communicatio.onis, que significa "ação de
            participar") é um processo que envolve a troca de informações entre
            dois ou mais interlocutores por meio de signos e regras semióticas
            mutuamente entendíveis. Trata-se de um processo social primário, que
            permite criar e interpretar mensagens que provocam uma resposta. -
            Wikipedia
          </p>
        </div>
      </PageRegularContent>
      <PageRegularContent>
        <div
          style={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 400,
          }}
        >
          <p style={{ marginTop: 50, textAlign: 'left' }}>
            Nossa empresa é provavelmente uma das mais tradicionais de todo o
            universo. Para acompanhar os seres humanos, nós também evoluimos
            nossos processos constantemente há milhoes de anos, para sempre
            proporcionar a melhor experiência possível para você, o nosso bem
            mais estimado.
          </p>
        </div>
        <div style={{ marginLeft: 120, marginTop: 40 }}>
          <img src={Image2} alt="Uma de nossas antigas logos" />
        </div>
      </PageRegularContent>
      <PageRegularContent>
        <div style={{ marginLeft: 40, marginTop: 40 }}>
          <img src={Image3} alt="" />
        </div>
        <div
          style={{
            marginLeft: 150,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 400,
          }}
        >
          <p style={{ marginTop: 10, textAlign: 'left' }}>
            o processo da comunicação é essencial a nós seres humanos em todas
            as situações, e na área de desenvolvimento de software não seria
            diferente. Em todos os processos dentro de uma empresa a comunicação
            se prova uma condição ‘sine qua non’ para o sucesso de todas as
            etapas do processo, desde a comunicação com o cliente para o
            levantamento de requisitos, até a comunicação do product owner com o
            time para o desenvolvimento do projeto.
          </p>
        </div>
      </PageRegularContent>
      <PageNotRegularContent id="beneficios">
        <h1>Beneficios</h1>
        <PageRegularContent>
          <div style={{ width: 400, marginRight: 100 }}>
            <p style={{ marginTop: 10, textAlign: 'left' }}>
              A exemplo das melhores tecnologias do mercado, nós adaptamos a
              frase “Write once, run anywhere” ao nosso negócios. Uma vez
              utilizando nosso produto com boas práticas, muitos provetios podem
              ser tirados além da proposta inical de aperfeiçoar suas
              habilidades visando apenas os negócios.
            </p>
          </div>
          <div style={{ width: 400 }}>
            <p style={{ marginTop: 10, textAlign: 'left' }}>
              Apesar do tempo necessário ao processo de aprendizado de uso do
              nossos serviços, após alguma tempo de uso se torna cada vez mais
              simples de usar e aprender.
            </p>
          </div>
        </PageRegularContent>
      </PageNotRegularContent>
      <PageNotRegularContent id="parceiros">
        <h1>Parceiros</h1>

        <img style={{ marginTop: 140 }} src={Parceiros1} alt="" />
        <img style={{ marginTop: 112 }} src={Parceiros2} alt="" />
      </PageNotRegularContent>
      <PageNotRegularContent id="contato">
        <h1>Contato</h1>
        <Contato style={{ marginTop: 80 }}>
          <PageRegularContent style={{ margin: 0 }}>
            <img src={ContactImage} alt="" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 480,
                alignSelf: 'center',
                marginLeft: 80,
              }}
            >
              <label>Nome</label>
              <Input />
              <div
                style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: 10,
                  }}
                >
                  <label style={{}}>Email</label>
                  <Input />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 10,
                  }}
                >
                  <label style={{}}>Telefone</label>
                  <Input />
                </div>
              </div>

              <label>Mensagem</label>
              <Input />
              <div style={{ marginTop: 32, alignSelf: 'flex-end' }}>
                <Button>Enviar </Button>
              </div>
            </div>
          </PageRegularContent>
        </Contato>
      </PageNotRegularContent>
      <Footer>
        <p>Feito com ♥ pelos nossos Devs </p>
      </Footer>
    </Container>
  );
};

export default Main;
