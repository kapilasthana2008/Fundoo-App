import React, { Component } from 'react'
import UtilityIcons from './UtilityIcons';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import '../cssFiles/TakeAnote.css'
const service = require('../Services/DashboardServices')
var obj = new service.NotesServices()


class TakeNote extends Component {

    constructor(props) {
        super(props)

        this.state = {
         
            toggleNote: true,
            Title: "",
            Description: "",
            colorCode: "",
            isArchived: false
        }
    }


    componentDidMount() {

    }



    async Input(event) {

        console.log("input in textfield",event.target);
        
        await this.setState({

            [event.target.name]: event.target.value
        })

    }

    toggleNoteClick = async (event) => {

        await this.setState({ toggleNote: !this.state.toggleNote })

      
    }


    tugglenote = async (event) => {

        var noteObj = {
            title: this.state.Title,
            description: this.state.Description,
            color: this.state.colorCode,
            isArchived:this.state.isArchived
        }

        
        obj.addNote(noteObj, async (error, result) => {

            if (result) {

                await this.setState({
                    Title: "",
                    Description: ""

                })

            this.props.getNotes()
            } else {
                console.log("error");

            }

        })
        await this.setState({
            toggleNote: !this.state.toggleNote,
            colorCode: ""
        })

    }

    isArchived = async(data)=>{

        console.log("this.srchived",data);
        await this.setState({
            isArchived:data
        })
    }

    getColorDash = async (colorCode) => {

        await this.setState({ colorCode: colorCode })

    }



    render() {

        return (

            <div className = "card-Holder">


                {(this.state.toggleNote) ? <Card className="note-title-box"
                    onClick={event => this.toggleNoteClick(event)}>
                    Take a note...
                        </Card> : <Card style={{ backgroundColor: this.state.colorCode }} className="mainInputCard">

                        <div id="title-container">

                            <div id="title">
                                <InputBase id="searchtextBox" type="text"
                                    placeholder="Title"
                                    value={this.state.Title}
                                    onChange={event => this.Input(event)}
                                    name="Title" />
                            </div>

                            <div id="pinupImg">

                                <IconButton><img src={require('../assets/unpin.svg')} /></IconButton>

                            </div>
                        </div>

                        <div className="inputNote">

                            <InputBase id="searchtextBox" type="text"
                                placeholder="Take a note..."
                                value={this.state.Description}
                                onChange={event => this.Input(event)}
                                name="Description" />
                        </div>

                        <div className="utilityIcons">
                            <div className="icons-in-row">

                                <UtilityIcons toggleBool={this.state.toggleNote}
                                    isArchive = {this.isArchived}
                                    getcolorForDash={this.getColorDash}
                                />

                            </div>

                            <div>
                                <button id="Closebtn" onClick={event => this.tugglenote(event)}>Close</button>
                            </div>

                        </div>
                    </Card>}


                {/* <Card className="note-title-box"
                    onClick={event => this.toggleNoteClick(event)}>
                    Take a note...
                </Card> */}

            </div>
        )
    }

}

export default TakeNote