import React, { Fragment, useEffect, useState } from "react";
import Posts from "./Posts";


export default function GetPosts({ data }) {
  const [dataPosts, setDataPosts] = useState([]);
  const dataAllPosts = async () => {
    const dataPosts = await data;
    setDataPosts(dataPosts);
    
  };
  useEffect(() => {
    dataAllPosts();
  },[]);
  const postsList = dataPosts.map((post) => (
    <Posts post={post} key={post.id} />
  ));
  return <Fragment> {postsList}</Fragment>;
}
