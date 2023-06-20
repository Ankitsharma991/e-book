import { Button, Form, Input } from "antd";
import { useState } from "react";
import axios from "axios";
import { authenticate, isAuth } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

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
const SignUpForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const  data  = await axios
        .post("https://bookghar.onrender.com/api/v1/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          console.log("SIGNIN SUCCESS", response);
          // save the response (user, token) localstorage/cookie
          authenticate(response, () => {
            setFormData({
              name: "",
              email: "",
              password: "",
              confirm: "",
            });
            // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
            isAuth() && isAuth().role === "admin"
              ? navigate("/home")
              : navigate("/store");
          });
        });

     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-[90vh] backdrop-blur-5 bg-slate-200">
      <div
        className="border-black border-2 pt-5 pb-5 pl-5 pr-5 w-[25vw] rounded-br-3xl rounded-tl-3xl
      "
      >
        <div className="flex justify-center text-center border-b-2 border-black mb-10 ">
          <h2 className="text-lg font-bold pb-5  ">Register Here</h2>
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
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input onChange={handleChange} name="name" />
          </Form.Item>
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
            <Input onChange={handleChange} name="email" />
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
            <Input.Password onChange={handleChange} name="password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password onChange={handleChange} name="confirm" />
          </Form.Item>

          <div className="flex flex-col justify-center items-center">
            <Form.Item
              {...tailFormItemLayout}
              className="flex justify-center hover-text-white outline-none hover:outline-none"
            >
              <Button
                className="bg-black text-white hover:opacity-70 hover:bg-black hover-text-white outline-none hover:outline-none "
                htmlType="submit"
                onClick={submitHandler}
              >
                Register
              </Button>
            </Form.Item>
            <p>
              <span>Already have an account?</span>
              <a href="/login" className="text-blue-700 underline">
                Login
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default SignUpForm;
