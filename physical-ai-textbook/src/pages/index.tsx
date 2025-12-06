import {useEffect, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const chapters = [
  {title: '01 · Systems Thinking', copy: 'Agentic loops, safeguards, evaluation, and human-in-the-loop checks.'},
  {title: '02 · Perception', copy: 'Multimodal sensing, calibration, and fusion for reliable state estimation.'},
  {title: '03 · Planning & Control', copy: 'Task planners, motion stacks, constraints, and latency-aware control.'},
  {title: '04 · Tooling & Memory', copy: 'APIs, retrieval, and memory graphs to keep agents grounded.'},
  {title: '05 · Shipping & Observability', copy: 'Edge deployment, monitoring, fail-safes, and rollback playbooks.'},
  {title: '06 · Field Ops', copy: 'Humanoid assembly, testing cadences, and recovery drills for the real world.'},
];

const signals = [
  {title: 'Built for builders', copy: 'Straight to implementation with schematics, code, and checklists.'},
  {title: 'Agentic + physical', copy: 'Treat models, sensors, and actuators as one cohesive stack.'},
  {title: 'Production bias', copy: 'Defaults favor observability, safety, and repeatability.'},
];

const blogAndSocial = [
  {
    title: 'Lab notes & blog',
    copy: 'Field reports, experiments, and build logs from the textbook in motion.',
    href: '/blog',
  },
  {
    title: 'GitHub · adeelmaheen',
    copy: 'Open-source agentic utilities, robotics snippets, and sample projects.',
    href: 'https://github.com/adeelmaheen',
  },
  {
    title: 'X · @MaheenA77811',
    copy: 'Day-to-day build threads, release drops, and rapid progress updates.',
    href: 'https://twitter.com/MaheenA77811',
  },
  {
    title: 'LinkedIn · Maheen Arif',
    copy: 'Let’s collaborate on launches, workshops, and partner builds.',
    href: 'https://linkedin.com/in/maheen-arif-a929412b6/',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  useEffect((): (() => void) => {
    document.body.classList.add('home-gradient');
    return () => {
      document.body.classList.remove('home-gradient');
    };
  }, []);
  return (
    <Layout
      title={`Maheen Arif — ${siteConfig.title}`}
      description="Agentic AI textbook for full-stack humanoid robotics builders.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.badge}>Maheen Arif · Full Stack Agentic AI Developer</div>
            <Heading as="h1" className={styles.heroTitle}>
              Build tangible AI systems. From model to movement.
            </Heading>
            <p className={styles.heroSubtitle}>
              A bold, field-tested textbook that fuses agentic AI patterns with humanoid robotics. Crafted to help
              you ship reliable embodied systems faster.
            </p>
            <div className={styles.ctaRow}>
              <Link className={clsx('button button--lg', styles.primary)} to="/docs/intro">
                Start reading
              </Link>
              <Link className={clsx('button button--lg', styles.ghost)} to="/blog">
                Read the lab notes
              </Link>
            </div>
            <div className={styles.meta}>420+ pages · Pragmatic code & schematics · Studio-tested workflows</div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardBadge}>Author’s Edition</span>
              <span className={styles.cardYear}>2024</span>
            </div>
            <div className={styles.cardTitle}>Agentic AI: From Model to Movement</div>
            <div className={styles.cardBody}>
              <p>Designed for practitioners who balance latency, safety, and reliability when bits meet atoms.</p>
              <ul>
                <li>Agent architectures with control constraints</li>
                <li>Edge deployment patterns and observability</li>
                <li>Launch playbooks for humanoid robotics</li>
              </ul>
            </div>
            <Link className={styles.cardLink} to="/docs/intro">
              Preview a chapter →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Inside the textbook</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Chapters that compound into shippable builds
            </Heading>
            <p className={styles.sectionSubtitle}>
              Each part ends with a usable artifact—calibration routines, evaluation harnesses, tool use, and launch
              checklists for embodied AI.
            </p>
          </div>
          <div className={styles.grid}>
            {chapters.map((item) => (
              <div key={item.title} className={styles.card}>
                <div className={styles.cardHeading}>{item.title}</div>
                <p className={styles.cardCopy}>{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Built for practitioners</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Agentic, embodied, production-focused
            </Heading>
            <p className={styles.sectionSubtitle}>
              No fluff—just the guardrails and patterns Maheen uses to take an idea from prompt to robot-ready release.
            </p>
          </div>
          <div className={styles.signalGrid}>
            {signals.map((item) => (
              <div key={item.title} className={styles.signalCard}>
                <div className={styles.signalTitle}>{item.title}</div>
                <p className={styles.signalCopy}>{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={clsx(styles.section, styles.blogSection)} id="blog">
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Personal blog & social</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Follow the builds and drop into the community
            </Heading>
            <p className={styles.sectionSubtitle}>
              Progress threads, deep dives, and release notes from Maheen Arif. Stay close to the experiments shaping
              the textbook.
            </p>
          </div>
          <div className={styles.blogGrid}>
            {blogAndSocial.map((item) => (
              <a
                key={item.title}
                className={styles.blogCard}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <div className={styles.blogTitle}>{item.title}</div>
                <p className={styles.blogCopy}>{item.copy}</p>
                <span className={styles.blogLink}>Visit →</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
