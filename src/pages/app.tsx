import React, { Fragment, Suspense, lazy } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import router from '@/common/router';
import { Spin, Button, Row, Col } from 'antd';

//模块
const Module1 = lazy(() => import('@/pages/module_1'));
const Module2 = lazy(() => import('@/pages/module_2'));
const Module3 = lazy(() => import('@/pages/module_3'));
//error
const Error = lazy(() => import('@/pages/exception/error'));
//404
const PageNoFind = lazy(() => import('@/pages/exception/404'));

export default function View() {
    return <Fragment>
        <Router history={router}>
            <Row>
                <Col span={12} offset={6}>
                    <Button type="primary">
                        <Link to="/module1">React</Link>
                    </Button>
                &nbsp;
                    <Button type="primary">
                        <Link to="/module2">Typescript</Link>
                    </Button>
                &nbsp;
                    <Button type="primary">
                        <Link to="/module3">Antd</Link>
                    </Button>
                </Col>
            </Row>
            <Suspense fallback={<Spin />}>
                <Switch>
                    <Route path="/" component={Module1}>
                        <Route exact path="/module1" component={Module1} />
                        <Route path="/module2" component={Module2} />
                        <Route path="/module3" component={Module3} />
                        <Route path="/error" component={Error} />
                    </Route>
                    <Route component={PageNoFind} />
                </Switch>
            </Suspense>
        </Router>
    </Fragment>;
}
