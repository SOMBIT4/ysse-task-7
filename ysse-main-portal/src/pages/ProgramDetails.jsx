import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { programs } from "../data/programs";
import "./ProgramDetails.css";

function ProgramDetails() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return (
      <section className="section program-not-found">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Program Not Found</h1>
            <p>
              Sorry, we couldn't find a program with ID "{id}". It may have
              been removed or the link may be incorrect.
            </p>
            <Button to="/programs">Back to Programs</Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section className="program-details-hero">
        <div className="container program-details-hero-inner">
          <motion.div
            className="program-details-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={program.image} alt={program.title} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="eyebrow">{program.category}</span>
            <h1>{program.title}</h1>
            <p>{program.description}</p>
            <div className="program-details-meta">
              <span>⏱ Duration: {program.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-light">
        <motion.div
          className="container program-details-body"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Program Overview</h2>
          <p>{program.fullDescription}</p>

          <div className="program-details-actions">
            <Button to="/programs" variant="outline">
              ← Back to Programs
            </Button>
            <Button to="/contact">Apply / Inquire</Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default ProgramDetails;
