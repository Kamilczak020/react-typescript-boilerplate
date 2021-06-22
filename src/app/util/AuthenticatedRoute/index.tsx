import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { exists } from '../exists';

export interface AuthenticatedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isAllowed: boolean;
  restrictedPath: string;
  authenticationPath: string;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = (props) => {
  let redirectPath: string;
  if (!props.isAuthenticated) {
    redirectPath = props.authenticationPath;
  }
  if (props.isAuthenticated && !props.isAllowed) {
    redirectPath = props.restrictedPath;
  }

  if (exists(redirectPath)) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  }

  return <Route {...props} />;
};
