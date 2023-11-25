import React, { useState } from 'react'
import {
    Button,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
import axios from 'axios';

/**
* @author
* @function Upload
**/

export const Upload = (props) => {
    const [csvFile, setCsvFile] = useState(null);

    const BASEURL = "http://localhost:5000/api"


    const handleFileChange = (e) => {
        console.log(e);
        const file = e.target.files[0];
        console.log(file);
        setCsvFile(file);
      };

      const handleUpload = async () => {
        console.log(csvFile);
        if (csvFile) {
          const formData = new FormData();
          formData.append('csvFile', csvFile);
          try {
            const response = await axios.post(`${BASEURL}/upload-csv`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
    
            if (response.status === 200) {
              alert('CSV file uploaded successfully.');
            }
          } catch (error) {
            console.error(error);
            alert('Error uploading CSV file.');
          }
        }
      };
     


  return(
    <div style={{ display: 'flex', justifyContent: 'space-between' , padding:"20px"}}>
              <h3>Upload data</h3>
              
              <input type="file" accept=".csv" 
              onChange={handleFileChange}
               />
              <Button 
              onClick={handleUpload}
              >Upload CSV</Button>
           
            </div>
   )

 }