import type { JSX } from "react";
import "./App.css";

import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaLaravel,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  SiDart,
  SiSwift,
  SiMongodb,
  SiMysql,
  SiHeroku,
  SiNotion,
  SiSpotify,
  SiOpenai,
} from "react-icons/si";

import "font-awesome/css/font-awesome.min.css";

import pfp from "./assets/pfp.jpg";
import cl from "./assets/CurrentLocation.png";
import or from "./assets/Onride.png";
import dmv from "./assets/DriverManageVehicle.png";
import s from "./assets/Scan.png";
import l from "./assets/Login.jpg";
import p from "./assets/Profile.png";
import Luse from "./assets/Luse.png";
import h from "./assets/Home.png";
import kit from "./assets/kit.png";

type ProjectCardProps = {
  images: string[];
  title: string;
  description: string;
  techStack: string[];
  rowClass: string;
  githubUrl?: string;
};

function ProjectCard({
  images,
  title,
  description,
  techStack,
  rowClass,
  githubUrl,
}: ProjectCardProps) {
  const iconMap: Record<string, JSX.Element> = {
    Dart: <SiDart size={18} color="#00B4AB" />,
    JS: <FaJs size={18} color="#F7DF1E" />,
    Python: <FaPython size={18} color="#3776AB" />,
    Mongo: <SiMongodb size={18} color="#47A248" />,
    React: <FaReact size={18} color="#61DBFB" />,
    Swift: <SiSwift size={18} color="#FA7343" />,
    Laravel: <FaLaravel size={18} color="#FF2D20" />,
    MySQL: <SiMysql size={18} color="#4479A1" />,
    Heroku: <SiHeroku size={18} color="#6762A6" />,
    HTML: <FaHtml5 size={18} color="#E34F26" />,
    CSS: <FaCss3Alt size={18} color="#1572B6" />,
  };

  return (
    <div className="project-card">
      <div className={`image-row ${rowClass}`}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title + " " + (index + 1)}
            className="project-thumb"
          />
        ))}
      </div>

      <h3 className="proj-title">{title}</h3>
      <p className="proj-desc">{description}</p>

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-icon">
            {iconMap[tech]} <span className="tech-label">{tech}</span>
          </span>
        ))}
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          title="View on GitHub"
        >
          <FaGithub size={22} />
        </a>
      )}
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="page-bg">
      {/* left floating social bubble */}
      <div className="social-bubble">
        <button className="icon">
          <FaGithub size={20} />
        </button>
        <button className="icon">
          <FaEnvelope size={20} />
        </button>
        <button className="icon">
          <FaLinkedin size={20} />
        </button>
      </div>

      <main className="center-wrap">
        <article className="card">
          <header className="card-header">
            <img src={pfp} alt="Profile" className="profile-pic" />
            <div className="line" />
            <div className="title-block">
              <h1 className="name">I’m Jaspher</h1>
              <p className="subtitle">
                UI/UX Designer &amp; Front-End Developer
              </p>
            </div>
          </header>

          <p className="intro">
            UI/UX Designer and Front-End Developer dedicated to creating
            responsive, user-centered designs that balance aesthetics with
            functionality. Focused on delivering digital solutions that elevate
            user experience and exceed expectations.
          </p>

          {/* Projects */}
          <h1 className="section-title">Projects</h1>
          <section className="projects-grid">
            <ProjectCard
              images={[cl, dmv, or]}
              title="Sakay"
              description="App that tracks buses in real-time, showing locations and ETAs. It helps drivers optimize routes and reduces waiting times for passengers."
              techStack={["Dart", "JS", "Python", "Mongo", "React"]}
              rowClass="sakay"
              githubUrl="https://github.com/Swa-ne/Sakay.git"
            />
            <ProjectCard
              images={[l, s, p]}
              title="HerbaPlant"
              description="An herbal reference app that educates users about natural remedies and plant-based health solutions."
              techStack={["Dart", "Swift", "Laravel", "MySQL", "Heroku"]}
              rowClass="three"
              githubUrl="https://github.com/KeilizonDeiv/Capstone.git"
            />
            <ProjectCard
              images={[Luse, h]}
              title="USE (UPang Student Essential)"
              description="Developed a school essentials app for UPang students to streamline the distribution process. Designed a modern, user-friendly interface to enhance accessibility and usability."
              techStack={["Dart", "Swift", "Laravel", "MySQL", "Heroku"]}
              rowClass="two"
              githubUrl="https://github.com/8sync/Upang-Student-Essentials.git"
            />
            <ProjectCard
              images={[kit]}
              title="Kithara"
              description="Built a free website for guitar enthusiasts, managing design, content, and brand identity. Enhanced the platform’s structure and performance to deliver a better learning experience."
              techStack={["HTML", "CSS", "JS", "Laravel", "Heroku"]}
              rowClass="one"
            />
          </section>

          {/* Tech */}
          <h2 className="section-title">Tech</h2>
          <section className="icons-grid">
            {[
              { name: "Python", icon: FaPython, color: "#3776AB" },
              { name: "Java", icon: FaJava, color: "#E76F00" },
              { name: "HTML", icon: FaHtml5, color: "#E34F26" },
              { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
              { name: "JS", icon: FaJs, color: "#F7DF1E" },
              { name: "Flutter", icon: FaReact, color: "#61DAFB" },
            ].map(({ name, icon: Icon, color }) => (
              <div key={name} className="icon-card">
                <div className="icon-placeholder">
                  <Icon size={36} color={color} />
                </div>
                <div className="icon-label">{name}</div>
              </div>
            ))}
          </section>

          {/* Kits */}
          <h2 className="section-title">Kits</h2>
          <section className="icons-grid">
            {[
              { name: "VS Code", type: "image", src: "/assets/icons/vsc.png" },
              { name: "Figma", type: "image", src: "/assets/icons/fig.png" },
              {
                name: "Notion",
                type: "icon",
                icon: SiNotion,
                color: "#000000",
              },
              {
                name: "Spotify",
                type: "icon",
                icon: SiSpotify,
                color: "#1DB954",
              },
              {
                name: "ChatGPT",
                type: "icon",
                icon: SiOpenai,
                color: "#000000",
              },
            ].map((kit) => (
              <div key={kit.name} className="icon-card">
                <div className="icon-placeholder">
                  {kit.type === "image" ? (
                    <img
                      src={kit.src}
                      alt={kit.name}
                      width="36"
                      height="36"
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    kit.icon && <kit.icon size={36} color={kit.color} />
                  )}
                </div>
                <div className="icon-label">{kit.name}</div>
              </div>
            ))}
          </section>

          {/* Contact */}
          <h2 className="section-title">Contact</h2>
          <div className="contact-list">
            <div className="contact-row">
              <div className="contact-icon">
                <FaMapMarkerAlt size={18} />
              </div>
              <div className="contact-text">
                Consejo St. Poblacion Urdaneta City, Pangasinan
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">
                <FaPhoneAlt size={18} />
              </div>
              <div className="contact-text">+63-966-378-9064</div>
            </div>
          </div>
        </article>
        <div className="right-divider" />
      </main>
    </div>
  );
}
