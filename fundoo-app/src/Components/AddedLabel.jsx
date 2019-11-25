import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import LabelIcon from '@material-ui/icons/Label';
import InputBase from '@material-ui/core/InputBase';
import '../cssFiles/EditLabel.css'


class AddedLabel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            changeLabel: false,
            editLabel: "",
            value:this.props.itemValue.label
        }

    }

    labelChange = () => {

        this.setState({
            changeLabel: true
        })
    }

    async Input(event) {

        console.log("event", event.target.value);

        await this.setState({

            [event.target.name]: event.target.value
        })
    }


    render() {

        console.log("this is rendering again",this.props.itemValue.label);
        

        // let value = this.props.item.label

        return (
            <div  >
                <ListItem >
                    <div className="addedlabel">
                        <div>
                            <LabelIcon style={{ fontsize: '1rem' }} />
                            {/* <img src = {require('../assets/')}/> */}
                        </div>

                        <div id="simpleText" onClick={this.labelChange} >

                            {
                                (this.state.changeLabel) ?

                                    <InputBase
                                        name="editLabel"
                                        defaultValue={this.state.editLabel}
                                        onChange={event => this.Input(event)}
                                    />
                                    : this.state.value
                            }
                            
                        </div>

                        <div id="editIcon" onClick={this.labelChange}>

                            <img src={require('../assets/labelPencil.svg')} />
                        </div>

                    </div>

                </ListItem>
            </div>
        )
    }
}

export default AddedLabel