import { HashRouter as Routers, Switch, NavLink, Route, Redirect , Link } from 'react-router-dom';

import React , { Component  } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import "./index.css";

import home from "../home/index.jsx";
import reactMicro from "../reactMicro/index.jsx";
import shared from "../shared/index.jsx";



const { Header, Content, Footer } = Layout;


const prefix = window.__POWERED_BY_QIANKUN__ ? '/reactApp' : '';

export default class LayoutContainer  extends Component {

    render(){

        return (

            <Routers >
                <Layout className="layout-container">
                    <Header style={{
                        display: prefix ? "none" : "block"
                    }}>
                    
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/home">home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/reactMicro">react-micro</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/shared">通信</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    
                    <div className="content">
                        <Route path={ prefix +"/home" } component={home}></Route>
                        <Route path={ prefix +"/reactMicro" } component={reactMicro}></Route>
                        <Route path={ prefix +"/shared" } component={shared}></Route>
                    </div>
                </Layout>

            </Routers>
            
        )

    }

}