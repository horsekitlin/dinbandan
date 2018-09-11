import React from 'react';
import HomeScene from './components/HomeScene';
import { Sidebar, Segment, Menu, Button, Dropdown, Icon, Container } from 'semantic-ui-react';

const Navbar = ({handleOpenSidebar, logout}) =>
  <Menu>
    <Menu.Item>
      <Button icon='bars' circular onClick={handleOpenSidebar}/>
    </Menu.Item>
    <Menu.Menu position='right'>
    <Menu.Item>
      <Dropdown icon='cog' labeled button>
        <Dropdown.Menu>
          <Dropdown.Item text='登出'onClick={logout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    </Menu.Menu>
  </Menu>

const MainSceneContent = ({currentPage, ...props}) => {
  switch (currentPage) {
    case 'home':
    default:
      return <HomeScene {...props} />
  }
};

class MainContentWithNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  render() {
    return(
        <Sidebar.Pushable as={Segment} basic style={{width: '100vw', height: '100vh'}}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={() => this.setState({showSidebar: false})}
            vertical
            visible={this.state.showSidebar}
            width='thin'>
            <Menu.Item> <Icon name='user'/>使用者列表</Menu.Item>
            <Menu.Item> <Icon name='map marker'/>餐廳列表</Menu.Item>
            <Menu.Item> <Icon name='calendar alternate outline'/>揪團列表</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Navbar
              logout={this.props.logout}
              handleOpenSidebar={() => this.setState({showSidebar: true})} />
            <Container><MainSceneContent {...this.props} /></Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
  }
}

export default MainContentWithNavbar;
