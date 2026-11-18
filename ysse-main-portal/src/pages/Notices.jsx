import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import NoticeCard from "../components/NoticeCard";
import { notices } from "../data/notices";
import headerImg from "../assets/images/header-notices.jpg";
import "./Notices.css";

const categories = ["All", ...new Set(notices.map((n) => n.category))];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Notices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotices = useMemo(() => {
    if (activeCategory === "All") return notices;
    return notices.filter((notice) => notice.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <PageHeader
        eyebrow="Notices"
        title="Announcements & Updates"
        description="Stay informed about YSSE's latest internships, events, workshops, and recruitment opportunities."
        image={headerImg}
        imageAlt="Students walking together on campus"
        reverse
      />

      <section className="section section-light">
        <div className="container">
          <div className="notice-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-chip ${activeCategory === category ? "filter-chip-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredNotices.length > 0 ? (
            <motion.div
              className="card-grid"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {filteredNotices.map((notice) => (
                <motion.div key={notice.id} variants={fadeUp} transition={{ duration: 0.4 }}>
                  <NoticeCard notice={notice} onReadMore={setSelectedNotice} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center empty-state">
              No notices are available in this category right now.
            </p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            className="notice-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              className="notice-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="notice-modal-close" onClick={() => setSelectedNotice(null)}>
                ×
              </button>
              <span className="notice-category">{selectedNotice.category}</span>
              <h3>{selectedNotice.title}</h3>
              <p className="notice-modal-date">
                {new Date(selectedNotice.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>{selectedNotice.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Notices;
