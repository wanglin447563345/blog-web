import React, {Component} from 'react';
import {Spin} from "antd"
import './index.less'

const asyncComponent = (importComponent) =>{
    class asyncComponent extends Component{
        constructor(props){
            super(props)
            this.state={
                component:null
            }
        }
        async componentDidMount(){
            const {default:component} = await importComponent();
            this.setState({
                component
            })
        }

        render(){
            const C =this.state.component;
            return C?<C {...this.props}/>:<div className="example">
                <Spin />
            </div>
        }


    }

    return asyncComponent
};

export default asyncComponent