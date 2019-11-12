import React, { Component } from 'react'
import Header from '../Components/Header'
import TakeAnote from '../Components/TakeAnote'
import '../cssFiles/Header.css'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleNote: true
        }

    }


    tugglenote = async (event) => {
        console.log("m working", event);

        // await this.setState({
        //     toggleNote:false
        // })

        // console.log("toggle notes",this.state.toggleNote);


    }

    render() {
        return (
            <div className="MainContainer">
            <div>
            <Header props={this.props} />
            </div>
               
                <div className = "note-container">

                    <div className="take-a-note" onClick={event => this.tugglenote(event)}>
                        {this.state.toggleNote ? <TakeAnote /> : ""}
                    </div>

                    {/* <div className = "notes">

            <div id = "note1">1</div>
            <div id = "note1">2</div>
            <div id = "note1">3</div>
            <div id = "note1">4</div>

            <div id = "note1">1</div>
            <div id = "note1">2</div>
            <div id = "note1">3</div>
            <div id = "note1">4</div>
            </div> */}

                </div>
            </div>
        )
    }

}

export default Dashboard