import { HashRouter as Routers, Switch, NavLink, Route, Redirect , Link } from 'react-router-dom';

import React , { Component  } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import "./index.css";

import home from "../home/index.jsx"


const { Header, Content, Footer } = Layout;

export default class LayoutContainer  extends Component {

    render(){

        return (

            <Routers>
                <Layout className="layout-container">
                    <Header>
                    
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/home">home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">路由一</Menu.Item>
                            <Menu.Item key="3">路由二</Menu.Item>
                        </Menu>
                    </Header>
                    
                    <div class="content">
                        <Route path="/home" component={home}></Route>
                    </div>
                </Layout>

            </Routers>
            
        )

    }

}