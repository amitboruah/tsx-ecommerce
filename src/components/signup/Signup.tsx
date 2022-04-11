import { Form, Button, Input, Select, Radio } from "antd";
import "./signup.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import worldMapData from "city-state-country";
import { Country, State, City } from 'country-state-city';

export default function Signup() {
  const [state, setState] = useState(true);
  const [country, setCountry] = useState(true);

  const [countryData, setCountryData] = useState("");
  const [stateData, setStateData] = useState("");

  const navigate = useNavigate();
  // console.log(Country.getAllCountries(),"data");
  

  return (
    <div className="signup">
      <div className="signup-form">
        <Form
          autoComplete="off"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 15 }}
          onFinish={(values) => {
            localStorage.setItem("USER", JSON.stringify({ ...values }));
            console.log(values,"DATA SUBMITTED");
            navigate("/");
          }}
        >
          <h2>Create Account</h2>

          <Form.Item
            name="First_name"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your First Name",
              },
              { whitespace: true },
              { min: 3, message: "must be more than 3" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your first name" />
          </Form.Item>

          <Form.Item
            name="Last_name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your Last Name",
              },
              { whitespace: true },
              { min: 3, message: "must be more than 3" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your last name" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select Gender",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="Email"
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
            name="Password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              { min: 8, message: "Password must be min 8" },
            ]}
          >
            <Input.Password placeholder="Type your Password" />
          </Form.Item>

          <Form.Item
            name="Country"
            label="Country"
            rules={[
              {
                required: true,
                message: "Please select Country",
              },
            ]}
          >
            <Select
              onChange={(value) => {
                setCountryData(value);
                setState(false);
              }}
            >
              {Country.getAllCountries().map((ele: any,ky:number) => {
                return (
                  <Select.Option value={ele.name} key={ky}>{ele.name}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            name="State"
            label="State"
            rules={[
              {
                required: true,
                message: "Please select State",
              },
            ]}
          >
            <Select
              disabled={state}
              onChange={(value) => {
                setStateData(value);
                setCountry(false);
              }}
            >
              {worldMapData
                .getAllStatesFromCountry(countryData)
                .map((ele: any,ky:number) => {
                  return (
                    <Select.Option value={ele.name} key={ky}>{ele.name}</Select.Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="City"
            label="City"
            rules={[
              {
                required: true,
                message: "Please select City",
              },
            ]}
          >
            <Select disabled={country}>
              {worldMapData.getAllCitiesFromState(stateData).map((ele: any,ky:number) => {
                return (
                  <Select.Option value={ele.name} key={ky}>{ele.name}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              className="button"
              type="primary"
              htmlType="submit"
              style={{ width: "100%", borderRadius: "5px" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
