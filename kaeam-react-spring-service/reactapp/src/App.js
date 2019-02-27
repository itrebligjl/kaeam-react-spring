import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import './index.css';

import ServerInfo from "./ServerInfo";
import ProcessDefsInfo from "./ProcessDefsInfo";
import ProcessInstancesInfo from "./ProcessInstancesInfo";
import TasksInfo from "./TasksInfo";

import GlobalNav from "./client/components/GlobalNav";
import Nav       from './client/components/Nav';
import navSwitch from './client/components/homeNav';
import TabsBuild from './client/components/TabsBuild';
import Footer    from './client/components/Footer';
import Shortcuts from './client/components/Shortcuts';
import Login     from './client/components/Login';
import Solution  from './client/components/Solution';
import Search    from './client/components/Search';
import Elicit    from './client/components/Elicit';
import Discover  from './client/components/Discover';
import Reuse     from './client/components/Reuse';
import Adapt     from './client/components/Adapt';
import Deploy    from './client/components/Deploy';
import WorkSpace from './client/components/WorkSpace';
import DiscoverReview from './client/components/DiscoverReview';
import Operate   from './client/components/Operate';
import OperateRun from './client/components/OperateRun';
import Visualize from './client/components/Visualize';
import VisReview from './client/components/VisReview';

class App extends Component {

    render() {
        return (
          <Router>
            <div className="App">
                <GlobalNav />
                <ServerInfo />
                <ProcessDefsInfo/>
                <ProcessInstancesInfo/>
                <TasksInfo/>
                {/* <div class="jumbotron jumbotron-fluid" className="ReactTitleStyle">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <strong><h3>Welcome to your jBPM React Business Application!</h3></strong>
                    </p>
                    <br/>
                </div> */}
                {/* <div class="container">
                    <Route
                    path="*"
                    render={props => (
                        <Nav nav={navSwitch(props.location.pathname)} />
                    )}
                    />
                    <section className="container">
                        <article className="columns">
                            <div className="container">
                                <main className="column">
                                    <Switch>
                                        <Route exact path="/" component={Login} />
                                        <Route exact path="/solution" component={Solution} />
                                        <Route exact path="/solution/workspace" component={WorkSpace} />
                                        <Route
                                        path="/solution/build"
                                        render={props => (
                                            <span>
                                            <TabsBuild
                                                nav={navSwitch(props.location.pathname)}
                                                path={props.location.pathname}
                                            />
                                            <Route exact path="/solution/build/elicit" component={Elicit} />
                                            <Route exact path="/solution/build/search" component={Search} />
                                            <Route exact path="/solution/build/discover" component={Discover} />
                                            <Route exact path="/solution/build/discoverreview" component={DiscoverReview} />
                                            <Route exact path="/solution/build/reuse" component={Reuse} />
                                            <Route exact path="/solution/build/adapt" component={Adapt} />
                                            <Route exact path="/solution/build/deploy" component={Deploy} />
                                            </span>
                                        )}
                                        />
                                        <Route exact path="/solution/operate" component={Operate} />				
                                        <Route exact path="/solution/operaterun" component={OperateRun} />
                                        <Route exact path="/solution/visualize" component={Visualize} />
                                        <Route exact path="/solution/visreview" component={VisReview} />
                                    </Switch>
                                </main>
                            </div>
                            <aside className="column is-one-quarter">
                                <Shortcuts />
                            </aside>
                        </article>
                        <Footer />
                    </section>
                </div> */}
            </div>
        </Router>
        );
    }
}

export default App;
