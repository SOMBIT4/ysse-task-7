import { motion } from "framer-motion";
import "./PageHeader.css";

function PageHeader({ eyebrow, title, description, image, imageAlt, reverse }) {
  return (
    <section className={`page-header ${reverse ? "page-header-reverse" : ""}`}>
      <div className="page-header-glow" />
      <div className="container page-header-grid">
        <div className="page-header-text">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {image && (
          <div className="page-header-visual">
            <motion.div
              className="page-header-blob"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.div
              className="page-header-photo"
              initial={{ opacity: 0, y: 30, rotate: reverse ? 4 : -4 }}
              animate={{ opacity: 1, y: [0, -14, 0], rotate: reverse ? 4 : -4 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.25 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
            >
              <img src={image} alt={imageAlt || title} />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
