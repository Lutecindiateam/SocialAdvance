

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ColumnSelectorGrid = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const BASEURL = 'http://localhost:5000/api';

  const adminAction = async () => {
    try {
      const response = await axios.post(`${BASEURL}/adminaction`);
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    adminAction();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.patch(`${BASEURL}/adminupdate/${id}`);
      adminAction();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Sr.No.', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
    { field: 'active', headerName: 'Status', flex: 1, renderCell: (params) => <span style={{ color: params.row.active === 'success' ? 'green' : 'red' }}>{params.value}</span> },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <Button variant="contained" onClick={() => handleAccept(params.row._id)} disabled={params.row.active === 'success'}>
          Accept
        </Button>
      ),
    },
  ];

  const rows = data.map((item, index) => ({
    id: index + 1,
    name: item.name.toUpperCase(),
    role: item.role.toUpperCase(),
    active: item.active,
    status: item.status,
    _id: item._id,
  }));

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

export default ColumnSelectorGrid;
