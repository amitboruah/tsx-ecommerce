import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/action";
import { error } from "../../utility";
import "./forgotPassword.scss";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const successMessage = useSelector(
    (state: any): any => state.authReducer.forgotSuccess
  );

  const errorMessage = useSelector(
    (state: any): any => state.authReducer.forgotError
  );

  const handleOnFinish = (value: any): any => {
    dispatch(actions.forgotPassword(value));
    setLoader(true)
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
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            onFinish={handleOnFinish}
          >
            <h2>Forgot Password</h2>

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
