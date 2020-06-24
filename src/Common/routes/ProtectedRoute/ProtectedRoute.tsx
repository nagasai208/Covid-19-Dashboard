import React from 'react'
import { observer, inject } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = inject('authenticationStore')(
    observer(({ component: Component, path, authenticationStore, ...rest }) => {
        const { accessToken } = authenticationStore;
        return (
            <Route
                {...rest}
                render={props =>
                    accessToken !== undefined ? (
                        <Component />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: '/'
                                }}
                            />
                        )
                }
            />
        );
    })
);
export { ProtectedRoute };