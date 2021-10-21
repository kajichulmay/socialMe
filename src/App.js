import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import NewsFeed from './pages/NewsFeed';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Content>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/newsfeed" component={NewsFeed} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
