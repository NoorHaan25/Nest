
import styles from './Posts.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
export default function Posts({post}) {
 
  // console.log(post.id);
  return (
    <div className={styles["card-blog"]}>
      <Row className="align-items-center justify-content-center">
        <Col lg={6} md={12} sm={12}>
          <div className={styles["img-blog"]}>
            <img src={post.img} alt={`${post.id}-blog`} />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className={styles["text-blog"]}>
            <h3><Link to={`/blog/postdetails/${post.id}`}>{post.title}</Link></h3>
            <p>
            {post.description}
            </p>
            <div className={styles["info-post"]}>
              <div className={styles["comment"]}>
                <span>{post.time}</span>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                <span className={styles["blog-typePost"]}>{post['type-post']}</span>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                <span>Post a Comment</span>
              </div>
              <div className={styles["link-post"]}>
                <Link>Read More</Link>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
