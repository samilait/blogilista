const blog = require("../models/blog")
const _ = require('lodash')
const underscore = require('underscore')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let total = 0
  for (let i = 0; i < blogs.length; i++) {
    total += blogs[i].likes
  }

  return total
}

const favoriteBlog = (blogs) => {
  let favorite = blogs[0]

  if (blogs.length > 1) {
    for (let i = 1; i < blogs.length; i++) {
      if (blogs[i].likes > favorite.likes) {
        favorite = blogs[i]
      }
    }
  }

  return favorite

}

const mostBlogs = (blogs) => {
  var nameArray = underscore.pluck(blogs, 'author')
  var most = _.chain(nameArray).countBy().toPairs().max(_.last).head().value()

  // How many blogs
  let numOfBlogs = 0
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].author === most) {
      numOfBlogs++
    }
  }

  let ret = {
    author: most,
    blogs: numOfBlogs
  }

  return ret
}

const mostLikes = (blogs) => {
  var authors = underscore.pluck(blogs, 'author')

  let likes = 0
  let likesTotal = 0
  let author = ''

  for (let i = 0; i < authors.length; i++) {
    for (let j = 0; j < blogs.length; j++) {
      if (blogs[j].author === authors[i]) {
        likes += blogs[j].likes
      }
    }

    if (likes >= likesTotal) {
      likesTotal = likes
      author = authors[i]
    }

    likes = 0

  }

  let ret = {
    author: author,
    likes: likesTotal
  }

  return ret

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}