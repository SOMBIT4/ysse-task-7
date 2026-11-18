import { motion } from "framer-motion";
import Button from "./Button";
import "./ProgramCard.css";

function ProgramCard({ program }) {
  return (
    <motion.article
      className="program-card"
      whileHover={{ y: -8, boxShadow: "0 20px 44px rgba(6,98,55,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="program-card-image">
        <img src={program.image} alt={program.title} />
      </div>
      <div className="program-card-body">
        <span className="program-category">{program.category}</span>
        <h3 className="program-title">{program.title}</h3>
        <p className="program-description">{program.description}</p>
        <div className="program-meta">
          <span>⏱ {program.duration}</span>
        </div>
        <Button to={`/programs/${program.id}`} variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </motion.article>
  );
}

export default ProgramCard;
