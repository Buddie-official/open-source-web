// 文件名为 index 会直接映射到 这一级的根目录
// 引入工具函数和组件
import clsx from "clsx"; // 用于动态组合 className，比如 clsx('a', condition && 'b')
import Link from "@docusaurus/Link"; // Docusaurus 提供的路由跳转组件（带路由预加载）
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; // 用于访问 siteConfig（站点标题、副标题等）
import Layout from "@theme/Layout"; // Docusaurus 通用页面布局组件
import HomepageFeatures from "@site/src/components/HomepageFeatures"; // 你自己定义的首页功能组件模块（路径可自改）

// 页面头部使用的标题组件和样式
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import "@site/src/css/custom.css"; // 自定义样式文件

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
          Build the buddie that gets you.
        </p>
        <p className="hero__subtitle">
          Buddie is an open-source toolkit to build your own AI voice companion. Create a partner that's truly in sync with you—listening, learning, and growing by your side.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/TechnicalDocs/intro"
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
          Craft your perfect 'Her' with buddie!
        </Heading>
      </div>
      <div className={styles.workCardrow}>
        <div className={styles.workCard}>
          <div className={styles.cardText}>
            <cardTitletext className={clsx("card__tile")}>
              End-to-End AI Voice Solutions{" "}
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
We specialize in conversational AI. By seamlessly merging our proprietary software with custom-built hardware, we deliver vertically integrated solutions for a diverse range of smart devices.
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/1-home.png"
                alt="Hardware Solution"
                style={{
                  width: "100%",
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
              Innovative Interaction Engine for Precision Services     
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
Powered by buddie's proprietary interaction model and seamlessly integrated MCP service engine, you get precision-driven AI that adapts to your unique requirements. 
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/MCP.png"
                alt="Hardware Solution"
                style={{
                  width: "100%",
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
              Automated Firmware Platform. Deploy anywhere instantly
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
Our embedded firmware automation platform revolutionizes development with end-to-end workflow automation. delivering up to 10x faster development cycles and dramatically reduced time-to-market.
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/autocode.png"
                alt="Hardware Solution"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  objectFit: "contain",
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
        BUDDIE: Our First-Generation AI-Powered Voice Earbud
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
