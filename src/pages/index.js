// 文件名为 index 会直接映射到 这一级的根目录 
// 引入工具函数和组件
import clsx from 'clsx';  // 用于动态组合 className，比如 clsx('a', condition && 'b')
import Link from '@docusaurus/Link';  // Docusaurus 提供的路由跳转组件（带路由预加载）
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';  // 用于访问 siteConfig（站点标题、副标题等）
import Layout from '@theme/Layout'; // Docusaurus 通用页面布局组件
import HomepageFeatures from '@site/src/components/HomepageFeatures'; // 你自己定义的首页功能组件模块（路径可自改）

// 页面头部使用的标题组件和样式
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
