const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('list helper', () => {
  test('total likes returns 7', () => {
    const blogs = [
      {
        title: "First",
        author: "Ms Y",
        url: "xxxx",
        likes: 5
      },
      {
        title: "Second",
        author: "Mr X",
        url: "xxxx",
        likes: 2
      }
    ]

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(7)
  })

  test('returns first blog', () => {
    const blogs = [
      {
        title: "First",
        author: "Ms Y",
        url: "xxxx",
        likes: 5
      },
      {
        title: "Second",
        author: "Mr X",
        url: "xxxx",
        likes: 2
      }
    ]

    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual(blogs[0])
  })

  test('most blogs', () => {
    const blogs = [
      {
        title: "First",
        author: "Ms Y",
        url: "xxxx",
        likes: 5
      },
      {
        title: "Second",
        author: "Mr X",
        url: "xxxx",
        likes: 2
      },
      {
        title: "Third",
        author: "Ms Y",
        url: "xxxx",
        likes: 2
      }
    ]

    const most = {
      author: 'Ms Y',
      blogs: 2
    }

    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual(most)
    
  })

  test('most likes', () => {
    const blogs = [
      {
        title: "First",
        author: "Ms Y",
        url: "xxxx",
        likes: 5
      },
      {
        title: "Second",
        author: "Mr X",
        url: "xxxx",
        likes: 2
      },
      {
        title: "Third",
        author: "Ms Y",
        url: "xxxx",
        likes: 2
      }
    ]

    const most = {
      author: 'Ms Y',
      likes: 7
    }

    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual(most)
    
  })


})

