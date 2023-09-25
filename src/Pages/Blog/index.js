import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import styles from "./Blog.module.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { getAllPosts } from "../../services/api";
import Heading from "../../Components/Heading/indes";
export default function Blog() {
  const posts=useSelector((state)=>state.posts)
  console.log('posts' , posts);
  const location = useLocation();
  const [pageIds, setPageIds] = useState([]);
  const getPosts = async () => {
    const response = await getAllPosts();
    setPageIds([response.data["part-one"].id, response.data["part-two"].id]);
  };
 
  useEffect(() => {
    getPosts();
  }, []);
  function pagesNumber(){
    // console.log(`/blog/page/${pageIds[1]}`);
    if(location.pathname === `/blog/page/${pageIds[1]}` || location.pathname === '/blog'){
      return(
        <ul
        className={`${styles["page-number"]} d-flex align-items-center justify-content-center`}
      >
        <li>
          <NavLink
            to={""}
            className={`${styles.link}`}
            activeClassName={"active"}
            isPending={true}
            pendingClassName={styles.pending}
            onClick={()=>{window.scrollTo(0, 0);}}
          >
            1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`page/${pageIds[1]}`}
            className={`${styles.link}`}
            activeClassName={styles.active}
            isPending={true}
            pendingClassName={styles.pending}
            onClick={()=>{window.scrollTo(0, 0);}}
          >
            2
          </NavLink>
        </li>
      </ul>
      )
    }else{
      return null;
    }
  }
  return (
    <section className={styles["blog-posts"]}>
      <Container fluid>
        <Row>
          <Col lg={9} md={12} sm={12}>
            <Outlet />
            {pagesNumber()}
           
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className={styles['search-section']}>
              <div className={styles["label-search"]}>
                <label htmlFor="search">Search</label>
              </div>
          <div className={styles.search}>
          <input type="search" id="search"/>
          <button>Search</button>
          </div>
            </div>
            <div className={styles.categories}>
            <Heading heading={'Product Categories'}/>
            <div className={styles['list-categories']}>
              <ul>
              <li>
                <span>Baking material</span>
                <span>7</span>
              </li>
              <li>
                <span>Bread and Juice</span>
                <span>5</span>
              </li>
              <li>
                <span>Clothing & beauty</span>
                <span>2</span>
              </li>
              <li>
                <span>Deals Of The Day</span>
                <span>4</span>
              </li>
              <li>
                <span>Baking material</span>
                <span>7</span>
              </li>
              <li>
                <span>Baking material</span>
                <span>7</span>
              </li>
              <li>
                <span>Baking material</span>
                <span>7</span>
              </li>
              <li>
                <span>Baking material</span>
                <span>7</span>
              </li>
              <li>
                <span>Baking material</span>
                <span>7</span>
              </li>
              </ul>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
