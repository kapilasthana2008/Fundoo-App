import React, { Component } from 'react'
import '../cssFiles/Archive.css'
import DisplayNotes from '../Components/DisplayNotes'
const service = require('../Services/DashboardServices')

var obj = new service.NotesServices()
import Masonry from 'react-masonry-component';

class Archive_page extends Component {


    constructor(props) {
        super(props)

        this.state = {

            allarchive: [],
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
                arr = this.state.allarchive

                result.map((item,key) => {
                  

                    if (item.isArchived) {
                       arr.push(item)
                    }

                })

                await this.setState({ allarchive: arr })

            }
        })


    }



    render() {



        return (

            <div className = "archive-pages">


                <div className="childContainer">

                    <div classname="all-note-container">

                        <Masonry className="note-list">

                            {this.state.allarchive.map((item) =>

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

export default Archive_page