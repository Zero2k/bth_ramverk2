import React from 'react';
import styled from 'styled-components';
import { Header, Container, Divider } from 'semantic-ui-react';

const Root = styled.div``;

const ReportText = ({ report }) => ({
  render() {
    return (
      <Root>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }} content={`Report - ${report.title}`} />
          <p style={{ fontSize: '1.20em' }}>
            {report.description}
          </p>
          <Divider />
        </Container>
      </Root>
    )
  }
});

export default ReportText;
