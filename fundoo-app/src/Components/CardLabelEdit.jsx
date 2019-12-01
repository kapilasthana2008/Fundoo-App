import React, { Component } from 'react'
import '../cssFiles/CardLabel.css'
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
const service = require('../Services/EditLabelServices')
var obj = new service.EditLabelServices()


class CardLabelEdit extends Component {

    constructor(props) {
        super(props)


    }

    componentDidMount(){


    
    }

    handleChange = (event)=>{

        
        let values = {

            noteId:this.props.cardDetails.id,
            lableId:this.props.item.id
        }

        obj.LabelToNote(values,(error,result)=>{
            
            if(result){
                this.props.props.forRefreshOnly()
            }
        })
    }
    

    style = () => {

        const useStyle = createMuiTheme((
            {
                overrides: {

                    MuiCheckbox: {

                        colorSecondary: {

                        }
                    }
                }

            }))

        return useStyle
    }



    render() {

        console.log("key get",this.props);
        
        return (

            <div className="select_label_div">

                <div id="label_checkbox">

                    <MuiThemeProvider theme={event=>this.style(this.props.key)}>

                        <Checkbox
                         
                            onChange={this.handleChange}
                            color="default"
                            value="checkedG"
                            inputProps={{
                                'aria-label': 'checkbox with default color',
                            }}
                        />

                    </MuiThemeProvider>

                </div>

                <div id="Label_value">
                    {this.props.item.label}
                </div>
            </div>

        )
    }
}

export default CardLabelEdit