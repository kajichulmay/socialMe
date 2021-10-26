import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import NewsFeed from './pages/NewsFeed';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileSetting from './pages/ProfileSetting';
import { PostContextProvider } from './context/postContext';
import { Modal } from '@mui/material';

function App() {
  return (
    <div className="bg-secondary w-full">
      <PostContextProvider>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/profile-setting" component={ProfileSetting} />
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/newsfeed" component={NewsFeed} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Content>
      </PostContextProvider>
    </div>
  );
}

export default App;
