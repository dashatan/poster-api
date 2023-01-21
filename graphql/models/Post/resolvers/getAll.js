const Post = require("..")

module.exports.GetAllPosts = async (_parent, args) => {
  const { limit, sort, skip, page, filters, search } = args
  const sortArr = sort ? sort.toString().split(":") : ""
  const f = {}
  if (filters) {
    filters.map(({ key, value }) => {
      if (value) f[key] = value
    })
  }
  if (search) {
    f.title = { $regex: search, $options: "i" }
  }
  let posts = await Post.find({ ...f }, null, {
    limit,
    skip: page ? (page - 1) * limit : skip,
    sort: { [sortArr[0]]: sortArr[1] },
  })

  return posts
}
