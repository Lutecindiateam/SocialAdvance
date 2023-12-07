// import "bootstrap-icons/font/bootstrap-icons.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Dropdown, Menu, Segmented, Table } from "antd";
// import { useEffect } from "react";
// import Dummy from "./dummy";
// import { CSVLink } from "react-csv";
// import { useDispatch, useSelector } from "react-redux";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';

// // function CustomTable({ list, total, status }) {
// // 	const dispatch = useDispatch();
// // 	const [columnItems, setColumnItems] = useState([]);
// // 	const [columnsToShow, setColumnsToShow] = useState([]);

// //    const columns = [
// // 	{
// // 		title: "BusinessName",
// // 		dataIndex: "businessName", // Adjust this to match your data
// // 		key: "businessName",
// // 	  },
// // 	{
// // 	  title: "MobileNumber",
// // 	  dataIndex: "mobileNumber",
// // 	  key: "mobileNumber",
// // 	},
// // 	{
// // 	  title: "Address",
// // 	  dataIndex: "address",
// // 	  key: "address",
// // 	},
// // 	{
// // 	  title: "Pincode",
// // 	  dataIndex: "pincode",
// // 	  key: "pincode",
// // 	  responsive: ["md"],
// // 	},
// // 	{
// // 	  title: "City",
// // 	  dataIndex: "city",
// // 	  key: "city",
// // 	  responsive: ["md"],
// // 	},
// // 	{
// // 	  title: "State",
// // 	  dataIndex: "state",
// // 	  key: "state",
// // 	},
// // 	{
// // 	  title: "Category",
// // 	  dataIndex: "category",
// // 	  key: "category",
// // 	},
// // 	{
// // 	  title: "Sub Category",
// // 	  dataIndex: "subcategory", // Adjust the key to match your data
// // 	  key: "subcategory", // Adjust the key to match your data
// // 	  render: (subcategory) => subcategory?.name,
// // 	},
// //   ];
// // //   console.log(columns);

// // 	useEffect(() => {
// // 		setColumnItems(menuItems);
// // 		setColumnsToShow(columns);
// // 	}, []);
// // // console.log(columns);
// // 	const colVisibilityClickHandler = (col) => {
// // 		const ifColFound = columnsToShow.find((item) => item.key === col.key);
// // 		if (ifColFound) {
// // 			const filteredColumnsToShow = columnsToShow.filter(
// // 				(item) => item.key !== col.key
// // 			);
// // 			setColumnsToShow(filteredColumnsToShow);
// // 		} else {
// // 			const foundIndex = columns.findIndex((item) => item.key === col.key);
// // 			const foundCol = columns.find((item) => item.key === col.key);
// // 			let updatedColumnsToShow = [...columnsToShow];
// // 			updatedColumnsToShow.splice(foundIndex, 0, foundCol);
// // 			setColumnsToShow(updatedColumnsToShow);
// // 		}
// // 	};
// // // console.log(colVisibilityClickHandler);
// // 	const menuItems = columns.map((item) => {
// // 		return {
// // 			key: item.key,
// // 			label: <span>{item.title}</span>,
// // 		};
// // 	});
// // // console.log(menuItems);


// // 	const addKeys = (arr) => arr.map((i) => ({ ...i, key: i.id }));
// // 	return (
// // 		<div>
// // 			<div>
// // 				{list && (
// // 					<div style={{ marginBottom: "30px" }}>
// // 						<Dropdown
// // 							overlay={
// // 								<Menu onClick={colVisibilityClickHandler} items={columnItems} />
// // 							}
// // 							placement='bottomLeft'>
// // 							<Button>Column Visibility</Button>
// // 						</Dropdown>
// // 					</div>
// // 				)}
// // 			</div>
// // 			<div>
// // 				<Table
// // 					scroll={{ x: true }}
// // 					loading={!list}
// // 					pagination={{
// // 						defaultPageSize: 10,
// // 						pageSizeOptions: [10, 20, 50, 100, 200],
// // 						showSizeChanger: true,
// // 						total: total,

// // 						onChange: (page, limit) => {
// // 							// dispatch(loadProduct({ page, limit, status }));

// // 						},
// // 					}}

// // 					columns={columnsToShow}
// // 					dataSource={list ? addKeys(list) : []
// // 					}
// // 				/>
// // 			</div>
// // 		</div>
// // 	);
// // }


// const CustomTable = ({ list, total, status }) => {
// 	const [columnItems, setColumnItems] = useState([]);
// 	const [columnsToShow, setColumnsToShow] = useState([]);

