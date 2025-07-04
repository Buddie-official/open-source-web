// 文件名为 index 会直接映射到 这一级的根目录
// 引入工具函数和组件
import clsx from "clsx"; // 用于动态组合 className，比如 clsx('a', condition && 'b')
import Link from "@docusaurus/Link"; // Docusaurus 提供的路由跳转组件（带路由预加载）
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; // 用于访问 siteConfig（站点标题、副标题等）
import Layout from "@theme/Layout"; // Docusaurus 通用页面布局组件
import HomepageFeatures from "./HomepageFeatures"; // 你自己定义的首页功能组件模块（路径可自改）

// 页面头部使用的标题组件和样式
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.customFields.homepageContent.zh.title}
        </Heading>
        <p className="hero__subtitle">
            Buddie 是一款已正式发布的智能耳机产品。<br />
            我们全面开放其硬件设计、固件代码与移动端 App。<br />
            这是一个面向未来的人机语音交互开源项目，支持用户自由学习、修改与拓展。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/QuickStart/"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
        <iframe
          style={{ borderRadius: '12px' }}  // 👈 设置圆角
          width="30%"
          height="400"
          src="https://www.youtube.com/embed/ejEINaEQieY"
          title="Buddie Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
