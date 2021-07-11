import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './App.css';
import Employee from './views/Employee';
import Management from './views/Management';

function App(): JSX.Element {
  const { Header, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">Employee</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/management">Management</Link>
              </Menu.Item>
              <Menu.Item key="3">Profil</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact component={Employee}></Route>
              <Route path="/management" exact component={Management}></Route>
            </Switch>
          </Content>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
