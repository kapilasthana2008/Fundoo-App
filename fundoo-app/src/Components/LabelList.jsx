import React, { Component } from 'react'
import AddedLabel from '../Components/AddedLabel'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';

const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()


class LabelList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            Label: "",
            labels: []
        }
    }

    componentDidMount(){
      
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



    async Input(event) {

        await this.setState({

            [event.target.name]: event.target.value
        })
    }

    creteLabel = () => {

        const values = {
            "label": this.state.Label,
            "isDeleted": false,
            "userId": localStorage.getItem('userId')
        }

        if (this.state.Label !== "") {

            obj.createNewLabel(values, (error, result) => {

            })
        }
    
    }

    render() {


        return (
            <div>

                <List>
                    <ListItem >

                        <div id="editLabelText">

                            <Tooltip title="Create New label">
                                <div id="plusIcon" >
                                    <img src={require('../assets/plus.svg')} />
                                </div>
                            </Tooltip>

                            <div>

                                <InputBase placeholder="Create new label" id="inputBase"

                                    name="Label"
                                    value={this.state.Label}
                                    onChange={event => this.Input(event)}
                                />

                            </div>

                            <Tooltip title="create label">
                                <div id="checkBtn" onClick={this.creteLabel}>
                                    <img src={require('../assets/checkBtn.svg')} />
                                </div>
                            </Tooltip>

                        </div>
                    </ListItem>
                    <div id="Underline"></div>

                    <div id="editLabel-set">

                    {this.state.labels.map((item,key)=>(
                        <AddedLabel itemValue = {item}/>
                ))}
                   
                    </div>

                </List>
            </div>
        )
    }
}

export default LabelList