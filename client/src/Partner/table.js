import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dummy from "./dummy";


const TableData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
//   const BASEURL = 'http://localhost:5000/api';
  const list = Dummy()


  const columns = [
    { field: 'id', headerName: 'Sr.No.', width: 100 },
    { field: 'businessname', headerName: 'Business Name', flex: 1 },
    { field: 'mobilenumber', headerName: 'Mobile Number', flex: 1 },
	{ field: 'address', headerName: 'Address', flex: 1 },
	{ field: 'pincode', headerName: 'Pincode', flex: 1 },
{ field: 'city', headerName: 'City', flex: 1 },
	{ field: 'state', headerName: 'State', flex: 1 },
	{ field: 'category', headerName: 'Category', flex: 1 },
	{ field: 'subcategory', headerName: 'Subcategory', flex: 1 },
  ];

  const rows = list.map((item, index) =>

   ({
    id: index + 1,
    businessname: item.businessname,
    mobilenumber: item.mobilenumber,
    address: item.address,
    pincode: item.pincode,
    city: item.city,
	state: item.state,
	category: item.category,
	subcategory: item.subcategory
  }));
  console.log(rows);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        components={{
          Toolbar: GridToolbar,
        }}
      />

    </div>
  );
};

// export default Chirkut;
const mapStateToProps = (state) => {
  return { candidate: state.candidate, employee: state.employee,data: state.data };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestAdminMonthJob, requestGetCandidate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
