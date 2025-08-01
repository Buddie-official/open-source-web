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
          We are committed to building intelligent voice interaction systems 
          for the AGI era, offering complete technical solutions and integrated
          hardware-software codesign.
        </p>
        <p className="hero__subtitle">
          As an open developer platform, we promote the real-world application
          of voice technologies and encourage collaboration to explore new
          possibilities in the AGI era.
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
          Creating an Ecosystem for AI-Powered Voice Interaction
        </Heading>
      </div>
      <div className={styles.workCardrow}>
        <div className={styles.workCard}>
          <div className={styles.cardText}>
            <cardTitletext className={clsx("card__tile")}>
              Versatile AI Voice Hardware Solution{" "}
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
              We focus on the field of AI voice interaction, developing a
              variety of smart terminal products such as smart speakers and
              children’s safety wristbands. Through integrated hardware and
              software design, we’re dedicated to building smart and secure
              products that users can trust.
            </cardText>
            <div className={styles.cardImage}>
              <img
                src="img/products.png"
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
              Integration of MCP services            
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
By integrating speech recognition, content summarization, MCP services, and language models, we have developed a practical intelligent interaction system that covers the full pipeline from voice input to output.
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
              Automated Firmware Development Platform
            </cardTitletext>
          </div>
          <div className={styles.cardDescription}>
            <cardText className={clsx("card__text")}>
We have built an automated firmware development platform for embedded devices, supporting an integrated workflow from code editing and building to multi-platform deployment.
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
