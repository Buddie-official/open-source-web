import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Smart Voice Mobile Application",
    image: require("@site/static/img/home_app_picture.png").default,
    description: (
      <>
Complete AI voice interaction solution! Open-source AI interaction logic, voice models, seamless firmware data transmission—all-in-one intelligent voice experience!
      </>
    ),
    link_url: "/",
  },
  {
    title: "Embedded Firmware Source Code",
    image: require("@site/static/img/home_firmware_picture.png").default,
    description: (
      <>
Full-featured customizable firmware for JieLi chips! Integrated audio protocols, compression algorithms, and system control modules.
      </>
    ),
    link_url: "/",
  },
  {
    title: "Circuit Design Schematics",
    image: require("@site/static/img/home_pcb_picture.png").default,
    description: (
      <>
Fully open PCB design! Complete circuit layouts, schematics, and BOM lists—perfect for DIY assembly, rapid prototyping, or custom hardware development!
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
        Explore Buddie's Complete Tech Stack Freely!
      </p>
      </Heading>
      <p className={clsx("text__description")}>
Circuit schematics, embedded firmware source, mobile APP code—all open access! Learn, improve, create—build your own voice interaction product starting right here!
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
