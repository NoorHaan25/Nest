import React from 'react'
import { getAllPosts } from '../../services/api';
import GetPosts from '../../Components/GetPosts';
export default function PageOne() {
  const getPosts = async () => {
    try {
      const response = await getAllPosts();
      return response.data['part-two'].posts;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GetPosts data={ getPosts()} />
  );
}


