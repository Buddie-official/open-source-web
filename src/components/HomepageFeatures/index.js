import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Full Mobile Integration',
    image: require('@site/static/img/home_app_picture.png').default,
    description: (
      <>
        A complete mobile solution for intelligent voice interaction — with open-source AI logic, speech models, and a plug-and-play workflow connecting hardware and app.
      </>
    ),
    link_url: '/',
  },
  {
    title: 'Customizable Firmware',
    image: require('@site/static/img/home_firmware_picture.png').default,
    description: (
      <>
        A full-featured, customizable firmware based on JieLi chips — including audio protocols, compression algorithms, and system control. Seamlessly aligned with the PCB configuration for easy adaptation and expansion.
      </>
    ),
    link_url: '/',
  },
  {
    title: 'Open Hardware Design',
    image: require('@site/static/img/home_pcb_picture.png').default,
    description: (
      <>
        Full access to PCB layouts, schematics, and BOM files — ready for DIY assembly, rapid prototyping, or custom hardware projects.
      </>
    ),
    link_url: '/',
  },
];

function Feature({image, title, description, link_url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={image} className={styles.featureImage} alt={title} />
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
          Goto Docs
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
