import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY =

// This method retrieves books from the server
// It accepts a "query" or term to search the api for

export default {
  //Gets all books from googlebooks
  getSearchedBook: function (query) {
    return axios.get(BASEURL + query);
  },
};
