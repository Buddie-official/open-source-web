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
          我们致力于打造面向 AGI 时代的智能语音交互系统，提供完整的技术方案、软硬件协同设计。
        </p>
        <p className="hero__subtitle">
作为一个开放的开发者平台，我们不仅推动技术的普及与落地，也鼓励开发者之间的协作、分享与交流，共同探索通用人工智能背景下的语音交互新范式。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/QuickStart/"
          >
            Quick Start
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
          打造 AI 语音交互生态圈
        </Heading>
      </div>
      <div className={styles.workCardrow}>
        <div className={styles.workCard}>
          <div className={clsx("card__text")}>
            <cardTitletext className={clsx("card__tile")}>
              多场景 AI 语音交互硬件解决方案
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
我们专注于 AI 语音交互领域，打造涵盖智能音箱、儿童护手环等多种形态的智能终端产品。通过软硬件一体化设计，我们致力于提供既智能又安全的用户体验。
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/products.png"
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
              融合 MCP 服务能力的多模态智能交互系统       
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
通过语音识别、内容摘要、MCP 服务与对话模型集成，我们打造了一套可落地的智能交互系统，覆盖从语音输入到语义输出的完整链路，适用于办公协作、客户服务与知识管理等多种场景。
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
我们构建了一套面向嵌入式设备的自动化固件开发平台，支持从代码编辑、构建到多平台部署的一体化流程。通过模块化架构与脚本自动化，用户可快速适配不同芯片与硬件平台，大幅提升开发效率与交付速度。
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
