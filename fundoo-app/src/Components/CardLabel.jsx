import React, { Component } from 'react'
import '../cssFiles/CardLabel.css'
import CardLabelEdit from '../Components/CardLabelEdit'
const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()



class CardLabel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            labels:[]
        }

    }

    componentDidMount() {

        this.getList()
    }



    getList() {

        obj.getLabelList(async (error, result) => {

            if (result) {
                let arr = []
                arr = this.state.labels

                result.map((item, key) => {

                    arr.push(item)
                })
                await this.setState({ labels: arr })
            }

        })


    }


    render() {

            // this.state.labels.map((item,key)=>{
            //     console.log("item",item);
                
            // })
            
        return (
            <div>

                <div id="card-label-title">
                    Label note
                </div>

                <div id="labelSearch">
                    search
                </div>

                <div id="card-Label">

                {/* <CardLabelEdit item = {this.state.labels} /> */}

                {this.state.labels.map((item,key)=>(
                    <CardLabelEdit item = {item}/>
                ))}
                    
                </div>
            </div>
        )
    }
}

export default CardLabel