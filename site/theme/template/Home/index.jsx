import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Typography } from "antd";
import Banner from "./Banner";
import RecommendPage from "./RecommendPage";
import "./index.less";

const { Title } = Typography;

function getStyle() {
  return `
    .rc-footer-container {
      padding-left: 0;
      padding-right: 0;
    }

    .rc-footer-columns {
      max-width: 1208px;
      margin: 0 auto;
    }
  `;
}

const BlockContent = ({ title, children, extra }) => (
  <div className="home-block-content">
    <Title level={2} style={{ fontWeight: "lighter", color: "#314659" }}>
      {title}

      {extra && <div className="home-block-content-extra">{extra}</div>}
    </Title>
    {children}
  </div>
);

const Home = (props) => {
  const { location } = props;
  return (
    <div className="home-container">
      <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
      <Banner location={location} />
      {/* <div style={{ maxWidth: 1256, margin: "0 auto" }}>
        <BlockContent title={<FormattedMessage id="app.home.recommend" />}>
          <RecommendPage />
        </BlockContent>
      </div> */}
      这是一个首页
    </div>
  );
};

export default Home;
