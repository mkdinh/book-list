// import React JSX
import React from 'react';
import { ArticleItem } from './ArticleItem';
import { Row } from '../Grid';

export const ArticleList = (props) =>

            <ul>
                  
                {props.results.map(article => {
                    switch(props.page){
                        case "Result":
                        return(
                            <ArticleItem 
                            headline= {article.headline.main}
                            byline= {article.byline.original}
                            date= {article.pub_date}
                            snippet= {article.snippet}
                            url= {article.web_url}
                            key= {article._id}
                            id= {article._id}
                            thumbnail= {article.multimedia[2] ? `https://static01.nyt.com/${article.multimedia[2].url}` : "http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png"}
                            handleSave= {props.handleSave}
                            />
                        )
                        break

                        case "Saved":
                            return(
                                <ArticleItem 
                                headline= {article.headline}
                                byline= {article.byline}
                                date= {article.date}
                                snippet= {article.snippet}
                                url= {article.url}
                                key= {article._id}
                                id= {article._id}
                                thumbnail= {article.thumbnail}
                                deleteArticle = {props.deleteArticle}
                                page= {props.page}
                                />
                            )
                            break
                    }

                })}

            </ul>

export default ArticleList;
        
