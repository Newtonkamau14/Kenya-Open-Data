import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Intuitive Interface",
    description: (
      <>
        Easily navigate through counties and constituencies with our
        user-friendly platform.{" "}
      </>
    ),
  },
  {
    title: "Data-Driven Insights",
    description: (
      <>
        Access detailed information on population, demographics, and electoral
        data for each county and constituency.
      </>
    ),
  },
  {
    title: "Powerful API",
    description: (
      <>
        Utilize our robust API to integrate county and constituency data into
        your own applications.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
