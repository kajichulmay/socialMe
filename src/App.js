import "./App.css";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import Post from "./components/Post/Post";
import MyProfile from "./pages/MyProfile";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
    return (
        <div className="bg-secondary w-full">
            <Header />
            <Content>
                <Switch>
                    <Route exact path="/myprofile" component={MyProfile} />
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </Content>
        </div>
    );
}

export default App;
