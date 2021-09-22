import React from "react";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import Header from './Header';
import SiteContext from "./SiteContext";
import cnLocale from "../../zh-CN";
// import * as utils from '../utils';

if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('../../static/style')
    require('antd/dist/antd.css')
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;

    // const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;
    // 默认先修改成 中文
    const appLocale = cnLocale;

    this.state = {
      appLocale,
      theme: "default",
      // setTheme: this.setTheme,
      direction: "ltr",
      // setIframeTheme: this.setIframeTheme,
    };
  }

  render() {
    const { children, helmetContext = {}, ...restProps } = this.props;
    const { appLocale, direction, isMobile, theme, setTheme, setIframeTheme } =
      this.state;
    const title =
      appLocale.locale === "zh-CN"
        ? "Ant Design - 一套企业级 UI 设计语言和 React 组件库"
        : "Ant Design - The world's second most popular React UI framework";
    const description =
      appLocale.locale === "zh-CN"
        ? "基于 Ant Design 设计体系的 React UI 组件库，用于研发企业级中后台产品。"
        : "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises";

    console.log("children", children);
    return (
      <>
        <SiteContext.Provider
          value={{ isMobile, direction, theme, setTheme, setIframeTheme }}
        >
          <IntlProvider
            locale={appLocale.locale}
            messages={appLocale.messages}
            defaultLocale="en-US"
          >
            <ConfigProvider
              locale={appLocale.locale === "zh-CN" ? zhCN : null}
              direction={direction}
            >
              <Header {...restProps} changeDirection={this.changeDirection} />
              {children}
            </ConfigProvider>
          </IntlProvider>
        </SiteContext.Provider>
      </>
    );
  }
}
