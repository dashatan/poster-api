const { cities } = require("../../../StaticData/cities")

module.exports.getAllCities = (parent, args) => {
  const { provinceId } = args
  if (provinceId) {
    return cities.filter((x) => x.province_id === provinceId)
  } else {
    return cities
  }
}
