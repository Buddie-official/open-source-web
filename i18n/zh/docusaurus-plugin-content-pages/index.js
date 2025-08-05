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
import "./css/custom.css"; // 自定义样式文件

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary",
        styles.heroBanner,
        styles.Headercolor,
      )}
    >
      <div className={clsx("container")}>
        <Heading as="h1" className="hero__title">
          {siteConfig.customFields.homepageContent.en.title}
        </Heading>
        <p className="hero__subtitle">
          打造更懂你的语音伙伴
        </p>
        <p className="hero__subtitle">
Buddie 是一个开源AI语音软硬件解决方案，致力于帮助每个人轻松定制专属的AI伙伴。让他听你所言，思你所想，与你共同成长。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/TechnicalDocs/intro"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

/*--------------------------------------------------*/
/*---------------- 工作展示 ------------------------*/
/*--------------------------------------------------*/
function HomepageWorkDisplay() {
  return (
    <div className={styles.workShow}>
      <div className={styles.workShowTitle}>
        <Heading as="h2" className={clsx("hero_othertitle")}>
          使用buddie创造专属于你的'Her'！
        </Heading>
      </div>
      <div className={styles.workCardrow}>
        <div className={styles.workCard}>
          <div className={clsx("card__text")}>
            <cardTitletext className={clsx("card__tile")}>
              全场景 AI 语音软硬件解决方案
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
Buddie专注于 AI 语音交互技术，为智能音箱、儿童可穿戴设备等多样化的硬件产品，提供从软件到硬件的垂直整合方案。我们确保每一次交互都兼具智能、流畅与安全。
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/1-home.png"
                alt="Hardware Solution"
                style={{
                  height: "100%",
                  margin: "0 auto",
                  aspectRatio: "1 / 1",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "12px",
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className={styles.workCard}>
          <div className={styles.cardText}>
            <cardTitletext className={clsx("card__tile")}>
              创新交互引擎，赋能精准服务   
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
Buddie搭载自主研发的新一代交互模型，深度集成MCP服务引擎，为用户提供高度个性化的智能交互体验。您可以根据具体需求灵活定制功能模块，打造专属于您的智能助手。
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/MCP.png"
                alt="Hardware Solution"
                style={{
                  height: "100%",
                  margin: "0 auto",
                  aspectRatio: "1 / 1",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "12px",
                }}
              ></img>
            </div>
          </div>
         </div>
        <div className={styles.workCard}>
          <div className={styles.cardText}>
            <cardTitletext className={clsx("card__tile")}>
              自动化固件开发平台，支持跨平台快速部署
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
我们打造了专业的嵌入式固件自动化开发平台，实现从代码编写、构建编译到多平台部署的全流程自动化。让开发者轻松适配各类芯片与硬件平台，将固件开发效率提升数倍，显著缩短产品上市周期。
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/autocode.png"
                alt="Hardware Solution"
                style={{
                  height: "100%",
                  margin: "0 auto",
                  aspectRatio: "1 / 1",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "12px",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*--------------------------------------------------*/
/*---------------- 产品展示 ------------------------*/
/*--------------------------------------------------*/
function HomepageProductDisplay() {
  return (
    <div className={styles.productShow}>
      <Heading as="h2" className={clsx("hero_othertitle")} style={{ flex: 1 }}>
        初代硬件产品-BUDDIE AI 语音交互耳机
      </Heading>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          flex: 1,
          width: "70%",
        }}
      >
        {/* 包裹容器控制比例 */}
        <div
          style={{
            width: "60%",
            aspectRatio: "16 / 9",
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            marigin: "50 auto",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/ejEINaEQieY"
            title="Buddie Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "0",
            }}
          ></iframe>
        </div>
      </div>
    </div>
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
      <HomepageWorkDisplay />
      <HomepageProductDisplay />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
