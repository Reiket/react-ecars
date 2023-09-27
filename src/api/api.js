import axios from "axios";

export const offerAPI = {
    getOffersCard (number = 0, searchValue = "") {
        return axios.get(`http://localhost:3000/offers?ship=${number}&q=${searchValue}`)
    },
    getOfferCardById(id) {
        return axios.get("http://localhost:3000/offers/" + id);
    }
}

export const carsAPI = {
    getCarsInfo () {
        return axios.get("https://645e60678d08100293fe0ba5.mockapi.io/cars")

    }
}

export const commentsAPI = {
    getComments () {
        return axios.get("https://64e4b50dc55563802913a54c.mockapi.io/comments")
    }
}
export const favoritesAPI = {
    getFavorites (number = 0) {
        return axios.get(`http://localhost:3000/posts?ship=${number}`)
    },
    addToFavorites (item) {
        return axios.post(" http://localhost:3000/posts", item)
    },
    removeToFavorites (id) {
        return axios.delete(`http://localhost:3000/posts/${id}`)
    }
}
export const newsAPI = {
    getNewsPosts () {
        return axios.get("https://64e4b50dc55563802913a54c.mockapi.io/news")
    }
}