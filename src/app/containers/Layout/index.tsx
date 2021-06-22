import React from 'react';
import { Redirect, Router, Switch } from 'react-router';
import { History } from 'history';
import * as style from './style.scss';
import './theme.scss';

interface LayoutProps {
  history: History;
}

export const Layout = (props: LayoutProps) => (
  <div className={style.pageContainer}>
    <Router history={props.history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  </div>
);
