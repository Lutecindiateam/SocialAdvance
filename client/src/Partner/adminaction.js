
import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Adminaction = () => {
  const [data, setData] = useState([]);
//  console.log(data);

  const navigate = useNavigate();
  // console.log(info);

  //for developement
const BASEURL = "http://localhost:5000/api"

//for production

// const BASEURL = "/api"

  const admin_action = async (props) => {
    
    const get= axios.post(`${BASEURL}/adminaction`, props)
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
        console.log(res.data.data);
        //  setCount(res.data);
        // console.log(res.data.active);
        // console.log(res.data.data.id);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    admin_action();

  }, []);
//   useEffect(() => {
//     const savedInfo = localStorage.getItem("info");
//     if (savedInfo) {
//       const parsedInfo = JSON.parse(savedInfo);
//       admin_action(parsedInfo);
//     }
    // const savedCount = localStorage.getItem("count");
    //   if (savedCount) {
    //     const parsedCount = JSON.parse(savedCount);
    //     setCount(parsedCount)
    //     const total = parsedCount.data.reduce((acc, doc)=>acc+doc.amount,0)
    //     //  console.log(total);
    //     setAmount(total)
    //     // user_management(savedCount);
    //   }

//   }, []);
//   const fetchUserData = () => {
//     const savedInfo = localStorage.getItem('info');
//     if (savedInfo) {
//       const parsedInfo = JSON.parse(savedInfo);
//       admin_action(parsedInfo);
//     }
// else{
//   navigate("/");
// }
    

//   useEffect(() => {
//     fetchUserData();
//   }, []);

  const handleSubmit = (id) => {
    const patch = axios.patch(`${BASEURL}/adminupdate/${id}`)
      .then((res) => {
        admin_action();
        return res;
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  // console.log(count);

  return (

    <>
      {/* <h3>Contributors: {count && count.count}</h3>
      <h3>Total Contribution: {amount}</h3> */}
      <br />
      <br />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Sr.No.</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell><b>Action</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => {
            return (
              <>
                {data && data.status == "success" ? (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.name.toUpperCase()}</TableCell>
                    <TableCell style={{ color: "green" }}>{data.active}</TableCell>
                    <TableCell>
                      <Button variant="contained" disabled>Accept</Button>
                    </TableCell>
                  </TableRow>
                ) : (<TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell style={{ color: "red" }}>{data.active}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleSubmit(data._id)}>Accept</Button>
                  </TableCell>
                </TableRow>)
                }
              </>
            );

          })}
        </TableBody>
      </Table>
    </>

  )
}

export default Adminaction;


