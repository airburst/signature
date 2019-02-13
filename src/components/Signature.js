import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const SignatureWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  color: #999;
`;

const SignatureButtonsContainer = styled.div`
  padding: 8px;
  border-top: 1px solid #e2e2e2;
`;

const Signed = styled.div`
  width: 100%;
  padding: 16px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const options = {
  minWidth: 5,
  height: 200,
  penColor: 'rgb(2,2,2)'
};

class Signature extends Component {
  state = {
    signature: null
  };

  static propTypes = {
    saveAction: PropTypes.func.isRequired
  };

  handleClear = () => this.signaturePad.instance.clear();

  handleSave = () => {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const signatureImage = this.signaturePad.toDataURL();
      this.setState(
        { signature: signatureImage },
        this.props.saveAction(signatureImage)
      );
    }
  };

  render() {
    const { signature } = this.state;

    return (
      <Fragment>
        {!signature && (
          <SignatureWrapper>
            Please sign in this box
            <SignaturePad {...options} ref={ref => (this.signaturePad = ref)} />
            <SignatureButtonsContainer>
              <Button onClick={this.handleSave} primary>
                Click here to sign
              </Button>
              <Button onClick={this.handleClear}>Clear</Button>
            </SignatureButtonsContainer>
          </SignatureWrapper>
        )}
        {signature && (
          <Signed>
            Signed:
            <Img src={signature} alt="signature" />
          </Signed>
        )}
      </Fragment>
    );
  }
}

export default Signature;