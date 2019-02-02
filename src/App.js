import React from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import 'semantic-ui-css/semantic.min.css';
import { Button, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
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

const SignatureWrapper = styled(Segment.Group)`
  width: 100%;
  box-shadow: none !important;
`;

const Signed = styled.div`
  width: 100%;
  padding: 16px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const options={
  minWidth: 5,
  height: 200,
  penColor: 'rgb(2,2,2)'
};

class App extends React.Component {
  state = {
    signature: null
  }

  handleClear = () => this.signaturePad.instance.clear();

  handleSave = () => {
    if (this.signaturePad.isEmpty()) {
        // eslint-disable-next-line no-alert
        alert('Please provide a signature first.');
    } else {
      this.setState({ signature: this.signaturePad.toDataURL() })
    }
  }

  render() {
    const { signature } = this.state;

    return (
      <Wrapper>
        <Container>
          <Segment>
            <h2>Contract</h2>
            <ContractWrapper>
              <Contract />
            </ContractWrapper>
            {!signature &&
              <SignatureWrapper>
                <SignaturePad {...options} ref={ref => this.signaturePad = ref}  />
                <Segment>
                  <Button onClick={this.handleSave} primary>Click here to sign</Button>
                  <Button onClick={this.handleClear}>Clear</Button>
                </Segment>
              </SignatureWrapper>}
            {signature && <Signed>Signed:
              <Img src={signature} alt="signature" />
            </Signed>}
          </Segment>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
