<<<<<<< HEAD


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
=======
import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  requestAdminEditCareer,
  requestAdminMonthAppliedJob,
} from "../../Redux/actions";

const Adminaction = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let loginData = props.data.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status === "success") {
        setUser(loginData.data.data);
      }
    }
  }, [props.data.loginData]);

  const handleSubmit = (id) => {
    props.requestAdminEditCareer({
      id: id,
    });
  };
  useEffect(() => {
    props.requestAdminMonthAppliedJob();
  }, [props.data.editCareerData]);

  useEffect(() => {
    let monthWiseAppliedjobData = props.data.monthWiseAppliedjobData;
    if (monthWiseAppliedjobData !== undefined) {
      if (monthWiseAppliedjobData?.data?.status === "success") {
        setData(monthWiseAppliedjobData.data.data);
      }
    }
  }, [props.data.monthWiseAppliedjobData]);

  useEffect(() => {
    let editCareerData = props.data.editCareerData;
    console.log(editCareerData);
    if (editCareerData !== undefined) {
      if (editCareerData?.data?.status === "success") {
        // admin_action();
      }
    }
  }, [props.data.editCareerData]);

  return (
    <>
      <br />
      <br />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Sr.No.</b>
            </TableCell>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
            <TableCell>
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => {
            return (
              <>
                {data && data.active == "success" ? (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.name.toUpperCase()}</TableCell>
                    <TableCell style={{ color: "green" }}>
                      {data.active}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" disabled>
                        Accept
                      </Button>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell style={{ color: "red" }}>
                      {data.active}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => handleSubmit(data._id)}
                      >
                        Accept
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

// export default Adminaction;
const mapStateToProps = (state) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { requestAdminEditCareer, requestAdminMonthAppliedJob },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Adminaction);
>>>>>>> f0b1247b296a60170e73ac275477a7283a5ca814
