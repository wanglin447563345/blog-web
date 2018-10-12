import React, {Component} from 'react'
import {Row, Col} from 'antd'
import RightBox from '../../components/RightBox'
import './Board.less'

class Board extends Component {
    render() {
        return <div className="w1200">
            <div className="board">
                <Row gutter={16}>
                    <Col className="gutter-row" span={18}>
                        <div className="gutter-box">
                            <div className="board_left">
                                <h1>留言</h1>
                                <div>
                                    留言留言留言留言留言留言留言留言
                                    留言留言留言留言留言留言留言留言留言
                                    留言留言留言留言留言留言留言留言留言
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <div className="board_right">
                                <RightBox/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default Board