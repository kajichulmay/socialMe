import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Headlessui from './components/layout/Headlessui';
import TestTailwind from './components/TestTailwind';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/myprofile" component={MyProfile} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
