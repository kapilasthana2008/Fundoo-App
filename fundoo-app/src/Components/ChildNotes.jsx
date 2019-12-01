import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-component';
import UtilityIcons from './UtilityIcons';
import DisplayNotes from '../Components/DisplayNotes'
import IconButton from '@material-ui/core/IconButton';
import TakeNote from '../Components/TakeNote'
import '../cssFiles/ChildNote.css'
const service = require('../Services/DashboardServices')
var obj = new service.NotesServices()


class ChildNotes extends Component {


    constructor(props) {
        super(props)

        this.state = {
            allNotes: []
        }
    }

    componentDidMount() {

        this.getNotes()
    }

    getNotes = () => {


        obj.getAllNotes(async (error, result) => {

            await this.setState({ allNotes: [] })

            if (result) {

                let arr = []
                arr = this.state.allNotes

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

    render() {

        
      
        
        return (

            <div className="NoteMainContainer">

                <div className="childContainer">

                    <TakeNote getNotes={this.getNotes} />

                    <div classname="all-note-container">

                        <Masonry className="note-list">

                            {this.state.allNotes.map((item) =>
                                

                                <DisplayNotes item={item} getNotes={this.getNotes} reminderVal = {item.reminder}
                            
                                />
                            )}
                        </Masonry>
                    </div>

                </div>

            </div>
        )

    }
}

export default ChildNotes