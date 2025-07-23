import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Mobile Application",
    image: require("@site/static/img/home_app_picture.png").default,
    description: (
      <>
        A complete mobile solution for intelligent AI voice interaction,
        including open-source AI interaction logic, voice models, and earphone
        firmware data transmission methods.
      </>
    ),
    link_url: "/",
  },
  {
    title: "Embedded Firmware Source Code",
    image: require("@site/static/img/home_firmware_picture.png").default,
    description: (
      <>
        A customizable firmware based on JieLi SoC with audio protocols,
        compression algorithms, and system control modules.{" "}
      </>
    ),
    link_url: "/",
  },
  {
    title: "Circuit Design",
    image: require("@site/static/img/home_pcb_picture.png").default,
    description: (
      <>
        Fully open-source PCB design. Includes PCB layout files, schematic
        diagrams, and a complete BOM . Ideal for DIY , quick prototyping, and
        custom hardware development.{" "}
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
        Buddie's hardware and software have been open-sourced
      </p>
      </Heading>
      <p className={clsx("text__description")}>
          Buddie’s full technology stack is open and accessible — from earbud
          schematics and embedded firmware to the complete mobile application
          codebase.
      </p>
      <p className={clsx("text__description")}>
          We hope these resources help developers learn, improve, and even
          create their own voice interaction products.
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
