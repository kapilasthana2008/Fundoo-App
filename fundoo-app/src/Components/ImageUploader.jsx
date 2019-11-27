import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import Imageupload from 'react-images-upload';
import Cropper from 'react-cropper'
import '../cssFiles/ImageUploader.css'
import 'cropperjs/dist/cropper.css';

const service = require('../Services/Userservice')
const cropper = React.createRef(null);

class ImageUploader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploader: this.props.props,
            picture: "",
            imagedata: "",
            fetchImg: ""
        }
        this.onDrop = this.onDrop.bind(this);
    }

   
    handleClose = value => {

        this.setState({ uploader: false })
    };


    onDrop = async (event) => {

        console.log("event", event);


        await this.setState({
            picture: event[0]
        });

        var imagedata = new FormData()

        imagedata.append('file', event[0])

        await this.setState({
            imagedata: imagedata
        })

        var fetchData = new FileReader()
        fetchData.readAsDataURL(event[0])

        fetchData.onload = (event) => {
            const url = event.target.result

            this.setState({
                fetchImg: url
            })
        }
    }

    uploadservice = () => {

        let FormData = this.state.imagedata

        service.UploadProfile(FormData, (error, result) => {

            console.log("result back", result);
        })
    }

    render() {


        return (
            <div>
                <Dialog open={this.state.uploader} onClose={this.handleClose}>


                    {(this.state.fetchImg === "") ? <div className="ImagePicker">

                        <div id="select-pic-title">
                            Select profile photo
</div>
                        <div id="picPage-line"></div>

                        <Imageupload
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={event => this.onDrop(event)}
                            imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                            maxFileSize={5242880}
                        />
                    </div>
                        :
                        <div className="fetch_imageClass">
                           
                            <Cropper
                                ref={cropper}
                                src={this.state.fetchImg}
                                style={{ height: 400, width: '100%' }}
                                // Cropper.js options
                                aspectRatio={16 / 9}
                                guides={false}
                              
                            />
                        </div>}

                    <div id="upload_image">
                        <button id="uploadBtn">
                            Upload Image
                        </button>
                    </div>

                </Dialog>
            </div>
        )
    }
}


export default ImageUploader