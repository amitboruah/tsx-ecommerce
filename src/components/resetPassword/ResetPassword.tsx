import { Button, Form, message } from "antd";
import Password from "antd/lib/input/Password";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/action";
import "./resetpassword.scss";

export default function ResetPassword() {
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const successMessage = useSelector(
    (state: any): any => state.authReducer.resetSuccess
  );
  const errorMessage = useSelector(
    (state: any): any => state.authReducer.resetError
  );

  const url = window.location.href;
  const token = url.split("=");
  const accessToken = token[1];
  // console.log("from reset", accessToken);

  const handleOnFinish = (value: any): any => {
    setLoader(true)
    value.access_token = accessToken;
    dispatch(actions.resetPassword(value));
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
      <div className="form">
        {loader ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
            alt="loading"
            className="loader"
          />
        ) : null}

        <div className="form-header">
          <Form
            autoComplete="off"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 15 }}
            onFinish={handleOnFinish}
          >
            <h2>Forgot Password</h2>
            <Form.Item
              label="New Password:"
              name="Password"
              rules={[
                {
                  required: true,
                },

                { min: 8, message: "Atleast 8 Characters Required" },

                {
                  validator: (_, value) =>
                    value &&
                    /[A-Z]/.test(value) &&
                    /[a-z]/.test(value) &&
                    /[0-9]/.test(value) &&
                    /[@#$%^&]/.test(value)
                      ? Promise.resolve()
                      : Promise.reject(
                          "Note: Must use 1 capital, 1 small, 1 Numeric, 1 symbol"
                        ),
                },
              ]}
              hasFeedback
            >
              <Password placeholder="Enter Password"></Password>
            </Form.Item>

            <Form.Item
              label="Confirm Password:"
              name="conformPassword"
              dependencies={["Password"]}
              rules={[
                {
                  required: true,
                },

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("Password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject("Password Doesn't match");
                  },
                }),
              ]}
              hasFeedback
            >
              <Password placeholder="Re-Enter Password"></Password>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                className="button"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
