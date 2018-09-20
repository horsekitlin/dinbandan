import React from 'react';
import {Segment, Header, Grid, Image, Menu, Card, Button} from 'semantic-ui-react';

const HomeScene = ({logout, changePage}) =>
  <Segment basic>
    <Header as='h1' textAlign='center'>好食在</Header>
    <Header as='h2' textAlign='center'>合作餐廳</Header>
    <Grid>
      <Grid.Column style={{minWidth: '250px'}}>
        <Card>
          <Image src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
          <Card.Content>
            <Card.Header>八方雲集!!!</Card.Header>
            <Card.Meta>
              <p>中式料理</p>
              <p>營業時間: 09:00 ~ 12:00</p>
            </Card.Meta>
            <Card.Description>
              八方雲集的鍋貼
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button basi>店家詳情</Button>
              <Button basi>開團</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column style={{minWidth: '250px'}}>
        <Card>
          <Image src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
          <Card.Content>
            <Card.Header>八方雲集</Card.Header>
            <Card.Meta>
              <p>中式料理</p>
              <p>營業時間: 09:00 ~ 12:00</p>
            </Card.Meta>
            <Card.Description>
              八方雲集的鍋貼
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button basi>店家詳情</Button>
              <Button basi>開團</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column style={{minWidth: '250px'}}>
        <Card>
          <Image src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
          <Card.Content>
            <Card.Header>八方雲集</Card.Header>
            <Card.Meta>
              <p>中式料理</p>
              <p>營業時間: 09:00 ~ 12:00</p>
            </Card.Meta>
            <Card.Description>
              八方雲集的鍋貼
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button basi>店家詳情</Button>
              <Button basi>開團</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column style={{minWidth: '250px'}}>
        <Card>
          <Image src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
          <Card.Content>
            <Card.Header>八方雲集</Card.Header>
            <Card.Meta>
              <p>中式料理</p>
              <p>營業時間: 09:00 ~ 12:00</p>
            </Card.Meta>
            <Card.Description>
              八方雲集的鍋貼
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button basi>店家詳情</Button>
              <Button basi>開團</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column style={{minWidth: '250px'}}>
        <Card>
          <Image src='https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg' />
          <Card.Content>
            <Card.Header>八方雲集</Card.Header>
            <Card.Meta>
              <p>中式料理</p>
              <p>營業時間: 09:00 ~ 12:00</p>
            </Card.Meta>
            <Card.Description>
              八方雲集的鍋貼
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button basi>店家詳情</Button>
              <Button basi>開團</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid> 
  </Segment>

export default HomeScene;
