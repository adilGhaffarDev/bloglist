const _ = require('lodash')

const dummy = () => {
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

const mostBlogs = (blogs) => {
  if(blogs.length>0)
  {
    const grouped = _.groupBy(blogs,'author')
    const mostBloggedAuthor = _.reduce(grouped,(prev, current) => {
      return (prev.length > current.length) ? prev : current})
    console.log('mostBloggedAuthor',mostBloggedAuthor)
    return { author: mostBloggedAuthor[0].author, blogs: mostBloggedAuthor.length }
  }
  return null
}

const mostLikes = (blogs) => {
  if(blogs.length>0)
  {
    const result = blogs.reduce( (authorLikes, blog) => {
      authorLikes[blog.author] = (authorLikes[blog.author] || 0) + blog.likes
      return authorLikes
    } , [])

    let keyValues = []
    for (var key in result) {
      keyValues.push([ key, result[key] ])
    }
    keyValues.sort((first, second) => {
      return second[1] - first[1]
    })
    const maxLikedAuthor = keyValues[0]
    return { author: maxLikedAuthor[0], likes: maxLikedAuthor[1] }
  }
  return null
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}