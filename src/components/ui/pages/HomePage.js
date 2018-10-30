import React from "react";
import { PageHeader, Row, Col } from "react-bootstrap";
import CoverContainer from "../../containers/CoverContainer";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Col sm={10} md={12} lg={12}>
          <PageHeader>
            Carrer Coach
            <small>Subtext for header</small>
          </PageHeader>
        </Col>
        <Row>
          <CoverContainer />
        </Row>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={12}
            className="container-text-orange white-text"
          >
            <Col smOffset={1} mdOffset={1} lgOffset={1} sm={8} md={8} lg={8}>
              <h2>Carrer Coach</h2>
              <p className="text-fluid">
                A globalização mudou os parâmetros de empregabilidade, ou seja,
                a capacidade de angariar novos postos de trabalho. Contudo, uma
                coisa não mudou, em mídia impressa ou virtual o currículo pode
                ser comparado a um cartão de visitas profissional.A globalização
                mudou os parâmetros de empregabilidade, ou seja, a capacidade de
                angariar novos postos de trabalho. Contudo, uma coisa não mudou,
                em mídia impressa ou virtual o currículo pode ser comparado a um
                cartão de visitas profissional.
              </p>

              <p className="text-fluid">
                O currículo será seu instrumento para apresentação de seus
                conhecimentos, experiências e pretensões profissionais, ação que
                não é fácil! Portanto, antes de elaborar o currículo reflita
                sobre seus objetivos e liste todos seus conhecimentos em uma
                folha, isso facilitará sua tarefa.
              </p>
            </Col>
          </Col>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Col smOffset={1} mdOffset={1} lgOffset={1} sm={8} md={8} lg={8}>
                <h2>Assessoria de carreira</h2>
                <p className="text-fluid">
                  Hoje vemos aos montes profissionais e anúncios de assessoria
                  de carreira, minha pergunta é sempre a mesma, como alguém que
                  nunca atuou em recursos humanos e em assessoria de carreira,
                  por melhor que seja seu preparo poderá fazer um
                  aconselhamento!!! Não caia em armadilhas, lembre-se o
                  aconselhamento de carreiras é uma rota para que você atingir
                  seu objetivo, por isso seja criterioso (a).
                </p>

                <p className="text-fluid">
                  No mundo contemporâneo, conhecimento é uma vantagem
                  competitiva, incluindo saber seus pontos favoráveis e a serem
                  aprimorados, por isso, conte uma assessoria de qualidade, essa
                  à ajudará a perceber as situações sob um novo prisma e a
                  elaborar estratégias para atingir seu objetivo.
                </p>
                <PageHeader>
                  <small>
                    Na assessoria de carreira você receberá o ferramental
                    necessário para avaliar sua carreira e elaborar um
                    planejamento para atingir suas metas ancorado (a) em
                    ferramentas e metodologias adequadas.
                  </small>
                </PageHeader>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Col smOffset={1} mdOffset={1} lgOffset={1} sm={8} md={8} lg={8}>
                <h2>Currículo</h2>
                <p className="text-fluid">
                  O currículo é seu cartão de visitas ele deve apresentar seus
                  conhecimentos, habilidades e experiências de vida ou
                  profissionais. Para tal, deverá ser sintético, limpo e sem
                  erros ortográficos. Não esqueça de periodicamente o atualizar,
                  isso é muito importante, pois vivemos em um mundo globalizado
                  e em permanente mudanças.
                </p>
                <h2>Currículo primeiro emprego</h2>
                <p className="text-fluid">
                  Não é porque você nunca trabalhou que deverá se descuidar do
                  seu currículo, pois existem pontos como sua formação,
                  vivências que são de grande importância para o seu potencial
                  empregador. Nem sempre é fácil esta elaboração, por isso
                  contar com um especialista é de extrema relevância, fazer um
                  diagnóstico de suas potencialidades e possíveis oportunidades
                  inclui o processo.
                </p>
                <h2>Currículo acadêmico</h2>
                <p className="text-fluid">
                  Atualmente muitos profissionais tem se interessado pela
                  carreira acadêmica está transição ou até trabalho concomitante
                  a vida corporativa, as vezes é um pouco complicado. Os
                  critérios para a vida acadêmica são outros, que não excluem a
                  vida corporativa, mais vão bem além, dessa esfera. Cursos de
                  aprimoramento, atividades acadêmicas e voluntariados incluem a
                  carreira acadêmica que possui um currículo diferenciado. Conte
                  com nossa assessoria para a elaboração do seu currículo
                  acadêmico.
                </p>
                <PageHeader>
                  <small>
                    Na assessoria de carreira você receberá o ferramental
                    necessário para avaliar sua carreira e elaborar um
                    planejamento para atingir suas metas ancorado (a) em
                    ferramentas e metodologias adequadas.
                  </small>
                </PageHeader>
              </Col>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
