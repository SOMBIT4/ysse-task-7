import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import headerImg from "../assets/images/header-about.jpg";
import "./About.css";

const activities = [
  {
    title: "Skills Training",
    description:
      "Hands-on workshops covering digital literacy, leadership, and professional skills for young people.",
    icon: "🎓",
  },
  {
    title: "Mentorship Programs",
    description:
      "Pairing youth with experienced mentors across industries to guide their personal and career growth.",
    icon: "🤝",
  },
  {
    title: "Community Outreach",
    description:
      "Organising volunteer drives and outreach initiatives that create real impact in local communities.",
    icon: "🌍",
  },
];

const impactStats = [
  { label: "Programs Delivered", value: "Placeholder" },
  { label: "Youth Engaged", value: "Placeholder" },
  { label: "Partner Organisations", value: "Placeholder" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About YSSE"
        title="Stage of Innovation for Youth"
        description="Learn about our mission, our work, and the impact we hope to create for young people."
        image={headerImg}
        imageAlt="Group of young YSSE community members smiling together"
      />

      {/* Introduction */}
      <section className="section section-light">
        <motion.div
          className="container about-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Introduction</span>
          <h2 className="section-title">Who We Are</h2>
          <p>
            YSSE — Youth Stage for Skills &amp; Empowerment — is an
            organisation dedicated to helping young people discover their
            potential. Through structured programs, mentorship, and community
            engagement, we create a stage where youth can innovate, lead, and
            grow into confident contributors to society.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-tint">
        <div className="container mission-vision-grid">
          <motion.div
            className="mv-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Our Mission</h3>
            <p>
              To equip young people with practical skills, mentorship, and
              opportunities that empower them to lead meaningful change in
              their communities and careers.
            </p>
          </motion.div>
          <motion.div
            className="mv-card alt"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Our Vision</h3>
            <p>
              A generation of empowered, innovative, and socially responsible
              youth leaders driving positive change across the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Our Core Activities</h2>
          </motion.div>

          <div className="activities-grid">
            {activities.map((activity, index) => (
              <motion.div
                className="activity-card"
                key={activity.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="activity-icon">{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section section-tint">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Our Impact</span>
            <h2 className="section-title">Achievements So Far</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 44px" }}>
              Figures below are placeholders until verified official data is
              published.
            </p>
          </motion.div>

          <div className="impact-grid">
            {impactStats.map((stat) => (
              <motion.div
                className="impact-card"
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="about-cta">
        <div className="container about-cta-content">
          <h2>Want to Get Involved?</h2>
          <p>
            Explore our programs or reach out to learn how you can join the
            YSSE community.
          </p>
          <div className="about-cta-actions">
            <Button to="/programs" variant="light">
              Explore Programs
            </Button>
            <Button to="/contact" variant="outline-light">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
