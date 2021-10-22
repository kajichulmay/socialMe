import "./App.css";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import NewsFeed from "./pages/NewsFeed";
import MyProfile from "./pages/MyProfile";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileSetting from "./components/profileSetting/ProfileSetting";
import LayoutWithChat from "./pages/LayoutWithChat";
function App() {
  return (
    <div className="bg-secondary w-full">
      <Header />
      <Content>
        <Switch>
          <Route exact path="/profile-setting" component={ProfileSetting} />

          <Route exact path="/userviewer" component={LayoutWithChat} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
