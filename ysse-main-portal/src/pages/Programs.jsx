import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";
import headerImg from "../assets/images/header-programs.jpg";
import "./Programs.css";

const categories = ["All", ...new Set(programs.map((p) => p.category))];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms = useMemo(() => {
    if (activeCategory === "All") return programs;
    return programs.filter((program) => program.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <PageHeader
        eyebrow="Programs"
        title="Programs & Activities"
        description="Discover the training, mentorship, and community programs YSSE offers to help youth thrive."
        image={headerImg}
        imageAlt="Group of energetic young students outdoors"
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

          {filteredPrograms.length > 0 ? (
            <motion.div
              className="card-grid"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {filteredPrograms.map((program) => (
                <motion.div key={program.id} variants={fadeUp} transition={{ duration: 0.4 }}>
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center empty-state">
              No programs are available in this category right now.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Programs;
