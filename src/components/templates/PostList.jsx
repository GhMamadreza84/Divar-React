import { useQuery } from '@tanstack/react-query'
import React from 'react'

const PostList = () => {
  const {data,isLoading}=useQuery(['my-post'])
  return (
    <div>
      PostList
    </div>
  )
}

export default PostList
