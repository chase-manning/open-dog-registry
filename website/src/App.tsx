import styled from "styled-components";

import logo from "./assets/logo.png";
import CodeSnippet from "./components/CodeSnippet";
import Button from "./components/Button";

const REPO = "chase-manning/open-dog-registry";
const DOCS = `https://github.com/${REPO}`;
const DONATE = "https://buymeacoffee.com/chase8";

const StyledApp = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(white, var(--bg));
  padding: 2rem;
`;

const Logo = styled.img`
  height: 18rem;

  @media (max-width: 900px) {
    height: 12rem;
  }
`;

const Header = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--main);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

const Subheader = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--sub);
  max-width: 50rem;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    gap: 2rem;
    margin-top: 1.5rem;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Content>
        <Logo src={logo} alt="Open Dog Registry Logo" />
        <Header>Open Dog Registry</Header>
        <Subheader>A free and open-source API for dog breeds</Subheader>
        <CodeSnippet code="https://registry.dog/api/v1" />
        <Buttons>
          <Button href={DOCS} primary>
            View Docs
          </Button>
          <Button href={DONATE}>Donate</Button>
        </Buttons>
      </Content>
    </StyledApp>
  );
};

export default App;
