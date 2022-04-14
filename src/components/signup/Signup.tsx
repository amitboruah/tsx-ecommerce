import { Form, Button, Input, Select, Radio, message } from "antd";
import "./signup.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import worldMapData from "city-state-country";
// import { Country, State, City } from "country-state-city";
import actions from "../../redux/auth/action";
import { error } from "../../utility";


export default function Signup() {
  const [state, setState] = useState(true);
  const [country, setCountry] = useState(true);
  const [loader, setLoader] = useState(false);

  const [countryData, setCountryData] = useState("");
  const [stateData, setStateData] = useState("");

  const dispatch = useDispatch();

  const successMessage = useSelector(
    (state: any): any => state.authReducer.userSignupSuccess
  );

  const errorMessage = useSelector(
    (state: any): any => state.authReducer.signupError
  );

  console.log(successMessage, "message from signup");
  console.log(errorMessage, "error from signup");

  const handleOnFinish = (value) => {
    dispatch(actions.signupReq(value));
    setLoader(true);
  };
  
  const printSuccessMessage = (msg: any) => {
    if (msg) {
      setLoader(false);
      message.success(msg);
    }
  };
  const printErrorMessage = (msg: any) => {
    if (msg) {
      setLoader(false);
      message.error(msg);
    }
  };
  
    useEffect(() => {
      printSuccessMessage(successMessage);
      printErrorMessage(errorMessage);
    }, [successMessage, errorMessage]);

  return (
    <>
      <div className="signup">
        
        {loader ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
            alt="loading"
            className="loader"
          />
        ) : null}

        <div className="signup-form">
          <Form
            // autoComplete="off"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 15 }}
            onFinish={(val: any) => handleOnFinish(val)}
          >
            <h2>Create Account</h2>

            <Form.Item
              name="First_name"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: error.first_name,
                },
                { whitespace: true },
                { min: 3, message: error.min_character },
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
                  message: error.last_name,
                },
                { whitespace: true },
                { min: 3, message: error.min_character },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your last name" />
            </Form.Item>

            <Form.Item
              name="Gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: error.gender,
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </Radio.Group>
            </Form.Item>

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
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: error.password_regex,
                },
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
                  message: error.country,
                },
              ]}
            >
              <Select
                onChange={(value) => {
                  setCountryData(value);
                  setState(false);
                }}
              >
                <Select.Option value="India">India</Select.Option>

                {/* {Country.getAllCountries().map((ele: any,index:number) => {
                return (
                  <Select.Option value={ele.name} key={index}>{ele.name}</Select.Option>
                );
              })} */}
              </Select>
            </Form.Item>

            <Form.Item
              name="State"
              label="State"
              rules={[
                {
                  required: true,
                  message: error.state,
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
                <Select.Option value="Gujarat">Gujarat</Select.Option>
                <Select.Option value="Goa">Goa</Select.Option>

                {/* {worldMapData
                .getAllStatesFromCountry(countryData)
                .map((ele: any,ky:number) => {
                  return (
                    <Select.Option value={ele.name} key={ky}>{ele.name}</Select.Option>
                  );
                })} */}
              </Select>
            </Form.Item>

            <Form.Item
              name="City"
              label="City"
              rules={[
                {
                  required: true,
                  message: error.city,
                },
              ]}
            >
              <Select disabled={country}>
                <Select.Option value="Ahemdabad">Ahemdabad</Select.Option>
                <Select.Option value="Surat">Surat</Select.Option>

                {/* {worldMapData.getAllCitiesFromState(stateData).map((ele: any,ky:number) => {
                return (
                  <Select.Option value={ele.name} key={ky}>{ele.name}</Select.Option>
                );
              })} */}
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
    </>
  );
}
