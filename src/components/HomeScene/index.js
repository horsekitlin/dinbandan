import React from 'react';
import {Segment, Header, Grid, Image, Menu} from 'semantic-ui-react';

const HomeScene = ({logout, changePage}) =>
  <Segment basic>
    <Header as='h1' textAlign='center'>好食在</Header>
    <Header as='h2' textAlign='center'>合作餐廳</Header>
    <Grid columns={2} celled verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image
            size='medium'
            src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>八方雲集</Segment>
            <Segment>中式料理</Segment>
            <Segment>營業時間: 09:00 ~ 12:00</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image
            size='medium'
            src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>八方雲集</Segment>
            <Segment>中式料理</Segment>
            <Segment>營業時間: 09:00 ~ 12:00</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image
            size='medium'
            src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>八方雲集</Segment>
            <Segment>中式料理</Segment>
            <Segment>營業時間: 09:00 ~ 12:00</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image
            size='medium'
            src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>八方雲集</Segment>
            <Segment>中式料理</Segment>
            <Segment>營業時間: 09:00 ~ 12:00</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image
            size='medium'
            src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>八方雲集</Segment>
            <Segment>中式料理</Segment>
            <Segment>營業時間: 09:00 ~ 12:00</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid> 
  </Segment>

export default HomeScene;
