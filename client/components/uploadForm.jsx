"use client"
import React, {useState}  from 'react'
import axios from 'axios';
import {Button} from "./ui/button";


const UploadForm = () => {


    const [selectedFile, setSelectedFile] = useState(null);


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        handleFileUpload(selectedFile);
    };


    const handleFileUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            console.log('Going to upload file to server');
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <Button variant="primary" type="submit">Upload</Button>
            </form>
        </div>
    )
}


export default UploadForm
