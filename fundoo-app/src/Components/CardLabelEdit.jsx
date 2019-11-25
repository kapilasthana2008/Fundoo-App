import React, { Component } from 'react'
import '../cssFiles/CardLabel.css'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';


class CardLabelEdit extends Component {

    constructor(props) {
        super(props)


    }
    

    style = () => {

        const useStyle = createMuiTheme((
            {
                overrides:{

                    MuiCheckbox:{

                        colorSecondary:{


                        }
                    }
                }

        }))

        return useStyle
    }



    render() {


        return (

            <div className="select_label_div">

                <div id="label_checkbox">

                    <MuiThemeProvider theme={this.style()}>

                        <Checkbox
                            value="checkedA"
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