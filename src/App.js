import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Post from './components/Post/Post';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
function App() {
  return (
    <>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
