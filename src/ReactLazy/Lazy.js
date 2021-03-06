import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComponentA from '../MountingLifeCycles/ComponentA';
import Parent from '../PureComponents/Parent';

const Memo = lazy(() => import('../Memo/Memo'));
const CnText = lazy(() => import('../CreateContext/CreateContext/Context'));
const Hooks = lazy(() => import('../Hooks/HooksExp'));

export default class Lazy extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading.....</div>}>
                    <Switch>
                        <Route exact path="/" component={Memo} />
                        <Route path="/context" component={CnText} />
                        <Route path="/hooks" component={Hooks} />
                        <Route path="/mounting-lifecycles" component={ComponentA} />
                        <Route path="/pure-components" component={Parent} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}
