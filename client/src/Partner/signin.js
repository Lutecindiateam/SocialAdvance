import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import TextField from "@mui/material/TextField";


 //for developement
const BASEURL = "http://localhost:5000/api"

//for production

// const BASEURL = "/api"

export default function PartnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = {
      email,
      password,
    }

    fetch(`${BASEURL}/authenticate_partner`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Partner" && data.active === "success") {
          alert("Login successful");
          localStorage.setItem("info", JSON.stringify(data));
           navigate(`/upload`);
        } else {
          alert(data.error);
        }
      });
  }
  return (
    <div className="background-container">
      <Container component="main" maxWidth="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh", // Center vertically
        }}>
        <div>
          <Typography variant="h5" style={{ textAlign: "center", fontSize: "30px", color: "white" }}>Login</Typography>
          <form onSubmit={handleSubmit} >
            <TextField
              fullWidth
              label="Email address"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "10px", // Set the border radius
                  color: "white",
                },
                notched: false, // Remove the notch border
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Set the label color to white
                },
              }}
              sx={{
                "& fieldset": {
                  borderColor: "white", // Set the border color to white
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              // style={{background: "white", borderRadius: "10px"}}
              InputProps={{
                style: {
                  borderRadius: "10px",
                  color: "white", // Set the border radius
                },
                notched: false, // Remove the notch border
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Set the label color to white
                },
              }}
              sx={{
                "& fieldset": {
                  borderColor: "white", // Set the border color to white
                },
              }}
            />

            
            <Typography variant="body2" align="right" style={{ color: "white", fontSize: "16px" }}>
              <a href="/partnerforget" className="font-size-3 text-dodger line-height-reset" style={{ color: "white" }}>
                Forgot Password
              </a>
            </Typography>
            <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ borderRadius: "10px", height: "50px" }}>
                Login
              </Button>
            </div>
            <Typography variant="body2" align="right" style={{ color: "white", fontSize: "16px" }}>
              Don't have an account? <a href="/partnersignup" style={{ color: "white" }}>Sign up</a>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
}
