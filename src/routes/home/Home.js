import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd';
import './Home.less'
import Banner from '../../assets/banner.jpg'

class Home extends Component{
    render(){
        return <div className="home">
            <Carousel effect="fade" autoplay>
                <div><img src={Banner} alt=""/></div>
                <div><h3><img src={Banner} alt=""/></h3></div>
                <div><h3><img src={Banner} alt=""/></h3></div>
                <div><h3><img src={Banner} alt=""/></h3></div>
            </Carousel>
            <div className="w1200">
                <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <div className="list">
                                <h2>最新</h2>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <div className="list">
                                <h2>最热</h2>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <div className="list">
                                <h2>推荐</h2>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                                <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章 <span>04-19</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default Home