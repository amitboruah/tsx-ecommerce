import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Input } from "antd";
import "./signin.scss";
// import { useNavigate } from "react-router-dom";
// import { ProductContext } from "./context/ProductContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { setLogin ,login} = useContext(ProductContext);

  // const navigate = useNavigate();

  // const authenticate = () => {
  // let data = JSON.parse(localStorage.getItem("USER"));

  // if (data.email === email && data.password === password) {
  //   localStorage.setItem("loggedIn", JSON.stringify([email]));
  // const logData = localStorage.getItem("loggedIn");

  //     setLogin(data.email);
  //     navigate("/product");
  //   } else {
  //     alert("wrong Credential");
  //   }
  // };

  //  useEffect(()=>{
  //     console.log("login from useffect ",login);
  //   },[login])

  return (
    <div className="form">
      <div className="form-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          // onFinish={authenticate}
        >
          <h2>Login</h2>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your Email",
              },
              { type: "email", message: "Enter the valid Email" },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Type your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              { min: 6, message: "Password must be min 6" },
            ]}
          >
            <Input.Password
              placeholder="Type your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              className="button"
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Login
            </Button>
          </Form.Item>

          <a href="#">
            <p className="already">create account</p>
          </a>
          <a href="#">
            <p className="already">Forgot password</p>
          </a>
        </Form>
      </div>
    </div>
  );
}
