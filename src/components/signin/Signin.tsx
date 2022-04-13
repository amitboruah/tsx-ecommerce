import { Form, Button, Input, message } from "antd";
import "./signin.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/action";
import { authenticated, error } from "../../utility";
import { useEffect, useState } from "react";

export default function Signin() {
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const errorMessage = useSelector(
    (state: any): any => state.authReducer.loginError
  );

  const handleOnFinish = (value: any): any => {
    dispatch(actions.loginReq(value));
    setLoader(true)
  };
  const printErrorMessage = (msg: any) => {
    if (msg) {
      setLoader(false);
      message.error(msg);
    }
  };

  useEffect(() => {
    printErrorMessage(errorMessage);
  }, [errorMessage]);
  return (
    <div className="form">
      {loader?(
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
          alt="loading"
          className="loader"
        />
      ) : null}
      <div className="form-header">
        <Form
          // autoComplete="off" 
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          onFinish={handleOnFinish}
        >
          <h2>Login</h2>

          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                required: true,
                message: error.email,
              },
              { type: "email", message: error.valid_email },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Email" />
          </Form.Item>

          <Form.Item
            name="Password"
            label="Password"
            rules={[
              {
                required: true,
                message: error.password,
              },
            ]}
          >
            <Input.Password placeholder="Type your Password" />
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

          <a href="">
            <p className="already" onClick={() => navigate("/Signup")}>
              create account
            </p>
          </a>
          <a href="#">
            <p className="already">Forgot password</p>
          </a>
        </Form>
      </div>
    </div>
  );
}
