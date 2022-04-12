import { Form, Button, Input} from "antd";
import "./signin.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/action";
import { error } from "../../utility";


export default function Signin() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const data = useSelector(
    (state: any): any => state.authReducer.userSignupSuccess
  );

  console.log(data, "from login");

  const handleOnFinish = (value: any): any => {
    console.log(value, "login");
    dispatch(actions.loginReq(value));
  };

  return (
    <div className="form">
      <div className="form-header">
        <Form
          autoComplete="off"
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
            <Input
              placeholder="Type your Email"
            />
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
            <Input.Password
              placeholder="Type your Password"
              
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
