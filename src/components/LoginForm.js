import { Button, Form, Input } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const LoginForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex justify-center items-center flex-col h-[90vh] backdrop-blur-5 bg-slate-200">
      <div
        className="border-black border-2 pt-5 pb-5 pl-5 pr-5 w-[25vw] rounded-br-3xl rounded-tl-3xl
      "
      >
        <div className="flex justify-center text-center border-b-2 border-black mb-10 ">
          <h2 className="text-lg font-bold pb-5  ">Login Here</h2>
        </div>
        <Form
          className="flex flex-col justify-center outline-black"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <div className="flex flex-col justify-center items-center">
            <Form.Item
              {...tailFormItemLayout}
              className="flex justify-center hover-text-white outline-none hover:outline-none"
            >
              <Button
                className="bg-black text-white hover:opacity-70 hover:bg-black hover-text-white outline-none hover:outline-none "
                htmlType="submit"
              >
                Sign-in
              </Button>
            </Form.Item>
            <p>
              <span>Don't have an account?</span>
              <a href="/signup" className="text-blue-700 underline">
                SignUp
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
