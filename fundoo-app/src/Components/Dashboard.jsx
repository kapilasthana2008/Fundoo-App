import React, { Component } from 'react'
import HeaderAppBar from '../Components/Header'
import TakeAnote from '../Components/TakeAnote'
import DisplayNotes from '../Components/DisplayNotes'
import InputNote from '../Components/InputNote'
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import '../cssFiles/Header.css'
import { NotesServices } from '../Services/DashboardServices';
const service = require('../Services/DashboardServices')
var obj = new service.NotesServices()


class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Title: "",
            Description: "",
            toggleNote: true,
            drawerToggle: true,
            allNotes: []
        }

        //  this.getValue = this.getvalue.bind(this)
    }

    componentDidMount() {


        this.getNotes()
    }


    getNotes() {


        obj.getAllNotes(async (error, result) => {

            await this.setState({allNotes:[]})

            console.log("result", result);

            if (result) {
                let arr = []
                arr = this.state.allNotes
                result.map((item) => {
                    arr.push(item)
                })

                await this.setState({ allNotes: arr })

            }
        })

        
    }

    async Input(event) {

        await this.setState({

            [event.target.name]: event.target.value
        })

    }

    toggleNoteClick = async (event) => {

        await this.setState({ toggleNote: !this.state.toggleNote })
    }

    tugglenote = async (event) => {


        await this.setState({ toggleNote: !this.state.toggleNote })

        var noteObj = {
            title: this.state.Title,
            description: this.state.Description
        }

        console.log("obj created", noteObj);

        obj.addNote(noteObj, (error, result) => {


            if (result) {
                
                console.log("responce", result);

                this.getNotes()

            } else {
                console.log("error");

            }

        })



    }

    getvalue = async (data) => {

        await this.setState({
            drawerToggle: data
        })
    }

    render() {
        return (

            <div >
                <div>
                    <HeaderAppBar getvalue={this.getvalue} />
                </div>

                <div className="MainContainer">

                    <div className={(this.state.drawerToggle) ? "noteparent" : ""}>

                        <div className="note-container" >

                            {this.state.toggleNote ?

                                <Card className="note-title-box"
                                    onClick={event => this.toggleNoteClick(event)}>
                                    Take a note...
                                 </Card> :

                                <Card className="mainInputCard">

                                    <div id="title-container">

                                        <div id="title">
                                            <InputBase id="searchtextBox" type="text"
                                                placeholder="Title"
                                                value={this.state.Title}
                                                onChange={event => this.Input(event)}
                                                name="Title" />
                                        </div>

                                        <div id="pinupImg">
                                            <img src={require('../assets/unpin.svg')} />
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
                                            <div>
                                                <img src={require('../assets/remind.svg')} />
                                            </div>
                                            <div>  <img src={require('../assets/collabs.svg')} /></div>
                                            <div>  <img src={require('../assets/color.svg')} /></div>
                                            <div>  <img src={require('../assets/AddImg.svg')} /></div>
                                            <div>  <img src={require('../assets/archive.svg')} /></div>
                                            <div>  <img id="moreimg" src={require('../assets/more.svg')} /></div>
                                            <div></div>
                                        </div>

                                        <div>
                                            <button id="Closebtn" onClick={event => this.tugglenote(event)}>Close</button>
                                        </div>

                                    </div>
                                </Card>}
                        </div>

                        <div className="note-list">
                        {/* <div className="note-listForColumn"> */}
                        {this.state.allNotes.map((item) =>
                                <DisplayNotes item={item} />

                            )}
                        </div>

                    </div>

                </div>
            </div>

        )
    }

}

export default Dashboard