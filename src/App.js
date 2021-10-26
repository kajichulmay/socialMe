import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { PostContextProvider } from './context/postContext';
import route from './config/route';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';

function App() {
  const { user } = useContext(AuthContext);
  const role = user ? 'user' : 'guest';
  const history = useHistory();

  return (
    <div className="bg-secondary w-full">
      <PostContextProvider>
        <Header />
        <Content>
          <Switch>
            {route[role].route.map(item => (
              <Route key={item.path} exact path={item.path} component={item.component} />
            ))}
            <Redirect to={route[role].redirect} />
          </Switch>
        </Content>
      </PostContextProvider>
    </div>
  );
}

export default App;
