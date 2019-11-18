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
            trashbool:this.props.trashbool
        }
    }

    componentDidMount() {

       
    }

    render() {

        console.log("archive data comming in props..",this.props.item);
        
        return (
            <div className="archiveContainer">
 
                    <div className="archiveChild">
              
                    <Masonry className="archiveChild">
                    {/* <div className="note-listForColumn"> */}
                    {this.props.item.map((item) =>

                        <DisplayNotes item={item} />

                    )}
                </Masonry>
                    {/* <DisplayNotes/> */}
   
                    </div>
            </div>
        )
    }
}

export default Archive_page