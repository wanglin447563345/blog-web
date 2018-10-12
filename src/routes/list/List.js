import React, {Component} from 'react'
import { Input, Row, Col, Pagination } from 'antd';
import './List.less'
import Banner from '../../assets/banner.jpg'
const Search = Input.Search;

class List extends Component {
    render(){
        return <div className="w1200">
            <div className="list">
                <Row gutter={16}>
                    <Col className="gutter-row" span={18}>
                        <div className="gutter-box">
                            <div className="list_left">
                                <h1>文章列表</h1>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <div className="list_item">
                                    <div>
                                        <img src={Banner} alt=""/>
                                    </div>
                                    <div>
                                        <h3>文章标题文章标题文章标题文章标题文章标题文章标题</h3>
                                        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
                                        <div><span>阅读量：20</span><span>发表日期：2018-02-04</span></div>
                                    </div>
                                </div>
                                <Pagination defaultCurrent={1} total={500} />
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                           <div className="list_right">
                               <div className="input">
                                   <Search
                                       placeholder="输入文章名称搜索..."
                                       onSearch={value => console.log(value)}
                                       enterButton
                                   />
                               </div>
                               <div className="type">
                                   <h1>文章类型</h1>
                                   <p className="active"><span>jssjjsjs</span><span>›</span></p>
                                   <p><span>jssjjsjs</span><span>›</span></p>
                                   <p><span>jssjjsjs</span><span>›</span></p>
                                   <p><span>jssjjsjs</span><span>›</span></p>
                                   <p><span>jssjjsjs</span><span>›</span></p>
                               </div>
                           </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    }
}

export default List