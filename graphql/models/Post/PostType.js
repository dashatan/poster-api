/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
const currency = require("currency.js");
const { categories } = require("../../seed/data/categories");
const { keyValueObjectType } = require("../../types/keyValueObjectType");
const { CategoryType } = require("../Category/CategoryType");
const { cities } = require("../../seed/data/cities");

module.exports.PostType = new GraphQLObjectType({
    name: "post",
    description: "represents a post",
    fields: () => {
        const obj = {
            _id: { type: GraphQLString },
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            categoryId: { type: GraphQLString },
            cityId: { type: GraphQLString },
            userId: { type: GraphQLString },
            images: { type: new GraphQLList(GraphQLString) },
            thumbnail: { type: GraphQLString },
            category: {
                type: CategoryType,
                resolve: (post) => {
                    const category = categories.find((x) => x.title === post.categoryId);
                    return category;
                },
            },
            topDescription: {
                type: GraphQLString,
                resolve: (post) => {
                    const status = post.attributes.find((x) => x.key === "status");
                    return status ? status.value : "";
                },
            },
            middleDescription: {
                type: GraphQLString,
                resolve: (post) => {
                    const price = post.attributes.find((x) => x.key === "price").value;
                    const IRT = (value) => currency(value, { precision: 0, symbol: "" });
                    return `${IRT(price).format()}`;
                },
            },
            bottomDescription: {
                type: GraphQLString,
                resolve: (post) => {
                    dayjs.extend(relativeTime);
                    const fromNow = dayjs(post.createdAt).fromNow();
                    const city = cities.find((x) => x.slug.toLowerCase() === post.cityId.toLowerCase()).slug;
                    return `${fromNow} in ${city}`;
                },
            },
            attributes: { type: new GraphQLList(keyValueObjectType) },
            createdAt: { type: GraphQLString },
            updatedAt: { type: GraphQLString },
        };
        return obj;
    },
});