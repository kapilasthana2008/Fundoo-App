import React, { Component } from 'react'
import HeaderAppBar from '../Components/Header'
import DisplayNotes from '../Components/DisplayNotes'
import InputNote from '../Components/InputNote'
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-component';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Archive_page from '../Components/Archive_page';
import '../cssFiles/Header.css'
import UtilityIcons from './UtilityIcons';

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
            updatenote: false,
            noteClicked: false,
            colorCode: ""
        }

    }

    componentDidMount() {
        this.getNotes()
    }



    DrawerNoteClick = async (data) => {

       
        await this.setState({
            archiveBoolState: false,
            trashState: false,
            noteClicked: data
        })

        this.getNotes()
    }

    trashedNote = (id) => {

      
        this.getNotes()
    }


    getNotes = () => {


        obj.getAllNotes(async (error, result) => {

            await this.setState({ allNotes: [] })


            if (result) {

                console.log("noteessssssssss",result);
                
                let arr = []
                arr = this.state.allNotes
                
                // console.log("result...getting in props",result);
                // reminder
                
                result.map((item) => {
                    if (item.isArchived === false) {
                        if (item.isDeleted === false) {
                            arr.push(item)
                        }

                    }


                })

                await this.setState({ allNotes: arr })

            }
        })


    }

    // async Input(event) {

    //     await this.setState({

    //         [event.target.name]: event.target.value
    //     })

    // }

    toggleNoteClick = async (event) => {

        await this.setState({ toggleNote: !this.state.toggleNote })

       
    }

    tugglenote = async (event) => {


        var noteObj = {
            title: this.state.Title,
            description: this.state.Description,
            color: this.state.colorCode
        }

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
        await this.setState({
            toggleNote: !this.state.toggleNote,

            colorCode: ""
        })

    }

  



    getvalue = async (data) => {

        await this.setState({
            drawerToggle: data
        })
    
    }


    archiveClickedHere = async (data) => {

        await this.setState({ archiveBoolState: data })


        obj.getAllarchive(async (error, result) => {

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

    trashClicked = async (data) => {

        await this.setState({
            trashState: data,
            archiveBoolState: false
        })


        obj.trashNotesList(async (error, result) => {

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

    updateBtnClicked = async () => {

        await this.setState({ updatenote: true })
        this.getNotes()

    }


    render() {



        //=========================================Main page==================================================
        // const mainPage = (

        //     <div className={(this.state.drawerToggle) ? "noteparent" : "noteParentAfter"}>

        //         <div className="note-container" >

        //             {this.state.toggleNote ?

        //                 <Card className="note-title-box"
        //                     onClick={event => this.toggleNoteClick(event)}>
        //                     Take a note...
        //                 </Card> :

        //                 <Card style={{ backgroundColor: this.state.colorCode }} className="mainInputCard">

        //                     <div id="title-container">

        //                         <div id="title">
        //                             <InputBase id="searchtextBox" type="text"
        //                                 placeholder="Title"
        //                                 value={this.state.Title}
        //                                 onChange={event => this.Input(event)}
        //                                 name="Title" />
        //                         </div>

        //                         <div id="pinupImg">

        //                             <IconButton><img src={require('../assets/unpin.svg')} /></IconButton>

        //                         </div>
        //                     </div>

        //                     <div className="inputNote">

        //                         <InputBase id="searchtextBox" type="text"
        //                             placeholder="Take a note..."
        //                             value={this.state.Description}
        //                             onChange={event => this.Input(event)}
        //                             name="Description" />
        //                     </div>

        //                     <div className="utilityIcons">
        //                         <div className="icons-in-row">

        //                             <UtilityIcons toggleBool={this.state.toggleNote}

        //                                 getcolorForDash={this.getColorDash}
        //                             />

        //                         </div>

        //                         <div>
        //                             <button id="Closebtn" onClick={event => this.tugglenote(event)}>Close</button>
        //                         </div>

        //                     </div>
        //                 </Card>}
        //         </div>

        //         <Masonry className="note-list">

        //             {/* <div className="note-listForColumn"> */}
        //             {this.state.allNotes.map((item) =>

        //                 <DisplayNotes item={item} colosIcon={this.colorClick}
        //                     archiveMethod={this.getNotes} trash={this.trashedNote}
        //                     updateNote={this.updateBtnClicked}
        //                     toggleChange={this.toggleNoteClick}
        //                 />

        //             )}
        //         </Masonry>

        //     </div>

        // )

        //================================================Archive Page===================================================


        return (
            <div >
                <div>

                    <HeaderAppBar props = {this.props.history} noteClicked={this.DrawerNoteClick}
                        getvalue={this.getvalue} archiveClickedHere={this.archiveClickedHere}
                        trashClicked={this.trashClicked} />


                    {/* <div className="MainContainer">


                        {(this.state.archiveBoolState) || (this.state.trashState) ?

                            <Archive_page item={this.state.drawerClickedArray} /> : "mainPage"
                        }
                    </div> */}

                </div>


            </div>


        )
    }

}

export default Dashboard


