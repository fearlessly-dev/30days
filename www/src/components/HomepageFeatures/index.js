import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Core Concepts',
    Svg: require('@site/static/img/blocks.svg').default,
    description: (
      <>
        Learn the building blocks and core terminology of this technology.
        Complete the quickstart, setup dev environment.
      </>
    ),
  },
  {
    title: 'Concepts in Practice',
    Svg: require('@site/static/img/action.svg').default,
    description: (
      <>
        Learn to put concepts to work or understand practical usage by example. 
        Complete short tutorials and activities.
      </>
    ),
  },
  {
    title: 'Tools & Tips',
    Svg: require('@site/static/img/practices.svg').default,
    description: (
      <>
        Explore developer tools and best practices for making workflows efficient and experiences delightful.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
