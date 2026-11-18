import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Button.css";

function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
}) {
  const className = `btn btn-${variant} btn-${size}`;

  const motionProps = {
    whileHover: { scale: 1.04, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: "inline-block" }}>
        <Link to={to} className={className}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: "inline-block" }}>
        <a href={href} className={className} target="_blank" rel="noreferrer">
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
