import React, { useState } from 'react';

export default function Dashboard() {

    const [fileName, setFileName] = useState('');
    const [date, setDate] = useState('');
    const [fileType, setFileType] = useState('audio');
    const [userName, setUserName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [remark, setRemark] = useState('');

    const handleFileInput = e => {
        const file = e.target.files[0];
        console.log(file);
        if(file.size > 1024 * 1024 * 100)
            alert('File size cannot exceed more than 100MB');
        else
            setSelectedFile(file);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>TLBMEDIA FILE UPLOAD</h3>
            <div className="form-group">
                <label>File Name</label>
                <input type="text" value={fileName} className="form-control" placeholder="Enter file name" onChange={e => setFileName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input type="date" value={date} className="form-control" onChange={e => setDate(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label>File Type</label>
                <select value={fileType} className="form-control" onChange={e => setFileType(e.target.value)}>
                    <option value='audio'>Audio</option>
                    <option value='video'>Video</option>
                </select>
            </div>
            <div className="form-group">
                <label>Uploader Name</label>
                <input type="text" value={userName} className="form-control" placeholder="Enter uploader name" onChange={e => setUserName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label>Select File</label>
                <input type="file" onChange={handleFileInput}/>
            </div>
            <div className="form-group">
                <label>Remarks</label>
                <input type="text" value={remark} className="form-control" placeholder="Enter remarks" onChange={e => setRemark(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-upload">Upload</button>
        </form>
    );
}
