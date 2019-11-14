import React, {Component} from 'react'
import Card from '@material-ui/core/Card';

import '../cssFiles/TakeAnote.css'

class TakeAnote extends Component{

render(){
    return(
        <Card className = "note-title-box">
          Take a note...
        </Card>
    )
}
}

export default TakeAnote