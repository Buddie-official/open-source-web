import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "移动端应用",
    image: require("@site/static/img/home_app_picture.png").default,
    description: (
      <>
一个面向智能AI语音交互的完整移动端解决方案，包含开源的 AI 交互逻辑、语音模型，以及与耳机固件的数据传输方式。
      </>
    ),
    link_url: "/",
  },
  {
    title: "嵌入式固件源码",
    image: require("@site/static/img/home_firmware_picture.png").default,
    description: (
      <>
基于杰理芯片的全功能可定制固件。内含音频协议、压缩算法与系统控制模块，固件设计与 PCB 配置无缝对齐，便于适配和扩展。
      </>
    ),
    link_url: "/",
  },
  {
    title: "电路设计图",
    image: require("@site/static/img/home_pcb_picture.png").default,
    description: (
      <>
完全开放的 PCB 设计。提供电路板布局图、原理图和 BOM 物料清单。适用于 DIY 装配、快速打样或个性化硬件开发。
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
        Buddie 的硬件与软件，现已开源
      </p>
      </Heading>
      <p className={clsx("text__description")}>
你可以自由访问 Buddie 的完整技术栈，包括耳机的电路设计图、嵌入式固件源码，以及移动端应用的全部代码。
      </p>
      <p className={clsx("text__description")}>
我们希望这些资源能帮助开发者学习、改进，甚至打造属于自己的语音交互产品。
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
