
import API from '../../API';

export const searchArticles = function(query){
    return (
        dispatch => {
            API.getArticles(query)
            .then(result => {
                dispatch({type: "ADD_RESULTS", payload: result.data.response.docs})
            })
            .catch(err => {
                dispatch({type: "ERROR_RESULTS", payload: err})
            });
        }
    ) 
}

// export function searchArticles(articles) {
//     return{
//         type: "ADD_RESULTS",
//         payload: articles
//     }
// }