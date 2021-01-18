import React from 'react';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NoMatchPage from 'pages/NoMatch';

const router: React.FunctionComponent = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname.split('/')[1]}
                timeout={300}
                mountOnEnter
                unmountOnExit
                classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" render={() => <Redirect to="/splash" />} />
                  <Route path="*" component={NoMatchPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </Router>
  );
};

export default router;
