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

        // if (this.state.trashbool){
            
        // }else{
        //     obj.getAllarchive(async (error, result) => {

           
        //         console.log("archive result",result);
        
        //             if (result) {
        //                 let arr = []
        //                 arr = this.state.allarchive
        //                 result.data.map((item) => {
        
        //                     console.log("archive item..",item);
                            
        //                     arr.push(item)
        
        //                 })
        
        //                 await this.setState({ allarchive: arr })
        
        //             }
        //         })
        // }
       
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