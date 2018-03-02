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