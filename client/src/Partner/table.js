import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu, Segmented, Table } from "antd";
import { useEffect } from "react";
import Dummy from "./dummy";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { requestRecentlyJob, requestGetCandidate } from "../Redux/actions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

function CustomTable({ list, total, status }) {
  const dispatch = useDispatch();
  const [columnItems, setColumnItems] = useState([]);
  const [columnsToShow, setColumnsToShow] = useState([]);

  const columns = [
    {
      title: "BusinessName",
      dataIndex: "businessName", // Adjust this to match your data
      key: "businessName",
    },
    {
      title: "MobileNumber",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Pincode",
      dataIndex: "pincode",
      key: "pincode",
      responsive: ["md"],
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      responsive: ["md"],
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Sub Category",
      dataIndex: "subcategory", // Adjust the key to match your data
      key: "subcategory", // Adjust the key to match your data
      //   render: (subcategory) => subcategory?.name,
    },
    {
      title: "LeadStatus",
      dataIndex: "leadStatus",
      key: "leadStatus",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    setColumnItems(menuItems);
    setColumnsToShow(columns);
  }, []);
  // console.log(columns);
  const colVisibilityClickHandler = (col) => {
    const ifColFound = columnsToShow.find((item) => item.key === col.key);
    if (ifColFound) {
      const filteredColumnsToShow = columnsToShow.filter(
        (item) => item.key !== col.key
      );
      setColumnsToShow(filteredColumnsToShow);
    } else {
      const foundIndex = columns.findIndex((item) => item.key === col.key);
      const foundCol = columns.find((item) => item.key === col.key);
      let updatedColumnsToShow = [...columnsToShow];
      updatedColumnsToShow.splice(foundIndex, 0, foundCol);
      setColumnsToShow(updatedColumnsToShow);
    }
  };
  const menuItems = columns.map((item) => {
    return {
      key: item.key,
      label: <span>{item.title}</span>,
    };
  });

  const addKeys = (arr) => arr.map((i) => ({ ...i, key: i.id }));
  return (
    <div>
      <div>
        {list && (
          <div style={{ marginBottom: "30px" }}>
            <Dropdown
              overlay={
                <Menu onClick={colVisibilityClickHandler} items={columnItems} />
              }
              placement="bottomLeft"
            >
              <Button>Column Visibility</Button>
            </Dropdown>
          </div>
        )}
      </div>
      <div>
        <Table
          scroll={{ x: true }}
          loading={!list}
          pagination={{
            defaultPageSize: 10,
            pageSizeOptions: [10, 20, 50, 100, 200],
            showSizeChanger: true,
            total: total,

            onChange: (page, limit) => {
              // dispatch(loadProduct({ page, limit, status }));
            },
          }}
          columns={columnsToShow}
          dataSource={list ? addKeys(list) : []}
        />
      </div>
    </div>
  );
}

const TableData = (props) => {
  const dispatch = useDispatch();
  // const list = useSelector((state) => state.products.list);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("true");

  // console.log(list);
  //   const list = Dummy();

  // console.log(user);
  useEffect(() => {
    let loginData = props.candidate.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status == "success") {
        setUser(loginData.data.data);
      }
    } else {
      Swal.fire("Sorry!", "Something went wrong.", "error");

      // props.requestRecentlyJob({});
    }
  }, []);

  useEffect(() => {
    let loginData = props.candidate.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status == "success") {
        if(loginData?.data?.data.role === "admin"){
        props.requestRecentlyJob({
          token: loginData.data.data.token,
        });
      }else{
        if (user.id) {
          // console.log(user);
          props.requestGetCandidate({
            id: user.id,
            role: user.role,
            token: loginData.data.data.token,
          });
        }
      }
      }
    } else {
      props.requestRecentlyJob({});
    }
  }, [user]);

  useEffect(() => {
    let getCandidateData = props.candidate.getCandidateData;
    // console.log(getCandidateData);
    if (getCandidateData !== undefined) {
      if (getCandidateData?.data?.status === "success") {
        setList(getCandidateData.data.data.response);

      }
    }
  }, [props.candidate.getCandidateData]);


  useEffect(() => {
    let recentlyjob = props.candidate.recentlyAddedJobData;
    // console.log(recentlyjob);
    if (recentlyjob !== undefined) {
      if (recentlyjob?.data?.status == "success") {
        setList(recentlyjob.data.data.response);
      }
    }
  }, [props.candidate.recentlyAddedJobData]);

  const onChange = (value) => {
    setStatus(value);
  };

  const CSVlist = list?.map((i) => ({
    ...i,
    product_category: i?.product_category?.name,
  }));
  //   console.log(CSVlist);

  useEffect(() => {
    let loginData = props.candidate.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status === "success") {
        setUser(loginData.data.data);
      }
    }
  }, [props.candidate.loginData]);

  return (
    <div className="card column-design">
      <div className="card-body">
        {/* <h5>List</h5> */}
        {list && (
          <div className="card-title d-flex justify-content-end">
            <div className="me-2" style={{ marginTop: "4px" }}>
              <CSVLink
                data={CSVlist}
                className="btn btn-dark btn-sm mb-1"
                filename="ShopData"
              >
                Download CSV
              </CSVLink>
            </div>
            <div>
              <Segmented
                className="text-center rounded danger"
                size="middle"
                value={status}
                onChange={onChange}
              />
            </div>
          </div>
        )}

        <CustomTable list={list} />
      </div>
    </div>
  );
};

// export default Chirkut;
const mapStateToProps = (state) => {
  return { candidate: state.candidate, employee: state.employee };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestRecentlyJob, requestGetCandidate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
