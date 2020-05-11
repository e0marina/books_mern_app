import axios from "axios";

// This method retrieves books from the server
// It accepts a "query" or term to search the api for

export default {
  //Gets all books from googlebooks
  getSearchedBook: function (query) {
    return axios.get("/api/books", { params: { q: query } });
  },
};
