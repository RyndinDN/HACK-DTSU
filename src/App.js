import React from "react";
import Index from "pages/index";
import Channels from "pages/channels";
import Channels1 from "pages/channels1";
import Channels2 from "pages/channels2";
import Channels21 from "pages/channels21";
import Channels211 from "pages/channels211";
import Index1 from "pages/index1";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/channels' component={Channels}/>
			<Route exact path='/channels1' component={Channels1}/>
			<Route exact path='/channels2' component={Channels2}/>
			<Route exact path='/channels21' component={Channels21}/>
			<Route exact path='/channels211' component={Channels211}/>
			<Route exact path='/index1' component={Index1}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
