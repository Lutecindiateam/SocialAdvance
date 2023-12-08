import React, { Fragment } from "react";
import Layout from "./Layout";
import "./style.css";
import QuickLinks from "./quick"




const Dashboard = ({ information }) => {
  return (
    <Layout>
    <Fragment>
      <div>
      <QuickLinks/>
      <br />
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card dashboard-card">
              <div className="card-content">
                <div
                  className="card-body dashboard-card-body"
                  style={{
                    borderRadius: "10px",
                    background:
                      "linear-gradient(90deg, hsla(211, 87%, 65%, 1) 0%, hsla(211, 33%, 30%, 1) 100%)",
                  }}>
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="">
                        {information?.purchase_total
                          ? information?.purchase_total
                          : 0}
                      </h3>
                      <span className="">Total Users</span>
                    </div>
                    <div className="align-self-center">
                      <i
                        className="icon-cloud-download font-large-2 float-right"
                        style={{ color: "#fff	" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card dashboard-card">
              <div className="card-content">
                <div
                  className="card-body dashboard-card-body"
                  style={{
                    borderRadius: "10px",
                    background:
                      "linear-gradient(90deg, hsla(161, 68%, 73%, 1) 0%, hsla(161, 100%, 27%, 1) 100%)",
                  }}>
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="">
                        {information?.sale_total ? information?.sale_total : 0}
                      </h3>
                      <span className="">Total Active</span>
                    </div>
                    <div className="align-self-center">
                      <i
                        className="icon-rocket font-large-2 float-right"
                        style={{ color: "#fff	" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card dashboard-card">
              <div className="card-content">
                <div
                  className="card-body dashboard-card-body"
                  style={{
                    borderRadius: "10px",
                    background:
                      "linear-gradient(90deg, hsla(223, 28%, 73%, 1) 0%, hsla(222, 22%, 48%, 1) 100%)",
                  }}>
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="">
                        {information?.sale_profit
                          ? information?.sale_profit
                          : 0}
                      </h3>
                      <span className="">Total Inactive</span>
                    </div>
                    <div className="align-self-center">
                      <i
                        className="icon-wallet font-large-2 float-right"
                        style={{ color: "#fff	" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card dashboard-card">
              <div className="card-content">
                <div
                  className="card-body dashboard-card-body"
                  style={{
                    borderRadius: "10px",
                    background:
                      "linear-gradient(90deg, hsla(287, 46%, 75%, 1) 2%, hsla(287, 24%, 44%, 1) 100%)",
                  }}>
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="">
                        {information?.sale_count ? information?.sale_count : 0}
                      </h3>
                      <span className="">Total </span>
                    </div>
                    <div className="align-self-center">
                      <i
                        className="icon-wallet font-large-2 float-right"
                        style={{ color: "#fff	" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    </Layout>
  );
};

export default Dashboard;
