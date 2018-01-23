import React, { Component } from 'react';
import { Menu, Segment, Button, Sidebar, Image, Icon, Header, Label, Input, Grid, Divider, Modal } from 'semantic-ui-react'
import Cert from './Cert';
import Viewcert from './Viewcert';
import KYC from './KYC'

class Menus extends Component {
  render() {
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='NetProf' />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button color='violet'>Setup 2FA</Button>
              </Menu.Item>
              <Menu.Item>
                <Button color='violet'>Sign Out</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular style={{ height: 800 }}>
              <Menu.Item name='Dashboard' />
              <Divider fitted />
              <Menu.Item name='Certificate' />
              <Divider fitted />
              <Menu.Item name='Organisation' />
              <Divider fitted />
              <Menu.Item name='List' />
              <Divider fitted />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              <KYC />
            </Segment>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default Menus;