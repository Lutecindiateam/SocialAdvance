import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu, Segmented, Table } from "antd";
import { useEffect } from "react";
import Dummy from "./dummy";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";

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
	  dataIndex: "mobileNumber",
	  key: "mobileNumber",
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
	  render: (subcategory) => subcategory?.name,
	},
  ];
//   console.log(columns);

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
// console.log(colVisibilityClickHandler);
	const menuItems = columns.map((item) => {
		return {
			key: item.key,
			label: <span>{item.title}</span>,
		};
	});
// console.log(menuItems);


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
							placement='bottomLeft'>
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
					dataSource={list ? addKeys(list) : []
					}
				/>
			</div>
		</div>
	);
}

const Chirkut = (props) => {
	const dispatch = useDispatch();
	// const list = useSelector((state) => state.products.list);
	const [total, setTotal] = useState(0);


	const list = Dummy()
	console.log(list);
	useEffect(() => {
		// dispatch(loadProduct({ status: "true", page: 1, limit: 10 }));
	}, []);

	
	const [status, setStatus] = useState("true");
	const onChange = (value) => {
		setStatus(value);
		
	};

	const CSVlist = list?.map((i) => ({
		...i,
		product_category: i?.product_category?.name,
	}));
	console.log(CSVlist);

	return (
		<div className='card column-design'>
			<div className='card-body'>
				<h5>List</h5>
				{list && (
					<div className='card-title d-flex justify-content-end'>
						<div className='me-2' style={{ marginTop: "4px" }}>
							<CSVLink
								data={CSVlist}
								className='btn btn-dark btn-sm mb-1'
								filename='products'>
								Download CSV
							</CSVLink>
						</div>
						<div>
							<Segmented
								className='text-center rounded danger'
								size='middle'
								// options={[
								// 	{
								// 		label: (
								// 			<span>
								// 				<i className='bi bi-person-lines-fill'></i> Active
								// 			</span>
								// 		),
								// 		value: "true",
								// 	},
								// 	{
								// 		label: (
								// 			<span>
								// 				<i className='bi bi-person-dash-fill'></i> Inactive
								// 			</span>
								// 		),
								// 		value: "false",
								// 	},
								// ]}
								value={status}
								onChange={onChange}
							/>
						</div>
					</div>
				)}

				<CustomTable  list={list[0]}/>
			</div>
		</div>
	);
};

export default Chirkut;

