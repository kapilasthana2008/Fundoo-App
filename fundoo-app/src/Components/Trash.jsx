import React, { Component } from 'react'
import '../cssFiles/Archive.css'
const service = require('../Services/DashboardServices')
var obj = new service.NotesServices()
import Masonry from 'react-masonry-component';
import DisplayNotes from '../Components/DisplayNotes'

class Trash extends Component {

    constructor(props) {
        super(props)

        this.state = {

            allTrash: [],
            trashbool: this.props.trashbool
        }

    }

    componentDidMount() {
        
        this.getNotes()
    }

    getNotes = () => {


        obj.getAllNotes(async (error, result) => {


            if (result) {

                let arr = []
                arr = this.state.allTrash

                result.map((item) => {

                    if (item.isDeleted) {
                        arr.push(item)
                    }

                })

                await this.setState({ allTrash: arr })

            }
        })


    }

    render() {
        return (

            <div className="archive-pages">


                <div className="childContainer">

                    <div classname="all-note-container">
                        <Masonry className="note-list">

                            {this.state.allTrash.map((item) =>

                                <DisplayNotes item={item} getNotes={this.getNotes}
                                />

                            )}
                        </Masonry>

                    </div>
                </div>
            </div>

        )
    }

}


export default Trash