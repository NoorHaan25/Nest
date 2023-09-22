import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PostDetails.module.css";
import { getPost } from "../../services/api";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function PostDetails() {
  const { id } = useParams();
  console.log(typeof id);
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const post = await getPost();
    setPosts(post);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const postImg = posts.map((post) =>
    post.id === +id ? (
      <div className={styles["img-details"]}>
        <img src={post.img} alt={post.title} />
      </div>
    ) : null
  );
  const prev = () => {
    window.scrollTo(0, 0);
    const prevValue =
      +id === 1
        ? null
        : posts.find(function (el) {
            return el.id === +id - 1;
          });
    if (prevValue) {
      console.log(prevValue);
      return (
        <div className={`${styles["prev-post"]} d-flex align-items-center`}>
          <div className={styles["img-post"]}>
            <img
              src={prevValue && prevValue.img}
              alt={prevValue && prevValue.title}
            />
          </div>
          <div className={styles["text-post"]}>
            <Link to={`/blog/postdetails/${+id - 1}`}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              Previous Post
            </Link>
            <h3>{prevValue && prevValue.title}</h3>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const next = () => {
    window.scrollTo(0, 0);
    const nextValue =
      +id === posts.length
        ? null
        : posts.find(function (el) {
            return el.id === +id + 1;
          });
    if (nextValue) {
      return (
        <div className={`${styles["next-post"]} d-flex align-items-center`}>
          <div className={styles["img-post"]}>
            <img
              src={nextValue && nextValue.img}
              alt={nextValue && nextValue.title}
            />
          </div>
          <div className={styles["text-post"]}>
            <Link to={`/blog/postdetails/${+id + 1}`}>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              Next Post
            </Link>
            <h3>{nextValue && nextValue.title}</h3>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const dataPreviousPost = prev();
  const dataNextPost = next();
  return (
    <div className={styles.details}>
      <div className={styles["container-details"]}>
        {postImg}
        <h3>
          Helping everyone live happier, healthier lives at home through their
          kitchen. Kitchn is a daily food magazine on the Web celebrating life
          in the kitchen through home cooking and kitchen intelligence.
        </h3>
        <div className={styles.description}>
          <p>
            We’ve reviewed and ranked all of the best smartwatches on the market
            right now, and we’ve made a definitive list of the top 10 devices
            you can buy today. One of the 10 picks below may just be your
            perfect next smartwatch.
          </p>
          <p>
            Those top-end wearables span from the Apple Watch to Fitbits, Garmin
            watches to Tizen-sporting Samsung watches. There’s also Wear OS
            which is Google’s own wearable operating system in the vein of
            Apple’s watchOS – you’ll see it show up in a lot of these devices.
          </p>
        </div>
      </div>
      <div className={styles["another-posts"]}>
        <h4>Lorem ipsum dolor sit amet cons</h4>
        <p>
          Throughout our review process, we look at the design, features,
          battery life, spec, price and more for each smartwatch, rank it
          against the competition and enter it into the list you’ll find below.
        </p>
        <div className={styles.imgs}>
          <img src={require("../../img/blog-1.png")} alt="blog-1" />
          <img src={require("../../img/blog-2.png")} alt="blog-2" />
        </div>
        <p>
          Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
          euismod et diam quis aliquam consequat porttitor integer a nisl, in
          faucibus nunc et aenean turpis dui dignissim nec scelerisque
          ullamcorper eu neque, augue quam quis lacus pretium eros est amet
          turpis nunc in turpis massa et eget facilisis ante molestie penatibus
          dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt
          cras feugiat tempor lectus
        </p>
        <blockquote>
          <p>
            Integer eu faucibus{" "}
            <Link>
              {" "}
              dolor <sup>[5]</sup>
            </Link>
            . Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan
            semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus
            rhoncus in.
          </p>
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim,
          libero sit. Est donec lobortis cursus amet, cras elementum libero
          convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec
          sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel
          augue. Facilisi diam consequat amet, commodo lorem nisl, odio
          malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus
          elit sit sit.
        </p>
      </div>
      <div className={styles.hashtag}>
        <div className={styles.tags}>
          <h6>Tags</h6>
          <div className={styles["links"]}>
            <Link>#salad</Link>
            <Link>#smoothie</Link>
          </div>
        </div>
        <div className={styles.tags}>
          <h6>Posted in</h6>
          <div className={styles["links"]}>
            <Link>#Breakfast</Link>
            <Link>#Dairy Free</Link>
            <Link>#Uncategorized</Link>
          </div>
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles["header-comment"]}>
          <h3>Post a comment</h3>
          <p>Your email address will not be published.</p>
        </div>
        <div className={styles.form}>
          <div className={styles.textarea}>
            <label htmlFor="comment">Leave a Reply</label>
            <textarea
              id="comment"
              rows="12"
              placeholder="Write your comment here..."
            >
            </textarea>
          </div>
          <div className={`${styles["main-inputs"]} `}>
            <div className={styles["sub-input"]}>
              <label htmlFor="name">Full Name</label>
              <input id="name" type="name" placeholder="ex. John Doe" />
            </div>
            <div className={styles["sub-input"]}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="ex. john@mail.com" />
            </div>
          </div>
          <button>Post Comment</button>
        </div>
      </div>
      <div className={styles.prevNextPosts}>
        {dataPreviousPost}
        {dataNextPost}
      </div>
    </div>
  );
}
