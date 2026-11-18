import { motion } from "framer-motion";
import Button from "../components/Button";
import ProgramCard from "../components/ProgramCard";
import NoticeCard from "../components/NoticeCard";
import { programs } from "../data/programs";
import { notices } from "../data/notices";
import heroImg1 from "../assets/images/hero-1.jpg";
import heroImg2 from "../assets/images/hero-2.jpg";
import heroImg3 from "../assets/images/hero-3.jpg";
import "./Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Home() {
  const featuredPrograms = programs.slice(0, 3);
  const latestNotices = notices.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-content">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to YSSE
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Empowering Youth, <span>Building Tomorrow's Leaders</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              YSSE — Stage of Innovation — connects young people with the
              skills, mentorship, and opportunities they need to grow into
              confident leaders and changemakers.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button to="/programs" variant="primary">
                Explore Programs
              </Button>
              <Button to="/contact" variant="outline">
                Get Involved
              </Button>
            </motion.div>
          </div>

          <div className="hero-visual">
            <motion.div
              className="hero-photo hero-photo-1"
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: [0, -16, 0], rotate: -6 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.15 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
            >
              <img src={heroImg1} alt="YSSE youth community members" />
            </motion.div>

            <motion.div
              className="hero-photo hero-photo-2"
              initial={{ opacity: 0, y: 40, rotate: 4 }}
              animate={{ opacity: 1, y: [0, -14, 0], rotate: 4 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
            >
              <img src={heroImg2} alt="Students engaged in a YSSE learning session" />
            </motion.div>

            <motion.div
              className="hero-photo hero-photo-3"
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              animate={{ opacity: 1, y: [0, -12, 0], rotate: -3 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.45 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              }}
            >
              <img src={heroImg3} alt="YSSE mentorship and leadership session" />
            </motion.div>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.7 },
                scale: { duration: 0.5, delay: 0.7 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
              }}
            >
              <span className="hero-badge-number">1000+</span>
              <span className="hero-badge-label">Youth Empowered</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About YSSE Preview */}
      <section className="section section-light">
        <div className="container about-preview">
          <motion.div
            className="about-preview-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">About YSSE</span>
            <h2 className="section-title">Who We Are</h2>
            <p>
              YSSE (Youth Stage for Skills &amp; Empowerment) is dedicated to
              nurturing young talent through hands-on training, mentorship,
              and community-driven programs. We believe every young person
              deserves the stage to innovate, lead, and grow.
            </p>
            <Button to="/about" variant="outline">
              Learn More
            </Button>
          </motion.div>
          <motion.div
            className="about-preview-visual"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-preview-card">
              <h3>5+ Years</h3>
              <p>Supporting youth development</p>
            </div>
            <div className="about-preview-card alt">
              <h3>1000+</h3>
              <p>Youth engaged (sample figure)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section section-tint">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 44px" }}>
              Explore a few of the opportunities YSSE offers to help young
              people build real-world skills.
            </p>
          </motion.div>

          <motion.div
            className="card-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {featuredPrograms.map((program) => (
              <motion.div key={program.id} variants={fadeUp} transition={{ duration: 0.5 }}>
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center" style={{ marginTop: 40 }}>
            <Button to="/programs">See All Programs</Button>
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Stay Updated</span>
            <h2 className="section-title">Latest Notices</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 44px" }}>
              Catch up on the latest announcements, events, and opportunities
              from YSSE.
            </p>
          </motion.div>

          {latestNotices.length > 0 ? (
            <motion.div
              className="card-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {latestNotices.map((notice) => (
                <motion.div key={notice.id} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <NoticeCard notice={notice} onReadMore={() => {}} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center empty-state">No notices available right now.</p>
          )}

          <div className="text-center" style={{ marginTop: 40 }}>
            <Button to="/notices">View All Notices</Button>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <div className="container cta-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Journey With YSSE?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join a program, attend an event, or reach out to learn how you can
            get involved with YSSE today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button to="/contact" variant="light">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
