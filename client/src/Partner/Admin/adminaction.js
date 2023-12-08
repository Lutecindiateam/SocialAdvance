
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
