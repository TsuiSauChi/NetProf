import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Search, Header, Grid, Message, Button, Modal, Input } from 'semantic-ui-react'
import Menus from './Menus';

class Cert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [
            ],
            textvalue: {
                Name: "James Tsui",
                DiplomaCourse: "Diploma of Business Infomatics",
                Date: "26/12/2017",
                NoOfVerifer: 0,
                verifybtn: <Button onClick={this.verify}
                    color='blue'>Verify</Button>
            },
        }
        this.verify = this.verify.bind(this);
        this.createItem = this.createItem.bind(this);
    }
    verify() {
        this.state.value.forEach((value, index) => {
            if (value.Name == "James Tsui") {
                value.NoOfVerifer++;
                if (value.NoOfVerifer > 1) {
                    let button = <Button color="green">Verified</Button>
                }
                this.setState(
                    this.state
                )
            }
        })
        console.log(this.state);
    }
    createItem() {
        this.state.value.push(this.state.textvalue)
        //Back to this later
        this.setState(
            this.state
        )
        this.state;
    }
    render() {
        let button = null
        this.state.value.forEach((item, index) => {
            if (item.NoOfVerifer > 1) {
                button = <Button color="green">Verified</Button>
                console.log('test')
            } else {
                button = <Button onClick={this.verify} color='blue'>Verify</Button>
            }
        })
        return (
            < div >
                <Message
                    onDismiss={this.handleDismiss}
                    header='Welcome back!'
                    content='Please note that we are no database for prototyping'
                />
                <Grid>
                    <Grid.Column>
                        <Modal trigger={<Button floated='left' primary>Create Certificate</Button>}>
                            <Modal.Header>Create Diploma Certificate</Modal.Header>
                            <Modal.Content>
                                <Grid divided='vertically'>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            ID Number:
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Input name="IDNumber" value="s981842b" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            Name of Graducate
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Input name="NameOfGraducate" value="James Tsui" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            Course Name:
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Input name="CourseName" value="Diploma in Business Infomatics" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            Course Code:
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Input name="CourseCode" value="C78" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            Date of Conferment:
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Input name="DateOfConferment" value="23/1/2018" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            Date of Issue:
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Input name="DateOfIssue" value="23/1/2018" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Button color='green' positive onClick={this.createItem}>Create</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                </Grid>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Cert HashID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Diploma Course</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Verified By</Table.HeaderCell>
                            <Table.HeaderCell>
                                <Button color='green' positive onClick={this.verify}>Verify All</Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.value.map((value, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell><a>5c504ed432cb51138bcf09aa12t87deg</a></Table.Cell>
                                    <Table.Cell>{value.Name}</Table.Cell>
                                    <Table.Cell>{value.DiplomaCourse}</Table.Cell>
                                    <Table.Cell>{value.Date}</Table.Cell>
                                    <Table.Cell>NYP, Registrar
                                    <p style={{ float: "right", color: "#000080" }}>
                                            {value.NoOfVerifer}/2 Verified
                                    </p>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {button}
                                        <Button color='red'>Cancel</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }, this)}
                    </Table.Body>
                </Table>
            </div >
        );
    }
}

export default Cert;