import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Search, Header, Grid, Message, Modal, Button, Segment, Image } from 'semantic-ui-react'
import CertDemo from './diploma-cert.jpg';

class Viewcert extends Component {
  render() {
    return (
      <div className="App">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={7}>
              <Segment.Group>
                <Segment>
                  <Header as='h3'>Certificate Info</Header>
                </Segment>
                <Segment><b>Type:</b> Diaploma Certificate</Segment>
                <Segment><b>Signing Parties: </b>
                  NYP, Registrar
                  <p style={{ float: "right", color: "#000080" }}>
                    2/2 Verified
                  </p>
                </Segment>
                <Segment><b>Certificate Hash:</b> 19ghd981hy98hy98yh198e12</Segment>
                <Segment><b>Final Hash:</b> 9781he98h981yh908yh9812d21</Segment>
                <Segment>
                  <Header as='h3'>Student Info</Header>
                </Segment>
                <Segment><b>Name: </b>James Tsui</Segment>
                <Segment><b>Diaploma Course:</b> Diaploma in Business Infomatics</Segment>
                <Segment><b>Date: </b>26/12/2017</Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column width={9}>
              <img src={CertDemo} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Viewcert;