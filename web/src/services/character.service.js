import axios from 'axios';

const successHandler = response => response;

const errorHandler = err => Promise.reject(err);

const characterService = {
    create: (data) => {
        const config = {
            method: "POST",
            data: data
        };

        return axios("http://localhost:7070/api/character/create", config)
            .then(successHandler)
            .catch(errorHandler);
        ;
    },
    update: (data) => {
        return true
    },
    delete: (id) => {
        const config = {
            method: "DELETE",
            data: {
                _id: id
            }
        }

        return axios("http://localhost:7070/api/character/delete", config)
            .then(successHandler)
            .catch(errorHandler);
    ;

    },
    readById: (id) => {
        return true
    },
    readAll: () => {
        const config = {
            method: "GET"
        };
        
        return axios("http://localhost:7070/api/character", config)
            .then(successHandler)
            .catch(errorHandler);
        ;
    }
};

export default characterService;

            // data: [
            //     {
            //         _id: 1,
            //         name: "mitch",
            //         type: "monSTAR",
            //         imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pentagram_green.svg/220px-Pentagram_green.svg.png"
            //     },
            //     {
            //         _id: 2,
            //         name: "rock",
            //         type: "inanimate",
            //         imageUrl: "https://geology.com/articles/difficult-rocks/difficult-rock-identification.jpg"

            //     },
            //     {
            //         _id: 3,
            //         name: "the TICK",
            //         type: "bug",
            //         imageUrl: "https://www.entertainmentearth.com/images/AUTOIMAGES/EL9000681lg.jpg"
            //     }
            // ]
