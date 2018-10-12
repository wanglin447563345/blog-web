import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import { Layout } from 'antd';
import FixedBox from '../components/FixedBox/index'
import AsyncComponent from '../components/AsyncComponent/index'
import NavHeader from '../components/NavHeader/index'
import './App.less'

const { Footer, Content } = Layout;
const AsyncHome = AsyncComponent(()=>import("./home/Home"));
const AsyncList = AsyncComponent(()=>import("./list/List"));
const AsyncItem = AsyncComponent(()=>import("./item/Item"));
const AsyncAbout = AsyncComponent(()=>import("./about/About"));
const AsyncBoard = AsyncComponent(()=>import("./board/Board"));
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <NavHeader/>
                    <Content>
                        <Switch>
                            <Route path = '/home' exact component = {AsyncHome}/>
                            <Route path = '/list' exact component = {AsyncList}/>
                            <Route path = '/item' exact component = {AsyncItem}/>
                            <Route path = "/about" exact component = {AsyncAbout}/>
                            <Route path = "/board" exact component = {AsyncBoard}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </Content>
                    <Footer>
                        <div className="w1200">
                            <p>
                                友情链接：<a href="https://www.baidu.com">百度</a><a href="https://www.baidu.com">百度</a><a href="https://www.baidu.com">百度</a>
                            </p>
                            <p className="text-center">
                                <span>版权所有：版权所有版权所有版权所有版权所有版权所有版权所有</span>
                            </p>
                            <p className="text-center">
                                <span>备案号：326879408359</span>
                            </p>
                        </div>
                    </Footer>
                    <FixedBox/>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;