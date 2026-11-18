import { motion } from "framer-motion";
import "./NoticeCard.css";

function NoticeCard({ notice, onReadMore }) {
  const formattedDate = new Date(notice.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article
      className="notice-card"
      whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(6,98,55,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="notice-card-top">
        <span className="notice-category">{notice.category}</span>
        <span className="notice-date">{formattedDate}</span>
      </div>
      <h3 className="notice-title">{notice.title}</h3>
      <p className="notice-description">{notice.description}</p>
      <button className="notice-readmore" onClick={() => onReadMore(notice)}>
        Read More <span aria-hidden="true">&rarr;</span>
      </button>
    </motion.article>
  );
}

export default NoticeCard;
