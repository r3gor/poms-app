import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { Layout } from '../components/Layout';
import { CreatePage } from '../pages/create/CreatePage';
import { HomePage } from '../pages/home/HomePage';
import { PlansPage } from '../pages/plans/PlansPage';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/plans" component={PlansPage} />
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}
