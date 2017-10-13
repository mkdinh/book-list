import axios from 'axios';

export default {
    // Get top 5 articles
    getArticles: (query) => {
        return axios.get(query)
    },
    
    // get saved articles
    findAll: () => {
        return axios.get('./api/articles/')
    },

    // save article
    saveArticle: (article) => {
        return axios.post('./api/articles/', article)
    },

    // find specific saved articles
    findOne: (id) => {
        return axios.get(`./api/articles/${id}`)
    },

    // delete saved article
    deleteOne: (id) => {
        return axios.delete(`./api/articles/${id}`)
    },

    //generate query w/ params
    query: (params) => {
        const APIkey = '8175743622b64aa2a518ffec28fcfd7d';

        let {topic, start, end} = params;

        if(topic === ""){
            topic = 'My Little Pony'
            topic = topic.replace(/s+/,"+")
        };

        if(start === ""){
            start = (new Date()).getFullYear();
        };

        if(end === ""){
           let currentDate = (new Date())
           let queryDate = "";
           let year = currentDate.getFullYear();
           queryDate += year
           let month = currentDate.getMonth();
               queryDate += `${month < 10? 0 : ""}${month}`
           let day = currentDate.getDate();
               queryDate += `${day < 10? 0 : ""}${day}`
           
           end = queryDate;
        };

        let queryStr = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin_date=${start}0101&end_date=${end}&api-key=${APIkey}`;

        return queryStr;
    }

}
