// import React, { useState } from 'react'
// import {
//     IconButton,
//     makeStyles,
//     Toolbar,
//     Typography,
//   } from "@material-ui/core";
// import axios from 'axios';
// import Layout from './Layout';
// import { Grid, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';


// /**
// * @author
// * @function Upload
// **/

// export const UploadData = (props) => {
    // const [csvFile, setCsvFile] = useState(null);

    // const BASEURL = "http://localhost:5000/api"

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Handle form submission logic here
//     };

    // const handleFileChange = (e) => {
    //     console.log(e);
    //     const file = e.target.files[0];
    //     console.log(file);
    //     setCsvFile(file);
    //   };

    //   const handleUpload = async () => {
    //     console.log(csvFile);
    //     if (csvFile) {
    //       const formData = new FormData();
    //       formData.append('csvFile', csvFile);
    //       try {
    //         const response = await axios.post(`${BASEURL}/upload-csv`, formData, {
    //           headers: {
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         });
    
    //         if (response.status === 200) {
    //           alert('CSV file uploaded successfully.');
    //         }
    //       } catch (error) {
    //         console.error(error);
    //         alert('Error uploading CSV file.');
    //       }
    //     }
    //   };
     


//   return(
//     <Layout>
//     <div style={{ display: 'flex', justifyContent: 'space-between' , padding:"20px"}}>
//               <h3>Upload Data</h3>
              
//               <input type="file" accept=".csv" 
//               onChange={handleFileChange}
//                />
//               <Button 
//               onClick={handleUpload}
//               >Upload</Button>
           
//             </div>
//             <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <Paper elevation={3} style={{ padding: '20px' }}>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField fullWidth label="Business Name" variant="outlined" required />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Mobile Number" variant="outlined" required />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Pincode" variant="outlined" required />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField fullWidth label="Address" variant="outlined" required />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="City" variant="outlined" required />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="State" variant="outlined" required />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel>Category</InputLabel>
//                   <Select label="Category" required>
//                     <MenuItem value="category1">Category 1</MenuItem>
//                     <MenuItem value="category2">Category 2</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel>Subcategory</InputLabel>
//                   <Select label="Subcategory" required>
//                     <MenuItem value="subcategory1">Subcategory 1</MenuItem>
//                     <MenuItem value="subcategory2">Subcategory 2</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel>Lead Status</InputLabel>
//                   <Select label="Lead Status" required>
//                     <MenuItem value="interested">Interested</MenuItem>
//                     <MenuItem value="notInterested">Not Interested</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel>Status</InputLabel>
//                   <Select label="Status" required>
//                     <MenuItem value="active">Active</MenuItem>
//                     <MenuItem value="inactive">Inactive</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>

//             </Layout>
//    )

//  }
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { toast } from "react-toastify";

import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../../redux/actions/product/addProductAction";
// import { loadAllProductBrand } from "../../redux/actions/productBrand/getProductBrandAction";
// import { loadAllProductCategory } from "../../redux/actions/productCategory/getProductCategoryAction";
// import { loadAllProductSubCategory } from "../../redux/actions/productSubCategory/getProductSubCategory";
// import UploadMany from "../Card/UploadMany";
import styles from "./AddProd.module.css";
import Layout from "./Layout";
import { bindActionCreators } from "redux";
import { requestAdminLogin } from "../Redux/actions";
import { connect } from "react-redux";

