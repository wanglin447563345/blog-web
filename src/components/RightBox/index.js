import React, {Component} from 'react'
import moment from 'moment'
import './index.less'
import WX_PNG from '../../assets/er.png'

class RightBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time:''
        };
    }
   componentDidMount(){
        const d = new Date();
        this.setState({
            time:d.getTime()
        });
        this.Interval =  setInterval(async ()=>{
            const d = new Date();
            const time = await d.getTime();
            this.setState({
                time
            })
        },1000)
    };

    componentWillUnmount(){
        clearInterval(this.Interval)
    }
    render(){
        // console.log(this.state.time)
        return <div className="right_box">
            <p className="clock">{moment(this.state.time).format("YYYY-MM-DD HH:mm:ss")}</p>
            <h1>个人信息</h1>
            <p>
                <span>QQ:</span>447563345
            </p>
            <p>
                <span>Email:</span>447563345@qq.com
            </p>
            <div>
                <span>
                    WeChat:
                </span>
                <p>
                    <img src={WX_PNG} alt=""/>
                </p>
            </div>
        </div>
    }
}

export default RightBox