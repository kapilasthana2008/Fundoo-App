import React, { Component } from 'react'
import HeaderAppBar from '../Components/Header'
import TakeAnote from '../Components/TakeAnote'
import DisplayNotes from '../Components/DisplayNotes'
import InputNote from '../Components/InputNote'
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-component';
import AppBar from '@material-ui/core/AppBar';
import '../cssFiles/Header.css'
import { NotesServices } from '../Services/DashboardServices';
import IconButton from '@material-ui/core/IconButton';
import Archive_page from '../Components/Archive_page'

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
            allNotes: [],
            archiveBoolState: false,
            trashState: false,
            drawerClickedArray: [],
        }

        //  this.getValue = this.getvalue.bind(this)
    }

    componentDidMount() {


        this.getNotes()

        
    }



    getTrashItem = (id) => {

        // console.log("get trashed item..", id);

    }

    trashedNote = (id) => {

        // console.log("trashed call", id);

    }

    getNotes = () => {


        obj.getAllNotes(async (error, result) => {

            await this.setState({ allNotes: [] })

            console.log("result", result);

            if (result) {
                let arr = []
                arr = this.state.allNotes
                result.map((item) => {

                    if (item.isArchived === false) {
                        arr.push(item)
                    }


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

        obj.addNote(noteObj, async (error, result) => {


            if (result) {

                await this.setState({
                    Title: "",
                    Description: ""

                })

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


    archiveClickedHere = async (data) => {

        await this.setState({ archiveBoolState: data })


        obj.getAllarchive( async (error, result) => {

            await this.setState({ drawerClickedArray: [] })
           
                if (result) {
                    let arr = []
                    arr = this.state.drawerClickedArray

                    result.data.map((item) => {
    
                        // console.log("archive item..",item);
                        
                        arr.push(item)
    
                    })
    
                    await this.setState({ drawerClickedArray: arr })
           
                }
            })

            console.log("drawer state aarray",this.state.drawerClickedArray.length);
            
        // console.log("state set for archive", this.state.archiveBoolState);

    }

    trashClicked = async (data) => {
     
        await this.setState({ trashState: data,
             archiveBoolState:false})


        obj.trashNotesList( async (error, result) => {


            await this.setState({ drawerClickedArray: [] })
           
                if (result) {
                    let arr = []
                    arr = this.state.drawerClickedArray

                    result.data.map((item) => {
    
                        // console.log("archive item..",item);
                        
                        arr.push(item)
    
                    })
    
                    await this.setState({ drawerClickedArray: arr })
           
                }
            })
    }

    render() {

   
        
        //=========================================Main page==================================================
        const mainPage = (

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

                <Masonry className="note-list">
                    {/* <div className="note-listForColumn"> */}
                    {this.state.allNotes.map((item) =>

                        <DisplayNotes item={item} archiveMethod={this.getNotes} trash={this.trashedNote} />

                    )}
                </Masonry>

            </div>

        )

        //================================================Archive Page===================================================


        return (
            <div >
                <div>

                    <HeaderAppBar getvalue={this.getvalue} archiveClickedHere={this.archiveClickedHere}
                        trashClicked={this.trashClicked} />

            
                    <div className="MainContainer">

                
                        {(this.state.archiveBoolState) ||(this.state.trashState) ?

                            <Archive_page  item = {this.state.drawerClickedArray}/> : mainPage
                       }
                    </div>

                </div>


            </div>


        )
    }

}

export default Dashboard


