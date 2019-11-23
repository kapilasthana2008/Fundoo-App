import React, { Component } from 'react'
import DisplayNotes from '../Components/DisplayNotes'
import Masonry from 'react-masonry-component';

const service = require('../Services/DashboardServices')
var obj = new service.NotesServices()


class Reminder extends Component {


    constructor(props) {
        super(props)

        this.state = {

           
        }
    }

    componentDidMount() {

        console.log("reminder page");
           
        this.getNotes()
    }

    getNotes = () => {


        obj.getAllNotes(async (error, result) => {


            if (result) {

                console.log("reminder page",result);
                
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

                        {/* <Masonry className="note-list">

                            {this.state.allarchive.map((item) =>

                                <DisplayNotes item={item} getNotes={this.getNotes}
                                />
                        
                            )}
                        </Masonry> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default Reminder