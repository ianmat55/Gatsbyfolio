/** @jsx jsx */
import { jsx } from "theme-ui";

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
};

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        paddingTop: 0,
        paddingBottom: "2rem",
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
      {children}
    </div>
  </a>
);

export default ProjectCard;
