import { Form, Button, Input} from "antd";
import "./signup.scss";
// import {useNavigate} from 'react-router-dom'

export default function Signup() {
//   const navigate = useNavigate()

  return (
    <div className="form">
      <div className="form-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            localStorage.setItem("USER", JSON.stringify({ ...values }));
            console.log("DATA SUBMITTED");
            // navigate("/signin")
          }}
        >
          <h2>Create Account</h2>

          <Form.Item
            name="fullname"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
              { whitespace: true },
              { min: 3 ,
              message:"must be more than 3"},
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

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
            <Input placeholder="Type your Email" />
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
            <Input.Password placeholder="Type your Password" />
          </Form.Item>

          {/* <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select Gender",
              },
            ]}
          >
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item> */}

          {/* <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your Date of Birth",
              },
            ]}
          >
            <DatePicker
              picker="date"
              placeholder="Choose a Date"
              style={{ width: "100%" }}
            />
          </Form.Item> */}

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button className="button" type="primary" htmlType="submit" style={{ width: "100%" , borderRadius:"5px"}}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
