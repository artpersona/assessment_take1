import React, { useState } from "react";
import Layout from "../../../layout/UserLayout";
import {
  Form,
  Select,
  Input,
  Divider,
  Radio,
  Modal,
  Button,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Typography,
  Table,
  Image,
  message,
} from "antd";
import {
  PlusOutlined,
  InboxOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../../../shared/contexts/AppContext";
function FormPage() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { submitApplicationForm } = useAppContext();
  const handleSubmit = (data) => {
    let tableData = [
      {
        existing: aExisting,
        appliedFor: aApplied,
        vehicleCategory: {
          code: "A",
          name: "Motorcycle",
          classes: [
            {
              subcode: "L1",
              description:
                "Two wheels with a maximum design speed not exceeding 50 km/h",
            },
            {
              subcode: "L2",
              description:
                "Three wheels with a maximum design speed not exceeding 50 kph",
            },
            {
              subcode: "L3",
              description:
                "Two wheels with a maximum design speed exceeding 50 kph",
            },
          ],
        },
        licenseType: aLicenseType,
        clutchType: aTransmission,
        image:
          "https://media.zigcdn.com/media/content/2018/Oct/top-5-value-for-money-bikes-6.jpg",
      },

      {
        existing: a1Existing,
        appliedFor: a1Applied,
        vehicleCategory: {
          code: "A1",
          name: "Tricycle",
          classes: [
            {
              subcode: "L4",
              description:
                "Motorcycle with side cars with a maximum design speed exceeding 50 kph",
            },
            {
              subcode: "L5",
              description:
                "Three wheels symmetrically arranged with a maximum design speed exceeding 50 kph",
            },
            {
              subcode: "L6",
              description:
                "Four wheels whose unladen mass is not more than 350kg with maximum design speed not exceeding 45 kph",
            },
            {
              subcode: "L7",
              description:
                "Four wheels whose unladen mass is not more than 550kg with maximum design speed not exceeding 45 kph",
            },
          ],
        },
        licenseType: a1LicenseType,
        clutchType: a1Transmission,
        image:
          "https://media.istockphoto.com/photos/tricycles-waiting-at-a-street-for-people-wanting-delivery-services-picture-id1227067069?k=20&m=1227067069&s=612x612&w=0&h=9SsUWutjMG2on8gptMf1wdXou_KJi6zjTMUepv-NIJE=",
      },

      {
        existing: bExisting,
        appliedFor: bApplied,
        vehicleCategory: {
          code: "B",
          name: "",
          classes: [
            {
              subcode: "M1",
              description:
                "Vehicles used for the carriage of passengers and comprising not more than 8 seats in addition to the driver's seat with GVW up to 5000kgs",
            },
          ],
        },
        licenseType: "Non Pro",
        clutchType: bTransmission,
        image:
          "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2021/05/04163108/Best-Luxury-SUV-Collage-2.jpg",
      },

      {
        existing: b1Existing,
        appliedFor: b1Applied,
        vehicleCategory: {
          code: "B1",
          name: "",
          classes: [
            {
              subcode: "M2",
              description:
                "M2 Vehicles used for the carriage of passengers, comprising more than 8 seats in addition to the driver's seat with GVW up to5000kgs.",
            },
          ],
        },
        licenseType: "Non Pro",
        clutchType: b1Transmission,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1a/2018_Ford_Transit_Custom_300_Base_2.0_facelift.jpg",
      },

      {
        existing: b2Existing,
        appliedFor: b2Applied,
        vehicleCategory: {
          code: "B2",
          name: "Light Commercial Vehicle",
          classes: [
            {
              subcode: "N1",
              description:
                "Vehicles used for the carriage of goods and having a GVW up to 3500kgs.",
            },
          ],
        },
        licenseType: "Non Pro",
        clutchType: b2Transmission,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nippon_Rent-A-Car_Isuzu_Elf_NJR85A.jpg",
      },
    ];
    data.tableData = tableData;
    console.log(data);
    setLoading(true);
    submitApplicationForm(data)
      .then(() => {
        setLoading(false);
        setIsVisible(false);
        message.success("Application submitted successfully");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Error submitting application");
      });
  };

  const plainOptions = [
    "Heart",
    "Eyes",
    "Liver",
    "Bones",
    "Kidneys",
    "Cornea",
    "Pancreas",
    "Lungs",
    "Skin",
  ];
  const defaultCheckedList = [];

  const clutchOptions = ["AT", "MT"];

  const conditionOptions = [
    "1 Wear Corrective Lenses",
    "2 Drive Only W/ Special Equipment for Upper Limbs/ Lower Limbs",
    "3 Drive Customized Motor Vehicle Only",
    "4 Daylight Driving Only",
    "5 Hearing Aid is Required",
  ];

  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [permitType, setPermitType] = useState("");
  const [isOrganDonor, setIsOrganDonor] = useState(null);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const [aExisting, setAExisting] = useState(false);
  const [aApplied, setAApplied] = useState(false);
  const [aLicenseType, setALicenseType] = useState("Non Pro");
  const [aTransmission, setATransmission] = useState(["AT"]);

  const [a1Existing, setA1Existing] = useState(false);
  const [a1Applied, setA1Applied] = useState(false);
  const [a1LicenseType, setA1LicenseType] = useState("Non Pro");
  const [a1Transmission, setA1Transmission] = useState(["AT"]);

  const [bExisting, setBExisting] = useState(false);
  const [bApplied, setBApplied] = useState(false);
  const [bLicenseType, setBLicenseType] = useState("Non Pro");
  const [bTransmission, setBTransmission] = useState(["AT"]);

  const [b1Existing, setB1Existing] = useState(false);
  const [b1Applied, setB1Applied] = useState(false);
  const [b1LicenseType, setB1LicenseType] = useState("Non Pro");
  const [b1Transmission, setB1Transmission] = useState(["AT"]);

  const [b2Existing, setB2Existing] = useState(false);
  const [b2Applied, setB2Applied] = useState(false);
  const [b2LicenseType, setB2LicenseType] = useState("Non Pro");
  const [b2Transmission, setB2Transmission] = useState(["AT"]);

  const onExistingChange = (e, code) => {
    if (code === "A") {
      setAExisting(e);
    } else if (code === "A1") {
      setA1Existing(e);
    } else if (code === "B") {
      setBExisting(e);
    } else if (code === "B1") {
      setB1Existing(e);
    } else if (code === "B2") {
      setB2Existing(e);
    }
  };

  const onAppliedForChange = (e, code) => {
    if (code === "A") {
      setAApplied(e);
    } else if (code === "A1") {
      setA1Applied(e);
    } else if (code === "B") {
      setBApplied(e);
    } else if (code === "B1") {
      setB1Applied(e);
    } else if (code === "B2") {
      setB2Applied(e);
    }
  };

  const handleLicenseTypeChange = (e, code) => {
    console.log("e is: ", e);
    if (code === "A") {
      setALicenseType(e);
    } else if (code === "A1") {
      setA1LicenseType(e);
    } else if (code === "B") {
      setBLicenseType(e);
    } else if (code === "B1") {
      setB1LicenseType(e);
    } else if (code === "B2") {
      setB2LicenseType(e);
    }
  };

  const onTransmissionChange = (e, code) => {
    if (code === "A") {
      setATransmission(e);
    } else if (code === "A1") {
      setA1Transmission(e);
    } else if (code === "B") {
      setBTransmission(e);
    } else if (code === "B1") {
      setB1Transmission(e);
    } else if (code === "B2") {
      setB2Transmission(e);
    }
  };

  // Table Data
  const columns = [
    {
      title: "Existing",
      key: "existing",
      dataIndex: "existing",
      render: (text, record) => {
        return (
          <Checkbox
            style={{ alignSelf: "center" }}
            onChange={(e) =>
              onExistingChange(e.target.checked, record.vehicleCategory.code)
            }
          />
        );
      },
    },
    {
      title: "Applied For",
      key: "appliedFor",
      dataIndex: "appliedFor",
      render: (text, record) => {
        return (
          <Checkbox
            style={{ alignSelf: "center" }}
            onChange={(e) =>
              onAppliedForChange(e.target.checked, record.vehicleCategory.code)
            }
          />
        );
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
          <Select
            style={{ width: 120 }}
            onChange={(e) =>
              handleLicenseTypeChange(e, record.vehicleCategory.code)
            }
            defaultValue={"Non Pro"}
          >
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
        return (
          <Checkbox.Group
            options={clutchOptions}
            defaultValue={[]}
            onChange={(e) =>
              onTransmissionChange(e, record.vehicleCategory.code)
            }
          />
        );
      },
    },
  ];

  const tableData = [
    {
      existing: false,
      appliedFor: false,
      vehicleCategory: {
        code: "A",
        name: "Motorcycle",
        classes: [
          {
            subcode: "L1",
            description:
              "Two wheels with a maximum design speed not exceeding 50 km/h",
          },
          {
            subcode: "L2",
            description:
              "Three wheels with a maximum design speed not exceeding 50 kph",
          },
          {
            subcode: "L3",
            description:
              "Two wheels with a maximum design speed exceeding 50 kph",
          },
        ],
      },
      licenseType: "Non Pro",
      clutchType: { AT: false, MT: false },
      image:
        "https://media.zigcdn.com/media/content/2018/Oct/top-5-value-for-money-bikes-6.jpg",
    },

    {
      existing: false,
      appliedFor: false,
      vehicleCategory: {
        code: "A1",
        name: "Tricycle",
        classes: [
          {
            subcode: "L4",
            description:
              "Motorcycle with side cars with a maximum design speed exceeding 50 kph",
          },
          {
            subcode: "L5",
            description:
              "Three wheels symmetrically arranged with a maximum design speed exceeding 50 kph",
          },
          {
            subcode: "L6",
            description:
              "Four wheels whose unladen mass is not more than 350kg with maximum design speed not exceeding 45 kph",
          },
          {
            subcode: "L7",
            description:
              "Four wheels whose unladen mass is not more than 550kg with maximum design speed not exceeding 45 kph",
          },
        ],
      },
      licenseType: "Non Pro",
      clutchType: { AT: false, MT: false },
      image:
        "https://media.istockphoto.com/photos/tricycles-waiting-at-a-street-for-people-wanting-delivery-services-picture-id1227067069?k=20&m=1227067069&s=612x612&w=0&h=9SsUWutjMG2on8gptMf1wdXou_KJi6zjTMUepv-NIJE=",
    },

    {
      existing: false,
      appliedFor: false,
      vehicleCategory: {
        code: "B",
        name: "",
        classes: [
          {
            subcode: "M1",
            description:
              "Vehicles used for the carriage of passengers and comprising not more than 8 seats in addition to the driver's seat with GVW up to 5000kgs",
          },
        ],
      },
      licenseType: "Non Pro",
      clutchType: { AT: false, MT: false },
      image:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2021/05/04163108/Best-Luxury-SUV-Collage-2.jpg",
    },

    {
      existing: false,
      appliedFor: false,
      vehicleCategory: {
        code: "B1",
        name: "",
        classes: [
          {
            subcode: "M2",
            description:
              "M2 Vehicles used for the carriage of passengers, comprising more than 8 seats in addition to the driver's seat with GVW up to5000kgs.",
          },
        ],
      },
      licenseType: "Non Pro",
      clutchType: { AT: false, MT: false },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/2018_Ford_Transit_Custom_300_Base_2.0_facelift.jpg",
    },

    {
      existing: false,
      appliedFor: false,
      vehicleCategory: {
        code: "B2",
        name: "Light Commercial Vehicle",
        classes: [
          {
            subcode: "N1",
            description:
              "Vehicles used for the carriage of goods and having a GVW up to 3500kgs.",
          },
        ],
      },
      licenseType: "Non Pro",
      clutchType: { AT: false, MT: false },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nippon_Rent-A-Car_Isuzu_Elf_NJR85A.jpg",
    },
  ];

  // Functions

  const handlePermitTypeChange = (value) => {
    console.log("value is: ", value);
  };

  const handleOrganChange = (event) => {
    setIsOrganDonor(event.target.value);
  };

  const CheckboxGroup = Checkbox.Group;

  return (
    <Layout>
      <div style={{ width: "100%", alignSelf: "center" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ marginVertical: "3%", marginLeft: "5%" }}
          onClick={() => setIsVisible(true)}
        >
          Answer LTO-ADL-Form21
        </Button>
        <Modal
          title="ADL-Form21"
          visible={isVisible}
          // onOk={handleSubmit}
          onCancel={() => setIsVisible(false)}
          getContainer={false}
          keyboard={false}
          width={800}
          footer={
            <Form.Item>
              <Button key="back" onClick={() => setIsVisible(false)}>
                Return
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                form="patient_form"
                loading={loading}
              >
                Submit
              </Button>
            </Form.Item>
          }
        >
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            id="patient_form"
          >
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
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              style={{ width: "100%" }}
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input placeholder="input placeholder" />
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
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="input placeholder" />
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
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Tin"
              style={{ width: "100%" }}
              name="tin"
              rules={[{ required: true, message: "Please input your tin!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Nationality"
              style={{ width: "100%" }}
              name="nationality"
              rules={[
                { required: true, message: "Please input your nationality!" },
              ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Sex"
              style={{ width: "100%" }}
              name="gender"
              initialValue={"Male"}
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select
                // onChange={handleChange}
                style={{ width: "100%" }}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Birth Date"
              style={{ width: "100%" }}
              name="birth_date"
              rules={[{ required: true, message: "Birth Date is required!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Height"
              style={{ width: "100%" }}
              name="height"
              rules={[{ required: true, message: "Height is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Weight"
              style={{ width: "100%" }}
              name="weight"
              rules={[{ required: true, message: "Weight is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="License No."
              style={{ width: "100%" }}
              name="license_no"
              rules={[{ required: true, message: "License No. is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Civil Status"
              style={{ width: "100%" }}
              name="civil_status"
              rules={[{ required: true, message: "Civil Status is requred!" }]}
            >
              <Select
                // onChange={handleChange}
                style={{ width: "100%" }}
              >
                <Option value="Single">Single</Option>
                <Option value="Married">Married</Option>
                <Option value="Widowed">Widowed</Option>
                <Option value="Separated">Separated</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Birthplace"
              style={{ width: "100%" }}
              name="birthplace"
              rules={[{ required: true, message: "Birthplace is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Father's Name"
              style={{ width: "100%" }}
              name="father_name"
              rules={[{ required: true, message: "Father's name is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Mother's Name"
              style={{ width: "100%" }}
              name="mother_name"
              rules={[{ required: true, message: "Mother's name is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Spouse Name"
              style={{ width: "100%" }}
              name="spouse_name"
              // rules={[{ required: true, message: "Age is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Employer's Business Name"
              style={{ width: "100%" }}
              name="emp_name"
              // rules={[{ required: true, message: "Age is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Employer Tel No."
              style={{ width: "100%" }}
              name="emp_num"
              // rules={[{ required: true, message: "Age is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Employer Business Address"
              style={{ width: "100%" }}
              name="emp_address"
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
              <Input placeholder="input placeholder" />
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
              <Input placeholder="input placeholder" />
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
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Agency Code"
              style={{ width: "100%" }}
              name="agency_code"
              rules={[{ required: true, message: "Agency code is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Issue Date"
              style={{ width: "100%" }}
              name="issue_date"
              rules={[{ required: true, message: "Issue date is requred!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Expiry Date"
              style={{ width: "100%" }}
              name="expiry_date"
              rules={[{ required: true, message: "Expiry date is requred!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Divider />

            <Form.Item
              label="License Classification Applied For (LCA)"
              style={{ width: "100%" }}
              name="license_classification"
              initialValue={"st_permit"}
            >
              <Select
                onChange={handlePermitTypeChange}
                style={{ width: "100%" }}
              >
                <Option value="st_permit">Student Driver's Permit (SP)</Option>
                <Option value="drivers_license">Driver's License (DL)</Option>
                <Option value="conductors_license">
                  Conductor's License (CL)
                </Option>
              </Select>
            </Form.Item>

            {permitType === "drivers_license" && (
              <Form.Item style={{ width: "100%" }} name="driver_institution">
                <Radio.Group>
                  <Radio value={"driving_school"}>Driving School</Radio>
                  <Radio value={"instructor"}>Instructor</Radio>
                  <Radio value={"private_licensed"}>
                    Private Licensed Person with DL NO.
                  </Radio>
                </Radio.Group>
              </Form.Item>
            )}

            <Form.Item
              style={{ width: "100%" }}
              name="education_level"
              label="Highest Educational Attainment (EA)"
              rules={[{ required: true, message: "EA is requred!" }]}
            >
              <Radio.Group>
                <Radio value={"post_graduate"}>Post Graduate</Radio>
                <Radio value={"college"}>College</Radio>
                <Radio value={"high_school"}>High School</Radio>
                <Radio value={"elementary"}>Elementary</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Blood Type"
              style={{ width: "100%" }}
              name="blood_type"
              rules={[{ required: true, message: "Blood Type is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Organ Donor"
              style={{ width: "100%" }}
              name="organ_donor"
              rules={[{ required: true, message: "Organ Donor is requred!" }]}
              onChange={handleOrganChange}
            >
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>

            {isOrganDonor === "true" ? (
              <div style={{ marginBottom: "5%" }}>
                <Form.Item
                  style={{ width: "100%" }}
                  name="organs"

                  // onChange={handleOrganChange}
                >
                  <CheckboxGroup options={plainOptions} />
                </Form.Item>
              </div>
            ) : null}

            <Form.Item
              label="Eyes Color"
              style={{ width: "100%" }}
              name="eye_color"
              rules={[{ required: true, message: "Eyes color is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="Type of Application"
              style={{ width: "100%" }}
              name="application_type"
              rules={[
                { required: true, message: "Application Type is requred!" },
              ]}
            >
              <Select
                // onChange={handleChange}
                style={{ width: "100%" }}
              >
                <Option value="New">New</Option>
                <Option value="Renewal">Renewal</Option>
                <Option value="conversion">Convesion of Foreign DL</Option>

                <Option value="additional_code">
                  Additional Code or Category
                </Option>
                <Option value="change_classification">
                  Change of DL Classification
                </Option>
                <Option value="expired_dl">Expired DL with Valid FDL</Option>
                <Option value="duplicate">Duplicate</Option>
                <Option value="dropping">
                  Dropping of Category or Add'l or Removal of Driving Conditions
                </Option>
                <Option value="change_address">Change Address</Option>
                <Option value="change_civstatus">Change Civil Status</Option>
                <Option value="change_name">Change Name</Option>
                <Option value="change_birthdate">Change Birth Date</Option>
                <Option value="change_others">Change: Others</Option>
                <Option value="enhancement_dl">Enhancment of DL</Option>
                <Option value="clutch_type">Change of Clutch Type</Option>
              </Select>
            </Form.Item>

            <Divider />
            <p style={{ fontWeight: "bold", marginBottom: "5%" }}>
              Driver's License Vehicle Category
            </p>
            <Table columns={columns} dataSource={tableData} />

            <Divider />
            <p style={{ fontWeight: "bold", marginBottom: "5%" }}>Conditions</p>
            <Form.Item
              style={{ width: "100%" }}
              name="condtions"
              rules={[{ required: true, message: "Conditions is requred!" }]}
            >
              <CheckboxGroup options={conditionOptions} />
            </Form.Item>

            <Form.Item
              label="Previous Name (Fill up if your name above is different from your previous license)"
              style={{ width: "100%" }}
              name="prev_name"
              // rules={[{ required: true, message: "Age is requred!" }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
              label="HIS IS TO CERTIFY UNDER PENALTY OF PERJURY THAT THE INFORMATION I HAVE GIVEN IS TRUE AND CORRECT"
              style={{ width: "100%" }}
              name="validation_name"
              rules={[{ required: true, message: "Signature is requred!" }]}
            >
              <Input placeholder="Printed Name and Signature" />
            </Form.Item>

            <Form.Item
              label="TO BE ACCOMPLISHED BY LTO PERSONNEL ONLY"
              style={{ width: "100%" }}
              name="evaluator_name"
              rules={[
                { required: true, message: "Evaluator signature is requred!" },
              ]}
            >
              <Input placeholder="Printed Name and Signature (Evaluator)" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
}

export default FormPage;
