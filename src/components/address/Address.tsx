import { Form, Button, Input } from "antd";
import "./address.scss";

const {Item} = Form
export default function Address() {
  return (
    <>
      <div className="addressForm">
        <div className="form">
          <Form
            autoComplete="off"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => {
              console.log("DATA SUBMITTED");
            }}
          >
            <h2>Details Page</h2>

            <Item
              name="fullname"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your Name",
                },
                { whitespace: true },
                { min: 3, message: "must be more than 3" },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Full Name" />
            </Item>

            <Item
              name="Mobile"
              label="Mobile Number"
              rules={[
                {
                  required: true,
                  message: "Please enter Mobile Number",
                },
                { whitespace: true },
                { min: 10, message: "must be 10 digit" },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter mobile number" />
            </Item>

            <Item
              label="House no."
              name="house no"
              rules={[
                {
                  required: true,
                  message: "Please fill all the details",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input />
            </Item>

            <Item
              label="Street"
              name="street"
              rules={[
                {
                  required: true,
                  message: "Please fill all the details",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input />
            </Item>

            <Item
              label="District"
              name="district"
              rules={[
                {
                  required: true,
                  message: "Please fill all the details",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input />
            </Item>

            <Item
              label="State"
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please fill all the details",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input />
            </Item>

            <Item
              label="PIN code"
              name="pin code"
              rules={[
                {
                  required: true,
                  message: "Please fill all the details",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input />
            </Item>

            <Item
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please fill all the details",
                },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Button
                className="button"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Proceed To Payment
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </>
  );
}
