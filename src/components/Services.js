import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doiam, quis nostrud exercitation"
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doiam, quis nostrud exercitation"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doiam, quis nostrud exercitation"
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doiam, quis nostrud exercitation"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span> {item.icon} </span>
                <h6> {item.title} </h6>
                <p> {item.info} </p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
