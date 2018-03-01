
const characterService = {
    create: (data) => {
        return true
    },
    update: (data) => {
        return true
    },
    delete: (id) => {
        return true
    },
    readById: (id) => {
        return true
    },
    readAll: () => {
        return {
            data: [
                {
                    _id: 1,
                    name: "mitch",
                    type: "monSTAR",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pentagram_green.svg/220px-Pentagram_green.svg.png"
                },
                {
                    _id: 2,
                    name: "rock",
                    type: "inanimate",
                    imageUrl: "https://geology.com/articles/difficult-rocks/difficult-rock-identification.jpg"

                },
                {
                    _id: 3,
                    name: "the TICK",
                    type: "bug",
                    imageUrl: "https://www.entertainmentearth.com/images/AUTOIMAGES/EL9000681lg.jpg"
                }
            ]
        };
    }
};

export default characterService;