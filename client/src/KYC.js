import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Search, Header, Grid, Message, Modal, Button, Segment, Image, Container, Input } from 'semantic-ui-react'
import CertDemo from './diploma-cert.jpg';
import { Link } from 'react-router-dom';
import Viewcert from './Viewcert';

class KYC extends Component {
    render() {
        return (
            <div>
                <Container text>
                    Please enter the below to access graducate's certificates:
                    <br />
                    (i) Graducate Full Name
                    <br />
                    (ii) NRIC/FIN number of graduate.
                    <br />
                    <br />
                    Click <b>Next</b> to begin search.]
                    <br />
                    <br />
                </Container>
                <Container text>
                    <Grid columns={2} padded>
                        <Grid.Column>
                            Graducate Full Name* :
                    </Grid.Column>
                        <Input name="IDNumber" value="James Tsui Sau Chi" />
                        <Grid.Column>

                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} padded>
                        <Grid.Column>
                            NRIC/FIN number of graduate* :
                    </Grid.Column>
                        <Input name="IDNumber" value="s981842b" />
                        <Grid.Column>

                        </Grid.Column>
                    </Grid>
                    <Link to="/Viewcert"><Button color="blue" fluid>Next</Button></Link>
                </Container>
            </div>
        )
    }
}
export default KYC;