export const UploadData = (props) => {
  console.log(props);
  const LeadStatus = ["New","Contacted","Engaged","KYC Completed", "Accpted", "MorefollowUp", "NotAccepted"];
  const Status = ["Free listing","Paid listing","Advertisement","Social", "Digital", "Web development", "Other"];

  // const category = useSelector((state) => state.productCategories?.list);

  // const subCategory = useSelector((state) => state.productSubCategories?.list);

  // const brand = useSelector((state) => state.productBrands?.list);

  // const dispatch = useDispatch();
  //useEffect for loading category list from redux
  // useEffect(() => {
  // dispatch(loadAllProductCategory({ page: 1, limit: 100 }));
  // dispatch(loadAllProductSubCategory({ page: 1, limit: 100 }));
  // dispatch(loadAllProductBrand({ page: 1, limit: 100 }));
  // }, [dispatch]);

  const { Title } = Typography;
  const [fileList, setFileList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [csvFile, setCsvFile] = useState(null);

  const [form] = Form.useForm();

  const handleFileChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    console.log(file);
    setCsvFile(file);
  };

  const handleUpload = async () => {
    console.log(props);
    console.log(csvFile);
    if (csvFile) {
      const formData = new FormData();
      formData.append('csvFile', csvFile);
      try {
        props.requestAdminLogin({
          data: {
            formData
          },
        });
        // const response = await axios.post(`${BASEURL}/upload-csv`, formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // });
// 
        // if (response.status === 200) {
        //   alert('CSV file uploaded successfully.');
        // }
      } catch (error) {
        console.error(error);
        alert('Error uploading CSV file.');
      }
    }
  };

  const onFinish = async (values) => {
    try {
      let formData = new FormData();
      formData.append("image", fileList[0].originFileObj);
      formData.append("name", values.name);
      formData.append("quantity", values.quantity);
      formData.append("volume", values.volume);
      formData.append("purchase_price", values.purchase_price);
      formData.append("sale_price", values.sale_price);
      formData.append(
        "product_sub_category_id",
        values.product_sub_category_id
      );
      formData.append("product_brand_id", values.product_brand_id);
      formData.append("sku", values.sku);
      formData.append("unit_type", values.unit_type);
      formData.append("reorder_quantity", values.reorder_quantity);
      formData.append("unit_measurement", values.unit_measurement);

      // const resp = await dispatch(addProduct(formData));

      // if (resp.message === "success") {
      // 	form.resetFields();
      // 	setFileList([]);
      // 	setLoader(false);
      // } else {
      // 	setLoader(false);
      // }
    } catch (error) {
      console.log(error.message);
      toast.error("error at creating");
      setLoader(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    setLoader(false);
    toast.error("Something went wrong !");
    console.log("Failed:", errorInfo);
  };

  const handelChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const onClickLoading = () => {
    setLoader(true);
  };

  return (
    <Layout >
    <Fragment>
      <Row className="mr-top" justify="space-between" gutter={[0, 30]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={11}
          xl={11}
          className="rounded column-design"
        >
          <Card bordered={false}>
            <Title level={4} className="m-2 text-center">
              Add Product
            </Title>
            <Form
              form={form}
              name="basic"
              labelCol={{
                span: 7,
              }}
              labelWrap
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                style={{ marginBottom: "15px" }}
                name="name"
                label="Business Name"
                rules={[
                  {
                    required: true,
                    message: "Please input Product name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              {/* <Form.Item
                style={{ marginBottom: "15px" }}
                name="product_category_id"
                label="Select Category "
                rules={[
                  {
                    required: true,
                    message: "Please select category!",
                  },
                ]}
              >
                <Select
                  name="product_category_id"
                  loading={!category}
                  showSearch
                  placeholder="Select Category"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {category &&
                    category.map((cate) => (
                      <Select.Option key={cate.id} value={cate.id}>
                        {cate.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item> */}
              <Form.Item
                style={{ marginBottom: "15px" }}
                label="Mobile Number"
                name="reorder_quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input  Reorder Quantity!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: "15px" }}
                name="name"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please input Product name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "15px" }}
                label="Pincode"
                name="reorder_quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input  Reorder Quantity!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: "15px" }}
                name="product_brand_id"
                label="Select City"
                rules={[
                  {
                    required: true,
                    message: "Please select brand!",
                  },
                ]}
              >
                <Select
                  name="product_brand_id"
                  // loading={!brand}
                  showSearch
                  placeholder="Selct City"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {/* {brand &&
										brand.map((brandSingle) => (
											<Select.Option
												key={brandSingle.id}
												value={brandSingle.id}>
												{brandSingle.name}
											</Select.Option>
										))} */}
                </Select>
              </Form.Item>
              <Form.Item
                style={{ marginBottom: "15px" }}
                name="product_brand_id"
                label="Select State"
                rules={[
                  {
                    required: true,
                    message: "Please select brand!",
                  },
                ]}
              >
                <Select
                  name="product_brand_id"
                  // loading={!brand}
                  showSearch
                  placeholder="Select State"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {/* {brand &&
										brand.map((brandSingle) => (
											<Select.Option
												key={brandSingle.id}
												value={brandSingle.id}>
												{brandSingle.name}
											</Select.Option>
										))} */}
                </Select>
              </Form.Item>

               <Form.Item
                style={{ marginBottom: "15px" }}
                name="product_brand_id"
                label="Select Category"
                rules={[
                  {
                    required: true,
                    message: "Please select brand!",
                  },
                ]}
              >
                <Select
                  name="product_brand_id"
                  // loading={!brand}
                  showSearch
                  placeholder="Select category"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {/* {brand &&
										brand.map((brandSingle) => (
											<Select.Option
												key={brandSingle.id}
												value={brandSingle.id}>
												{brandSingle.name}
											</Select.Option>
										))} */}
                </Select>
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "15px" }}
                name="product_sub_category_id"
                label="Select Subcategory "
                rules={[
                  {
                    required: true,
                    message: "Please select sub-category!",
                  },
                ]}
              >
                <Select
                  name="product_sub_category_id"
                  // loading={!subCategory}
                  showSearch
                  placeholder="Select Subcategory"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {/* {subCategory &&
										subCategory.map((subcat) => (
											<Select.Option key={subcat.id} value={subcat.id}>
												{subcat.name}
											</Select.Option>
										))} */}
                </Select>
              </Form.Item>

             

              <Form.Item
                style={{ marginBottom: "15px" }}
                name="unit_type"
                label="Select Lead Status "
                rules={[
                  {
                    required: true,
                    message: "Please select unit type!",
                  },
                ]}
              >
                <Select
                  name="unit_type"
                  // loading={!category}
                  showSearch
                  placeholder="Select Lead Status"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {LeadStatus &&
                    LeadStatus.map((unit) => (
                      <Select.Option key={unit} value={unit}>
                        {unit}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item
                style={{ marginBottom: "15px" }}
                name="unit_type"
                label="Status "
                rules={[
                  {
                    required: true,
                    message: "Please select unit type!",
                  },
                ]}
              >
                <Select
                  name="unit_type"
                  // loading={!category}
                  showSearch
                  placeholder="Select Status"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {Status &&
                    Status.map((unit) => (
                      <Select.Option key={unit} value={unit}>
                        {unit}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>

              {/* <Form.Item
                style={{ marginBottom: "15px" }}
                label="Unit Measurement"
                name="unit_measurement"
                rules={[
                  {
                    required: true,
                    message: "Please input Unit Messurement!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "15px" }}
                label="Quantity"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input Quantity!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "15px" }}
                label="Purchase Price"
                name="purchase_price"
                rules={[
                  {
                    required: true,
                    message: "Please input Purchase Price!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "15px" }}
                label="Sale Price"
                name="sale_price"
                rules={[
                  {
                    required: true,
                    message: "Please input Sale Price!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              
              <Form.Item label="Upload Image" valuePropName="image">
                <Upload
                  listType="picture-card"
                  beforeUpload={() => false}
                  name="image"
                  fileList={fileList}
                  maxCount={1}
                  onChange={handelChange}
                >
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                </Upload>
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "15px" }}
                label="SKU No"
                name="sku"
                rules={[
                  {
                    required: true,
                    message: "Please input SKU!",
                  },
                ]}
              >
                <Input />
              </Form.Item> */}

              <Form.Item
                style={{ marginBottom: "15px" }}
                className={styles.addProductBtnContainer}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  loading={loader}
                  onClick={onClickLoading}
                >
                  Add Product
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11} className=" rounded">
          <Card className={`${styles.importCsvCard} column-design`}>
            <Title level={4} className="m-2 text-center">
              Import From CSV
            </Title>
            <div className="text-center mt-2 ">
              <form className="form-group ">
                <input
                  className="form-control"
                  type={"file"}
                  id={"csvFileInput"}
                  accept={".csv"}
                  onChange={handleFileChange}
                />
                <br />

                <Button
                  className="mt-2"
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  loading={loader}
                   onClick={handleUpload}
                >
                  Import From CSV
                </Button>
              </form>
            </div>{" "}
          </Card>
        </Col>
      </Row>
    </Fragment>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestAdminLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UploadData);