import React, { useState } from "react";
import styles from "./Brands.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";
export default function Brands() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dataSlider] = useState([
    {
      id: 1,
      title: "Eco Market",
      "number-items": 4,
      img: require("../../img/brand-1.png"),
    },
    {
      id: 2,
      title: "Shop Grocery",
      "number-items": 4,
      img: require("../../img/brand-2.png"),
    },
    {
      id: 3,
      title: "Vegan Market",
      "number-items": 4,
      img: require("../../img/brand-3.png"),
    },
    {
      id: 4,
      title: "Family",
      "number-items": 4,
      img: require("../../img/brand-4.png"),
    },
    {
      id: 5,
      title: "Bio Market",
      "number-items": 4,
      img: require("../../img/brand-5.png"),
    },
    {
      id: 6,
      title: "Farmers Market",
      "number-items": 4,
      img: require("../../img/brand-6.png"),
    },
    {
      id: 7,
      title: "Green Basket",
      "number-items": 4,
      img: require("../../img/brand-7.png"),
    },
    {
      id: 8,
      title: "100% Organic",
      "number-items": 4,
      img: require("../../img/brand-8.png"),
    },
    {
      id: 9,
      title: "The Green",
      "number-items": 4,
      img: require("../../img/brand-9.png"),
    },
    {
      id: 10,
      title: "Health Store",
      "number-items": 10,
      img: require("../../img/brand-10.png"),
    },
  ]);
  const angleRight = () => {
    if (slideIndex <= dataSlider.length / 2 ) {
      setSlideIndex(slideIndex + 1);
    }
    console.log(slideIndex);
  };
  const angleLeft = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };
  return (
    <section className={styles.Brands}>
      <div className={styles.angles}>
        <FontAwesomeIcon
          className={styles["arrow-left"]}
          icon={faArrowLeft}
        onClick={angleLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={styles["arrow-right"]}
          icon={faArrowRight}
          onClick={angleRight}
        ></FontAwesomeIcon>
      </div>
      <Container fluid>
        <div className={styles["slider-container"]}>
          <div className={styles["slider-wrapper"]}>
            {dataSlider.map((item) => (
              <div
                key={item.id}
                 style={{ left: `${slideIndex *  -281.44}px` }}
                className={styles.brand}
              >
                <div className={styles["img-brand"]}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <span>{`items ${item["number-items"]}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
