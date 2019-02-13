import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import Signature from './components/Signature';
import Contract from './contract';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #f6f6f6;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  margin: auto;
`;

const ContractWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  background-color: #fcfcfc;
  margin-bottom: 16px;
  padding: 16px;
`;

class App extends React.Component {
  saveHandler = signatureImage => {
    console.log(
      'Please replace this with a real persist function to save data'
    );
    console.log(signatureImage);
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Segment>
            <h2>Contract</h2>
            <ContractWrapper>
              <Contract />
            </ContractWrapper>
            <Signature saveAction={this.saveHandler} />
          </Segment>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
