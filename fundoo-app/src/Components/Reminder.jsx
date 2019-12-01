import React, { Component } from 'react'
import DisplayNotes from '../Components/DisplayNotes'
import Masonry from 'react-masonry-component';
import TakeNote from '../Components/TakeNote'
const service = require('../Services/DashboardServices')
var obj = new service.NotesServices()


class Reminder extends Component {


    constructor(props) {
        super(props)

        this.state = {

           reminderCard:[]
        }
    }

    componentDidMount() {
           
        this.getNotes()
    }

    getNotes = () => {


        obj.getAllNotes(async (error, result) => {


            if (result) {
                
                let arr = []
                arr = this.state.reminderCard

                result.map((item,key) => {
        
                    if (item.reminder.length>0) {
                        arr.push(item)
                    }

                })

                await this.setState({reminderCard: arr })
            }

           
            
        })
    }

    render() {

        return (

            <div className = "archive-pages">


                <div className="childContainer">
                <TakeNote getNotes={this.getNotes} />

                    <div classname="all-note-container">

                        <Masonry className="note-list">

                            {this.state.reminderCard.map((item) =>

                                <DisplayNotes item={item} getNotes={this.getNotes}
                                    reminderVal = {item.reminder}
                                />
                        
                            )}
                            
                        </Masonry>
                    </div>
                </div>
            </div>

        )
    }
}

export default Reminder