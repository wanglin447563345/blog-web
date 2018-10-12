import React, {Component} from 'react'
import {Row, Col} from 'antd'
import RightBox from '../../components/RightBox'
import './Item.less'

class Item extends Component {
    render() {
        return <div className="w1200">
            <div className="item">
                <Row gutter={16}>
                    <Col className="gutter-row" span={18}>
                        <div className="gutter-box">
                            <div className="item_left">
                                <h1>项目介绍</h1>
                                <div>
                                    项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项
                                    目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <div className="item_right">
                                <RightBox/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default Item