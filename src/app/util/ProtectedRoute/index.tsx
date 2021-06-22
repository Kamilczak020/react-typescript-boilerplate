import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { exists } from '../exists';

export interface ProtectedRouteProps extends RouteProps {
  isAllowed: boolean;
  restrictedPath: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath: string;

  if (!props.isAllowed) {
    redirectPath = props.restrictedPath;
  }

  if (exists(redirectPath)) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  }
  return <Route {...props} />;
};
