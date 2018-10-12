import React, {Component} from 'react'
import {Row, Col} from 'antd'
import RightBox from '../../components/RightBox'
import './About.less'

class About extends Component {
    render() {
        return <div className="w1200">
            <div className="about">
                <Row gutter={16}>
                    <Col className="gutter-row" span={18}>
                        <div className="gutter-box">
                            <div className="about_left">
                                <h1>关于我</h1>
                                <div>
                                    项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项
                                    目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <div className="about_right">
                                <RightBox/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default About