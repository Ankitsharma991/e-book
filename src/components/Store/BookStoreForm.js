import { Button, Form, Input, Select, message, Upload } from "antd";
import React from "react";
import { InboxOutlined } from "@ant-design/icons";
const MyFormItemContext = React.createContext([]);
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const App = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <div className="w-[30vw] flex items-center justify-center pb-1 mb-2 border-b-2 border-dotted border-slate-600">
        <h1 className="text-lg font-bold">Fill up the Book Details</h1>
      </div>
      <MyFormItemGroup prefix={["user"]}>
        <MyFormItemGroup prefix={["name"]}>
          <MyFormItem
            name="BookName"
            label="Book Name"
            className="w-[30vw] font-bold "
          >
            <Input />
          </MyFormItem>

          <MyFormItem
            name="Author"
            label="Authors Details"
            className="w-[30vw] font-bold "
          >
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
        <MyFormItem
          name="origin"
          label="Country and Language"
          className="w-[30vw] font-bold "
        >
          <Input />
        </MyFormItem>

        <div className="flex justify-around items-center gap-5 w-[30vw]">
        
            <MyFormItem
              name="Price"
              label="Price (Nrs)"
              className="w-[30vw] font-bold "
            >
              <Input />
            </MyFormItem>
          

          <div className=" font-bold ">
            <p>Select Category</p>
            <Select
              className="w-[12vw] font-bold mt-2 mb-6"
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Horror",
                },
                {
                  value: "2",
                  label: "Poetry",
                },
                {
                  value: "3",
                  label: "Short Story",
                },
                {
                  value: "4",
                  label: "Biography",
                },
                {
                  value: "5",
                  label: "Business",
                },
                {
                  value: "6",
                  label: "Romance",
                },
              ]}
            />
          </div>
        </div>
      </MyFormItemGroup>
      <div className="w-[30vw]">
        <p className="font-bold mb-3">Add Cover Picture</p>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        className="mt-4 bg-black text-white hover:opacity-70 hover:bg-black hover-text-white outline-none hover:outline-none "
      >
        Submit
      </Button>
    </Form>
  );
};
export default App;
