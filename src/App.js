import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Post from './components/Post/Post';
import Headlessui from './components/layout/Headlessui';
import TestTailwind from './components/TestTailwind';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Content>
        <Post />
        <Switch>
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
