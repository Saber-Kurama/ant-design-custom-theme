import React, { Component } from "react";
import { injectIntl } from "react-intl";
import classNames from 'classnames'
import { Row, Col, Menu, Affix, Tooltip, Avatar, Dropdown } from "antd";

import SiteContext from '../Layout/SiteContext';
import Article from './Article'


class MainContent extends Component {
  static contextType = SiteContext;

  // 渲染文档贡献者
  renderContributors() {

  }

  // 渲染主要内容
  renderMainContent({ theme, setIframeTheme }) {
    const { localizedPageData, demos, location } = this.props;
    // if (location.pathname.includes('components/overview')) {
    //   return (
    //     <ComponentOverview
    //       {...this.props}
    //       doc={localizedPageData}
    //       componentsData={getModuleData(this.props).filter(
    //         ({ meta }) => meta.category === 'Components',
    //       )}
    //     />
    //   );
    // }
    if (demos) {
      return (
        <>
        <div>demos----</div>
          {/* <ComponentDoc
            {...this.props}
            doc={localizedPageData}
            demos={demos}
            theme={theme}
            setIframeTheme={setIframeTheme}
          />
          {this.renderContributors()} */}
        </>
      );
    }
    return (
      <>
      <div>Article----</div>
        <Article {...this.props} content={localizedPageData} />
        {/* {this.renderContributors()} */}
      </>
    );
  }

  render() {
    console.log('renderMainContentrenderMainContentrenderMainContentrenderMainContent')
    const { demos, location } = this.props;
    const { isMobile, theme, setIframeTheme } = this.context;
    const mainContainerClass = classNames('main-container', {
      'main-container-component': !!demos,
    });

    return (
      <div className="main-wrapper">
        <div>这是一个MainContent</div>
        <Row>
          <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
            asdasd
            <section className={mainContainerClass}>
              {this.renderMainContent({ theme, setIframeTheme })}
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(MainContent);
