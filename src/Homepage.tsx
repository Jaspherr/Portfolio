import "./App.css";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
} from "react-icons/fa";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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
};

function ProjectCard({
  images,
  title,
  description,
  techStack,
  rowClass,
}: ProjectCardProps) {
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

      <div className="project-footer">
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-icon">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <button className="icon-btn">↩️</button>
          <button className="icon-btn">🐙</button>
        </div>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="page-bg">
      {/* left floating social bubble */}
      <div className="social-bubble">
        <button className="icon">🐙</button>
        <button className="icon">✉️</button>
        <button className="icon">in</button>
      </div>

      {/* center column */}
      <main className="center-wrap">
        <article className="card">
          {/* header: profile circle + name */}
          <header className="card-header">
            <img src={pfp} alt="Profile" className="profile-pic" />
            <div className="title-block">
              <h1 className="name">I’m Jaspher</h1>
              <p className="subtitle">
                UI/UX Designer &amp; Front-End Developer
              </p>
            </div>
          </header>

          {/* intro */}
          <p className="intro">
            UI/UX Designer and Front-End Developer dedicated to creating
            responsive, user-centered designs that balance aesthetics with
            functionality. Focused on delivering digital solutions that elevate
            user experience and exceed expectations.
          </p>

          {/* Projects */}
          <h2 className="section-title">Projects</h2>
          <section className="projects-grid">
            {/* Sakay Project */}
            <ProjectCard
              images={[cl, dmv, or]}
              title="Sakay"
              description="App that tracks buses in real-time, showing locations and ETAs. It helps drivers optimize routes and reduces waiting times for passengers."
              techStack={["🧭", "JS", "⚙️"]}
              rowClass="sakay"
            />

            {/* HerbaPlant Project */}
            <ProjectCard
              images={[l, s, p]}
              title="HerbaPlant"
              description="An herbal reference app that educates users about natural remedies and plant-based health solutions."
              techStack={["🧭", "JS", "⚙️"]}
              rowClass="three"
            />

            {/* USE Project */}
            <ProjectCard
              images={[Luse, h]}
              title="USE (UPang Student Essential)"
              description="Developed a school essentials app for UPang students to streamline the distribution process. Designed a modern, user-friendly interface to enhance accessibility and usability."
              techStack={["🧭", "JS", "⚙️"]}
              rowClass="two"
            />

            {/* Kithara Project */}
            <ProjectCard
              images={[kit]}
              title="Kithara"
              description="Built a free website for guitar enthusiasts, managing design, content, and brand identity. Enhanced the platform’s structure and performance to deliver a better learning experience."
              techStack={["🧭", "HTML", "CSS"]}
              rowClass="one"
            />
          </section>

          {/* Tech */}
          <h2 className="section-title">Tech</h2>
          <section className="icons-grid">
            {["Python", "Java", "HTML", "CSS", "JS", "Flutter"].map((t) => {
              let IconComponent;
              switch (t) {
                case "Python":
                  IconComponent = FaPython;
                  break;
                case "Java":
                  IconComponent = FaJava;
                  break;
                case "HTML":
                  IconComponent = FaHtml5;
                  break;
                case "CSS":
                  IconComponent = FaCss3Alt;
                  break;
                case "JS":
                  IconComponent = FaJs;
                  break;
                case "Flutter":
                  IconComponent = FaReact;
                  break;
                default:
                  IconComponent = null;
              }
              return (
                <div key={t} className="icon-card">
                  <div className="icon-placeholder">
                    {IconComponent && <IconComponent size={36} />}
                  </div>
                  <div className="icon-label">{t}</div>
                </div>
              );
            })}
          </section>

          <h2 className="section-title">Kits</h2>
          <section className="icons-grid">
            {["VS Code", "Figma", "Chrome", "Notion", "Spotify", "ChatGPT"].map(
              (kit) => {
                let iconClass = "";
                let iconSrc = "";

                switch (kit) {
                  case "VS Code":
                    iconSrc = "/assets/icons/vsc.png";
                    break;
                  case "Figma":
                    iconSrc = "/assets/icons/figma.png";
                    break;
                  case "Chrome":
                    iconSrc = "/assets/icons/chrome.png";
                    break;
                  case "Notion":
                    iconSrc = "/assets/icons/notion.png";
                    break;
                  case "Spotify":
                    iconSrc = "/assets/icons/spotify.png";
                    break;
                  case "ChatGPT":
                    iconSrc = "/assets/icons/chatgpt.png";
                    break;
                  default:
                    iconClass = "";
                    break;
                }

                return (
                  <div key={kit} className="icon-card">
                    <div className="icon-placeholder">
                      {iconSrc ? (
                        <img src={iconSrc} alt={kit} width="36" height="36" />
                      ) : (
                        <i className={iconClass}></i>
                      )}
                    </div>
                    <div className="icon-label">{kit}</div>
                  </div>
                );
              }
            )}
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

        {/* vertical divider to the right */}
        <div className="right-divider" />
      </main>
    </div>
  );
}