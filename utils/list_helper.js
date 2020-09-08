const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const allLikes = blogs.reduce((likes,blog) => likes + blog.likes,0)
  return allLikes
}

const favoriteBlog = (blogs) => {
  if(blogs.length>0)
  {
    const maxLiked = blogs.reduce((prev, current) => {
      return (prev.likes > current.likes) ? prev : current})
    return maxLiked
  }
  return null
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}