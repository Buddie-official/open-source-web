import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "智能语音移动端APP",
    image: require("@site/static/img/home_app_picture.png").default,
    description: (
      <>
完整的 AI 语音交互解决方案，开源 AI 交互逻辑、语音模型，无缝对接嵌入式固件数据传输——一站式智能语音体验！
      </>
    ),
    link_url: "/",
  },
  {
    title: "嵌入式固件源码",
    image: require("@site/static/img/home_firmware_picture.png").default,
    description: (
      <>
杰理芯片全功能定制固件。集成音频协议、压缩算法、系统控制模块，与 PCB 完美匹配，轻松适配扩展！
      </>
    ),
    link_url: "/",
  },
  {
    title: "电路设计图",
    image: require("@site/static/img/home_pcb_picture.png").default,
    description: (
      <>
完全开放的 PCB 设计！电路布局图、原理图、BOM 清单全公开，DIY 装配、快速打样、个性化开发，随心所欲！
      </>
    ),
    link_url: "/",
  },
];

function Feature({ image, title, description, link_url }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link className="github_button" to={link_url}>
          Goto Docs
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Heading as="h2" className={clsx("hero_othertitle")}>
      <p className={styles.hero_othertitle}>
        自由探索 Buddie 完整技术栈！
      </p>
      </Heading>
      <p className={clsx("text__description")}>
电路设计图、嵌入式固件源码、移动端APP代码全部开放！学习、改进、创造，打造你的专属语音交互产品，就从这里开始！
      </p>
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
