import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '完整的移动端配套',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        一套完整的移动端语音交互系统：
        开源 AI 逻辑、语音模型框架与通信流程，
        开箱即用，灵活集成到你的智能设备。
      </>
    ),
    link_url: '/',
  },
  {
    title: '可自定义的固件系统',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        基于杰理芯片的一整套功能完善、可定制的固件，涵盖音频协议、压缩算法与系统控制逻辑，并与 PCB 配置深度匹配，便于快速移植与功能扩展。
      </>
    ),
    link_url: '/',
  },
  {
    title: '开放的硬件设计',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        全面开放 PCB 布局图、原理图与 BOM 表，适用于 DIY 装配、快速原型设计或定制硬件开发。
      </>
    ),
    link_url: '/',
  },
];

function Feature({Svg, title, description, link_url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="github_button"
          to = {link_url}
        >
          查看文档
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
