import React from "react";
import UserLayout from "../../../layout/UserLayout";
import { Card, Col, Row } from "antd";
import "./Styles.css";
function TechStack() {
  return (
    <UserLayout>
      <div className="tech_container">
        <div className="wrapper">
          <p className="title">Technologies Used</p>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="React JS"
                  bordered={false}
                  style={{
                    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                  }}
                >
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces based on UI components. It is
                  maintained by Meta and a community of individual developers
                  and companies.
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Firebase"
                  bordered={false}
                  style={{
                    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                  }}
                >
                  Firebase is a development platform that provides a multitude
                  of features from hosting to database to analytics to
                  authentication and much more.
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Antd"
                  bordered={false}
                  style={{
                    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                  }}
                >
                  Ant Design is a React UI library that has a plethora of
                  easy-to-use components that are useful for building elegant
                  user interfaces. Created by Chinese conglomerate Alibaba, Ant
                  Design is used by several big names: Alibaba (of course),
                  Tencent, Baidu, and more.
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default TechStack;
