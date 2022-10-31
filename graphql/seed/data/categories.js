/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const { attributes } = require("./attributes");

const {
    status,
    bodyColor,
    bodyStatus,
    buildYear,
    buildingArea,
    carBrand,
    chassisStatus,
    depositPrice,
    engineStatus,
    floor,
    gearbox,
    hasBalcony,
    hasElevator,
    hasParking,
    hasStorage,
    internalStorage,
    landArea,
    originality,
    phoneBrand,
    price,
    productionYear,
    ramMemory,
    rentPrice,
    rooms,
    simCardSlot,
    thirdPartyInsuranceDeadline,
    usage,
} = attributes;

module.exports.categories = [
    {
        title: "estate",
        slug: "estate",
        parentSlug: "categories",
        icon: "building",
    },

    {
        title: "buy-residential",
        slug: "buy-residential",
        parentSlug: "estate",
    },
    {
        title: "buy-apartment",
        slug: "buy-apartment",
        parentSlug: "buy-residential",
        attributes: [price, rooms, buildingArea, buildYear, hasElevator, hasParking, hasStorage, floor],
    },
    {
        title: "buy-house-and-villa",
        slug: "buy-house-and-villa",
        parentSlug: "buy-residential",
        attributes: [price, buildingArea, buildYear, hasBalcony],
    },
    {
        title: "buy-land-and-destructible",
        slug: "buy-land-and-destructible",
        parentSlug: "buy-residential",
        attributes: [price, landArea],
    },
    {
        title: "rent-residential",
        slug: "rent-residential",
        parentSlug: "estate",
    },
    {
        title: "rent-apartment",
        slug: "rent-apartment",
        parentSlug: "rent-residential",
        attributes: [
            rentPrice,
            depositPrice,
            rooms,
            buildingArea,
            buildYear,
            hasElevator,
            hasParking,
            hasStorage,
            floor,
        ],
    },
    {
        title: "rent-house-and-villa",
        slug: "rent-house-and-villa",
        parentSlug: "rent-residential",
        attributes: [rentPrice, depositPrice, buildingArea, buildYear, hasBalcony],
    },
    {
        title: "buy-official-and-commercial",
        slug: "buy-official-and-commercial",
        parentSlug: "estate",
    },
    {
        title: "buy-office",
        slug: "buy-office",
        parentSlug: "buy-official-and-commercial",
        attributes: [price, buildingArea, buildYear],
    },
    {
        title: "buy-shop",
        slug: "buy-shop",
        parentSlug: "buy-official-and-commercial",
        attributes: [price, buildingArea, buildYear],
    },
    {
        title: "buy-industrial-and-agriculture",
        slug: "buy-industrial-and-agriculture",
        parentSlug: "buy-official-and-commercial",
        attributes: [price, landArea],
    },
    {
        title: "rent-official-and-commercial",
        slug: "rent-official-and-commercial",
        parentSlug: "estate",
    },
    {
        title: "rent-office",
        slug: "rent-office",
        parentSlug: "rent-official-and-commercial",
        attributes: [rentPrice, depositPrice, buildingArea, buildYear],
    },
    {
        title: "rent-shop",
        slug: "rent-shop",
        parentSlug: "rent-official-and-commercial",
        attributes: [rentPrice, depositPrice, buildingArea, buildYear],
    },
    {
        title: "rent-industrial-and-agriculture",
        slug: "rent-industrial-and-agriculture",
        parentSlug: "rent-official-and-commercial",
        attributes: [rentPrice, depositPrice, landArea],
    },
    {
        title: "vehicles",
        slug: "vehicles",
        parentSlug: "categories",
        icon: "car",
    },
    {
        title: "cars-and-trucks",
        slug: "cars-and-trucks",
        parentSlug: "vehicles",
        attributes: [price],
    },
    {
        title: "cars",
        slug: "cars",
        parentSlug: "cars-and-trucks",
        attributes: [
            price,
            carBrand,
            productionYear,
            bodyColor,
            bodyStatus,
            chassisStatus,
            engineStatus,
            usage,
            thirdPartyInsuranceDeadline,
            gearbox,
        ],
    },
    {
        title: "classic-cars",
        slug: "classic-cars",
        parentSlug: "cars-and-trucks",
        attributes: [price, carBrand, productionYear, bodyColor],
    },
    {
        title: "rental-cars",
        slug: "rental-cars",
        parentSlug: "cars-and-trucks",
        attributes: [rentPrice, carBrand, productionYear, bodyColor, bodyStatus, chassisStatus, engineStatus, gearbox],
    },
    {
        title: "heavy-cars",
        slug: "heavy-cars",
        parentSlug: "cars-and-trucks",
        attributes: [price],
    },
    {
        title: "cars-accessories",
        slug: "cars-accessories",
        parentSlug: "vehicles",
        attributes: [price],
    },
    {
        title: "motorcycles-and-accessories",
        slug: "motorcycles-and-accessories",
        parentSlug: "vehicles",
        attributes: [price],
    },
    {
        title: "boats-and-accessories",
        slug: "boats-and-accessories",
        parentSlug: "vehicles",
        attributes: [price],
    },
    {
        title: "commodity",
        slug: "commodity",
        parentSlug: "categories",
        icon: "gift",
    },
    {
        title: "digital",
        slug: "digital",
        parentSlug: "commodity",
        icon: "phone",
    },
    {
        title: "phone-and-tablet",
        slug: "phone-and-tablet",
        parentSlug: "digital",
    },
    {
        title: "phone",
        slug: "phone",
        parentSlug: "phone-and-tablet",
        attributes: [price, phoneBrand, originality, ramMemory, status, internalStorage, simCardSlot],
    },
    {
        title: "tablet",
        slug: "tablet",
        parentSlug: "phone-and-tablet",
        attributes: [price, phoneBrand, originality, ramMemory, status, internalStorage, simCardSlot],
    },
    {
        title: "phone-and-tablet-parts",
        slug: "phone-and-tablet-parts",
        parentSlug: "phone-and-tablet",
        attributes: [price, phoneBrand],
    },
    {
        title: "sim-card",
        slug: "sim-card",
        parentSlug: "phone-and-tablet",
        attributes: [price],
    },
    {
        title: "computer",
        slug: "computer",
        parentSlug: "digital",
    },
    {
        title: "laptop",
        slug: "laptop",
        parentSlug: "computer",
        attributes: [price, status, ramMemory, internalStorage],
    },
    {
        title: "pc",
        slug: "pc",
        parentSlug: "computer",
        attributes: [price, status],
    },
    {
        title: "computer-parts",
        slug: "computer-parts",
        parentSlug: "computer",
        attributes: [price, status],
    },
    {
        title: "modem-and-network",
        slug: "modem-and-network",
        parentSlug: "computer",
        attributes: [price, status],
    },
    {
        title: "printer-scanner-copy-fax",
        slug: "printer-scanner-copy-fax",
        parentSlug: "computer",
        attributes: [price, status],
    },
    {
        title: "games-console",
        slug: "games-console",
        parentSlug: "digital",
        attributes: [price, status],
    },
    {
        title: "video-and-audio",
        slug: "video-and-audio",
        parentSlug: "digital",
        attributes: [price, status],
    },
    {
        title: "movie-and-music",
        slug: "movie-and-music",
        parentSlug: "video-and-audio",
        attributes: [price, status],
    },
    {
        title: "camera",
        slug: "camera",
        parentSlug: "video-and-audio",
        attributes: [price, status],
    },
    {
        title: "portable-player",
        slug: "portable-player",
        parentSlug: "video-and-audio",
        attributes: [price, status],
    },
    {
        title: "home-audio-system",
        slug: "home-audio-system",
        parentSlug: "video-and-audio",
    },
    {
        title: "video-and-dvd-player",
        slug: "video-and-dvd-player",
        parentSlug: "video-and-audio",
        attributes: [price, status],
    },
    {
        title: "tv-and-projector",
        slug: "tv-and-projector",
        parentSlug: "video-and-audio",
        attributes: [price, status],
    },
    {
        title: "security-camera",
        slug: "security-camera",
        parentSlug: "video-and-audio",
        attributes: [price, status],
    },
    {
        title: "desk-phone",
        slug: "desk-phone",
        parentSlug: "digital",
        attributes: [price, status],
    },
    {
        title: "personal",
        slug: "personal",
        parentSlug: "commodity",
        attributes: [price, status],
    },
    {
        title: "home-and-kitchen",
        slug: "home-and-kitchen",
        parentSlug: "commodity",
        attributes: [price, status],
    },
    {
        title: "services",
        slug: "services",
        parentSlug: "categories",
        icon: "service",
    },
    {
        title: "cars-and-motorcycle-fix",
        slug: "cars-and-motorcycle-fix",
        parentSlug: "services",
    },
    {
        title: "ceremonies",
        slug: "ceremonies",
        parentSlug: "services",
    },
    {
        title: "computer-and-phone-services",
        slug: "computer-and-phone-services",
        parentSlug: "services",
    },
    {
        title: "financial-accounting-insurance",
        slug: "financial-accounting-insurance",
        parentSlug: "services",
    },
    {
        title: "transportation",
        slug: "transportation",
        parentSlug: "services",
    },
    {
        title: "skills",
        slug: "skills",
        parentSlug: "services",
    },
    {
        title: "barber-and-beauty",
        slug: "barber-and-beauty",
        parentSlug: "services",
    },
    {
        title: "entertainment",
        slug: "entertainment",
        parentSlug: "services",
    },
    {
        title: "cleaning",
        slug: "cleaning",
        parentSlug: "services",
    },
    {
        title: "gardening",
        slug: "gardening",
        parentSlug: "services",
    },
    {
        title: "education",
        slug: "education",
        parentSlug: "services",
    },
    {
        title: "social",
        slug: "social",
        parentSlug: "categories",
        icon: "users",
    },
    {
        title: "events",
        slug: "events",
        parentSlug: "social",
    },
    {
        title: "voluntary",
        slug: "voluntary",
        parentSlug: "social",
    },
    {
        title: "lost",
        slug: "lost",
        parentSlug: "social",
    },
    {
        title: "hiring",
        slug: "hiring",
        parentSlug: "categories",
        icon: "briefcase",
    },
    {
        title: "office-and-management",
        slug: "office-and-management",
        parentSlug: "hiring",
    },
    {
        title: "janitor",
        slug: "janitor",
        parentSlug: "hiring",
    },
    {
        title: "architecture",
        slug: "architecture",
        parentSlug: "hiring",
    },
    {
        title: "restaurants",
        slug: "restaurants",
        parentSlug: "hiring",
    },
    {
        title: "tech-and-computer",
        slug: "tech-and-computer",
        parentSlug: "hiring",
    },
    {
        title: "financial",
        slug: "financial",
        parentSlug: "hiring",
    },
    {
        title: "marketing",
        slug: "marketing",
        parentSlug: "hiring",
    },
    {
        title: "industrial",
        slug: "industrial",
        parentSlug: "hiring",
    },
    {
        title: "education",
        slug: "education",
        parentSlug: "hiring",
    },
    {
        title: "transportation",
        slug: "transportation",
        parentSlug: "hiring",
    },
    {
        title: "medical-beauty-and-sanitary",
        slug: "medical-beauty-and-sanitary",
        parentSlug: "hiring",
    },
    {
        title: "art-and-media",
        slug: "art-and-media",
        parentSlug: "hiring",
    },
];
