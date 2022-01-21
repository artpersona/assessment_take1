import React, { useState } from "react";
import UserLayout from "../../layout/UserLayout";
import {
  Table,
  Button,
  Row,
  message,
  Modal,
  Form,
  Input,
  Divider,
  Image,
  Checkbox,
  Select,
} from "antd";
import { useAppContext } from "../../shared/contexts/AppContext";
function Applicants() {
  const { applicants, handleApplicantRequest } = useAppContext();

  const processRequest = (data, status) => {
    handleApplicantRequest(data, status)
      .then(() => message.success("Action Performed"))
      .catch((err) => message.error("err encountered"));
  };

  const [view, setView] = useState(false);
  const [viewData, setViewData] = useState({});
  const { Option } = Select;

  const tableColumns = [
    {
      title: "Existing",
      key: "existing",
      dataIndex: "existing",
      render: (text, record) => {
        return <Checkbox style={{ alignSelf: "center" }} checked={text} />;
      },
    },
    {
      title: "Applied For",
      key: "appliedFor",
      dataIndex: "appliedFor",
      render: (text, record) => {
        return <Checkbox style={{ alignSelf: "center" }} checked={text} />;
      },
    },
    {
      title: "Vehicle Category",
      key: "vehicleCategory",
      dataIndex: "vehicleCategory",
      render: (data, record) => {
        return (
          <div>
            <Row>
              <p style={{ marginRight: 10, fontWeight: "bold" }}>{data.code}</p>
              <p>{data.name}</p>
            </Row>
            {data.classes.map((item) => {
              return (
                <Row>
                  <p
                    style={{
                      marginRight: "2%",
                      fontSize: 11,
                      fontWeight: "bold",
                    }}
                  >
                    {item.subcode}
                  </p>
                  <p style={{ fontSize: 10, width: "80%" }}>
                    {item.description}
                  </p>
                </Row>
              );
            })}
          </div>
        );
      },
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (data, record) => {
        return <Image width={120} src={data} />;
      },
    },
    {
      title: "License Type",
      key: "licenseType",
      dataIndex: "licenseType",
      render: (data, record) => {
        return (
          <Select style={{ width: 120 }} defaultValue={data}>
            <Option value="SV">SV</Option>
            <Option value="Non Pro">Non Pro</Option>

            <Option value="Pro">Pro</Option>
          </Select>
        );
      },
    },
    {
      title: "Clutch Type",
      key: "clutchType",
      dataIndex: "clutchType",
      render: (data, record) => {
        return <Checkbox.Group defaultValue={[]} />;
      },
    },
  ];

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Application Type",
      dataIndex: "application_type",
      key: "type",
      filters: [
        {
          text: "New",
          value: "New",
        },
        { text: "Renewal", value: "Renewal" },
        { text: "Conversion", value: "conversion" },
        { text: "Additional Code or Category", value: "additional_code" },
        { text: "Change of DL Classification", value: "change_classification" },
        { text: "Expired DL with Valid FDL", value: "expired_dl" },
        { text: "Duplicate", value: "duplicate" },
        {
          text: "Dropping of Category or Addl or Removal of Driving Conditions",
          value: "dropping",
        },
        { text: "Change Address", value: "change_address" },
        { text: "Change Civil Status", value: "change_civstatus" },
        { text: "Change Name", value: "change_name" },
        { text: "Change Birth Date", value: "change_birthdate" },
        { text: "Change: Others", value: "change_others" },
        {
          text: "Enhancment of DL",
          value: "enhancement_dl",
        },
        { text: "Change of Clutch Type", value: "clutch_type" },
      ],
      onFilter: (value, record) => record.application_type.includes(value),
      filterMode: "tree",
      filterSearch: true,
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => {
        return (
          <Row>
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              onClick={() => processRequest(record, "approved")}
              disabled={record.status}
            >
              Approve
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: "red" }}
              onClick={() => processRequest(record, "rejected")}
              disabled={record.status}
            >
              Reject
            </Button>

            <Button
              type="primary"
              style={{ backgroundColor: "darkgreen" }}
              onClick={() => {
                setView(true);
                setViewData(record);
              }}
              disabled={record.status}
            >
              View
            </Button>
          </Row>
        );
      },
    },
  ];

  return (
    <UserLayout>
      <div>
        <p>Applicants Page</p>

        <Table
          columns={columns}
          dataSource={applicants}
          style={{ width: "80%", marginLeft: "10%" }}
        />
      </div>

      <Modal
        title="ADL-Form21"
        visible={view}
        // onOk={handleSubmit}
        onCancel={() => setView(false)}
        getContainer={false}
        keyboard={false}
        width={800}
      >
        <Form layout="vertical" id="patient_form">
          <p style={{ fontWeight: "bold", marginBottom: "5%" }}>
            Basic Information
          </p>

          <Form.Item
            label="First Name"
            style={{ width: "100%" }}
            name="first_name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder={viewData.first_name} />
          </Form.Item>
          <Form.Item
            label="Last Name"
            style={{ width: "100%" }}
            name="last_name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder={viewData.last_name} />
          </Form.Item>
          <Form.Item
            label="Middle Name"
            style={{ width: "100%" }}
            name="middle_name"
            rules={[
              { required: true, message: "Please input your middle name!" },
            ]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Present Address"
            style={{ width: "100%" }}
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.address}
            />
          </Form.Item>
          <Form.Item
            label="Tel. No / Cp. No"
            style={{ width: "100%" }}
            name="contact_num"
            rules={[
              {
                required: true,
                message: "Please input your contact_num!",
                minLength: {
                  value: 11,
                  message: "This field must be at least 11 characters long.",
                },
                maxLength: {
                  value: 11,
                  message: "This field must be at most 11 characters long.",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "This field must be a number.",
                },
              },
            ]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.contact_num}
            />
          </Form.Item>

          <Form.Item
            label="Tin"
            style={{ width: "100%" }}
            name="tin"
            rules={[{ required: true, message: "Please input your tin!" }]}
          >
            <Input placeholder="input placeholder" placeholder={viewData.tin} />
          </Form.Item>

          <Form.Item
            label="Nationality"
            style={{ width: "100%" }}
            name="nationality"
            rules={[
              { required: true, message: "Please input your nationality!" },
            ]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.nationality}
            />
          </Form.Item>

          <Form.Item
            label="Sex"
            style={{ width: "100%" }}
            name="gender"
            initialValue={"Male"}
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Input placeholder={viewData.gender} />
          </Form.Item>

          <Form.Item
            label="Birth Date"
            style={{ width: "100%" }}
            name="birth_date"
            rules={[{ required: true, message: "Birth Date is required!" }]}
          >
            <Input placeholder={viewData.birth_date} />
          </Form.Item>

          <Form.Item
            label="Height"
            style={{ width: "100%" }}
            name="height"
            rules={[{ required: true, message: "Height is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.height}
            />
          </Form.Item>

          <Form.Item
            label="Weight"
            style={{ width: "100%" }}
            name="weight"
            rules={[{ required: true, message: "Weight is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.weight}
            />
          </Form.Item>

          <Form.Item
            label="License No."
            style={{ width: "100%" }}
            name="license_no"
            rules={[{ required: true, message: "License No. is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.license_no}
            />
          </Form.Item>

          <Form.Item
            label="Civil Status"
            style={{ width: "100%" }}
            name="civil_status"
            rules={[{ required: true, message: "Civil Status is requred!" }]}
          >
            <Input placeholder={viewData.civil_status} />
          </Form.Item>

          <Form.Item
            label="Birthplace"
            style={{ width: "100%" }}
            name="birthplace"
            rules={[{ required: true, message: "Birthplace is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.birthplace}
            />
          </Form.Item>

          <Form.Item
            label="Father's Name"
            style={{ width: "100%" }}
            name="father_name"
            rules={[{ required: true, message: "Father's name is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.father_name}
            />
          </Form.Item>

          <Form.Item
            label="Mother's Name"
            style={{ width: "100%" }}
            name="mother_name"
            rules={[{ required: true, message: "Mother's name is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.mother_name}
            />
          </Form.Item>

          <Form.Item
            label="Spouse Name"
            style={{ width: "100%" }}
            name="spouse_name"
            placeholder={viewData.spouse_name}
            // rules={[{ required: true, message: "Age is requred!" }]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item
            label="Employer's Business Name"
            style={{ width: "100%" }}
            name="emp_name"
            placeholder={viewData.emp_name}
            // rules={[{ required: true, message: "Age is requred!" }]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item
            label="Employer Tel No."
            style={{ width: "100%" }}
            name="emp_num"
            placeholder={viewData.emp_num}
            // rules={[{ required: true, message: "Age is requred!" }]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item
            label="Employer Business Address"
            style={{ width: "100%" }}
            name="emp_address"
            placeholder={viewData.emp_address}
            // rules={[{ required: true, message: "Age is requred!" }]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item
            label="Emergency Contact Person"
            style={{ width: "100%" }}
            name="emergency_name"
            rules={[
              {
                required: true,
                message: "Emergency Contact Person is requred!",
              },
            ]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.emergency_name}
            />
          </Form.Item>

          <Form.Item
            label="Emergency Contact Address"
            style={{ width: "100%" }}
            name="emergency_address"
            rules={[
              {
                required: true,
                message: "Emergency Contact Address is requred!",
              },
            ]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.emergency_address}
            />
          </Form.Item>

          <Form.Item
            label="Emergency Contact No."
            style={{ width: "100%" }}
            name="emergency_num"
            rules={[
              {
                required: true,
                message: "Emergency Contact Address is requred!",
              },
            ]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.emergency_num}
            />
          </Form.Item>

          <Form.Item
            label="Agency Code"
            style={{ width: "100%" }}
            name="agency_code"
            rules={[{ required: true, message: "Agency code is requred!" }]}
          >
            <Input
              placeholder="input placeholder"
              placeholder={viewData.agency_code}
            />
          </Form.Item>

          <Form.Item
            label="Issue Date"
            style={{ width: "100%" }}
            name="issue_date"
            rules={[{ required: true, message: "Issue date is requred!" }]}
          >
            <Input placeholder={viewData.issue_date} />
          </Form.Item>

          <Form.Item
            label="Expiry Date"
            style={{ width: "100%" }}
            name="expiry_date"
            rules={[{ required: true, message: "Expiry date is requred!" }]}
          >
            <Input placeholder={viewData.expiry_date} />
          </Form.Item>

          <Divider />

          <Form.Item
            label="License Classification Applied For (LCA)"
            style={{ width: "100%" }}
            name="license_classification"
            initialValue={"st_permit"}
          >
            <Input placeholder={viewData.license_classification} />
          </Form.Item>

          <Form.Item
            style={{ width: "100%" }}
            name="education_level"
            label="Highest Educational Attainment (EA)"
            rules={[{ required: true, message: "EA is requred!" }]}
          >
            <Input placeholder={viewData.education_level} />
          </Form.Item>

          <Form.Item
            label="Blood Type"
            style={{ width: "100%" }}
            name="blood_type"
            rules={[{ required: true, message: "Blood Type is requred!" }]}
          >
            <Input placeholder={viewData.blood_type} />
          </Form.Item>

          <Form.Item
            label="Eyes Color"
            style={{ width: "100%" }}
            name="eye_color"
            rules={[{ required: true, message: "Eyes color is requred!" }]}
          >
            <Input placeholder={viewData.eye_color} />
          </Form.Item>

          <Form.Item
            label="Type of Application"
            style={{ width: "100%" }}
            name="application_type"
            rules={[
              { required: true, message: "Application Type is requred!" },
            ]}
          >
            <Input placeholder={viewData.application_type} />
          </Form.Item>

          <Divider />
          <p style={{ fontWeight: "bold", marginBottom: "5%" }}>
            Driver's License Vehicle Category
          </p>
          <Table columns={tableColumns} dataSource={viewData.tableData} />

          <Divider />
          <p style={{ fontWeight: "bold", marginBottom: "5%" }}>Conditions</p>

          <Form.Item
            label="Previous Name (Fill up if your name above is different from your previous license)"
            style={{ width: "100%" }}
            name="prev_name"
            // rules={[{ required: true, message: "Age is requred!" }]}
          >
            <Input placeholder={viewData.prev_name} />
          </Form.Item>

          <Form.Item
            label="HIS IS TO CERTIFY UNDER PENALTY OF PERJURY THAT THE INFORMATION I HAVE GIVEN IS TRUE AND CORRECT"
            style={{ width: "100%" }}
            name="validation_name"
            rules={[{ required: true, message: "Signature is requred!" }]}
          >
            <Input placeholder={viewData.validation_name} />
          </Form.Item>

          <Form.Item
            label="TO BE ACCOMPLISHED BY LTO PERSONNEL ONLY"
            style={{ width: "100%" }}
            name="evaluator_name"
            rules={[
              { required: true, message: "Evaluator signature is requred!" },
            ]}
          >
            <Input placeholder={viewData.evaluator_name} />
          </Form.Item>
        </Form>
      </Modal>
    </UserLayout>
  );
}

export default Applicants;
