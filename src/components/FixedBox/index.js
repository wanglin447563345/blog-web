import React, {Component} from 'react'
import './index.less'

class FixedBox extends Component{
    render(){
        return <div className="fixed_box">
            <div onClick={()=>{window.scrollTo(0, 0);}}>
                <i className="iconfont icon-fanhuidingbu" />
            </div>
            <div>
                <i className="iconfont icon-qq" />
            </div>
            <div>
                <i className="iconfont icon-weixin"/>
            </div>
        </div>
    }
}

export default FixedBox