// 	const columns = [
// 		{
// 			field: 'businessname',
// 			headerName: 'Businessname',
// 			flex: 1,
// 		},
// 		{
// 			field: 'mobilenumber',
// 			headerName: 'MobileNumber',
// 			flex: 1,
// 		},
// 		{
// 			field: 'address',
// 			headerName: 'Address',
// 			flex: 1,
// 		},
// 		{
// 			field: 'pincode',
// 			headerName: 'Pincode',
// 			flex: 1,
// 			hide: true, // Set this to true for initially hidden columns
// 		},
// 		{
// 			field: 'city',
// 			headerName: 'City',
// 			flex: 1,
// 			hide: true,
// 		},
// 		{
// 			field: 'state',
// 			headerName: 'State',
// 			flex: 1,
// 		},
// 		{
// 			field: 'category',
// 			headerName: 'Category',
// 			flex: 1,
// 		},
// 		{
// 			field: 'subcategory',
// 			headerName: 'Sub Category',
// 			flex: 1,
// 			renderCell: (params) => params.row.subcategory?.name || '',
// 			hide: true,
// 		},
// 	];
// 	const rows = list.map((item, index) =>

// 	({

// 		SrNo: index + 1,
// 		businessname: item.businessname,
// 		mobilenumber: item.mobilenumber,
// 		address: item.address,
// 		pincode: item.pincode,
// 		city: item.city,
// 		state: item.state,
// 		category: item.category,
// 		subcategory: item.subcategory,


// 	}));
// 	return (
// 		<div style={{ height: '100%', width: '100%' }}>
// 		  <DataGrid
// 			rows={rows}
// 			columns={columns}
// 			pageSize={10}
// 			components={{
// 			  Toolbar: GridToolbar,
// 			}}
// 		  />
// 		</div>
// 	  );

// 	// const colVisibilityClickHandler = (col) => {
// 	// 	const colIndex = columnsToShow.findIndex((item) => item.field === col.field);
// 	// 	if (colIndex !== -1) {
// 	// 		const filteredColumnsToShow = [...columnsToShow];
// 	// 		filteredColumnsToShow.splice(colIndex, 1);
// 	// 		setColumnsToShow(filteredColumnsToShow);
// 	// 	} else {
// 	// 		setColumnsToShow([...columnsToShow, col]);
// 	// 	}
// 	// };

// 	// const menuItems = columns.map((item) => {
// 	// 	return {
// 	// 		key: item.field,
// 	// 		label: <span>{item.headerName}</span>,
// 	// 	};
// 	// });

// 	// const addKeys = (arr) => arr.map((i, index) => ({ ...i, id: index + 1 }));

// 	// return (
// 	// 	<div>
// 	// 		<div style={{ marginBottom: '30px' }}>
// 	// 			<Dropdown overlay={<Menu onClick={(e) => colVisibilityClickHandler(e.item)}>{menuItems.map((item) => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>}>
// 	// 				<Button>Column Visibility</Button>
// 	// 			</Dropdown>
// 	// 		</div>
// 	// 		<div>
// 	// 			<DataGrid
// 	// 				loading={!rows}
// 	// 				pageSize={10}
// 	// 				rows={rows ? addKeys(rows) : []}
// 	// 				columns={columnsToShow}
// 	// 				pagination
// 	// 			/>
// 	// 		</div>
// 	// 	</div>
// 	// );
// };

// const Chirkut = (props) => {
// 	const dispatch = useDispatch();
// 	// const list = useSelector((state) => state.products.list);
// 	const [total, setTotal] = useState(0);


// 	const list = Dummy()
// 	console.log(list);
// 	useEffect(() => {
// 		// dispatch(loadProduct({ status: "true", page: 1, limit: 10 }));
// 	}, []);


// 	const [status, setStatus] = useState("true");
// 	const onChange = (value) => {
// 		setStatus(value);

// 	};

// 	const CSVlist = list?.map((i) => ({
// 		...i,
// 		product_category: i?.product_category?.name,
// 	}));
// 	console.log(CSVlist);

// 	return (
// 		<div className='card column-design'>
// 			<div className='card-body'>
// 				<h5>List</h5>
// 				{list && (
// 					<div className='card-title d-flex justify-content-end'>
// 						<div className='me-2' style={{ marginTop: "4px" }}>
// 							<CSVLink
// 								data={CSVlist}
// 								className='btn btn-dark btn-sm mb-1'
// 								filename='products'>
// 								Download CSV
// 							</CSVLink>
// 						</div>
// 						<div>
// 							<Segmented
// 								className='text-center rounded danger'
// 								size='middle'

// 								value={status}
// 								onChange={onChange}
// 							/>
// 						</div>
// 					</div>
// 				)}

// 				<CustomTable list={list[0]} />
// 			</div>
// 		</div>
// 	);
// };

// export default Chirkut;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dummy from "./dummy";

const Chirkut = () => {
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

export default Chirkut;
