const Post = require("..")

module.exports.GetAllPosts = async (_parent, args) => {
  const { limit, sort, skip, page, filters } = args
  const sortArr = sort ? sort.toString().split(":") : ""
  const f = {}
  if (filters) {
    filters.map((filter) => {
      f[filter.key] = filter.value
    })
  }

  let posts = await Post.find(f, null, {
    limit,
    skip: page ? (page - 1) * limit : skip,
    sort: { [sortArr[0]]: sortArr[1] },
  })

  return posts
}
