import React from 'react'
import { getAllPosts } from '../../services/api';
import GetPosts from '../../Components/GetPosts';
export default function PageOne() {
  const getPosts = async ()=>{
    const response = await getAllPosts();
    return response.data['part-one'].posts
  }
  return (
    <GetPosts data={getPosts()}/>
  )
}