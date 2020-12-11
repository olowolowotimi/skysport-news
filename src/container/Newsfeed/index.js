import React from 'react'
import NewsCard from '../../../components/Card';
import { Grid } from "@material-ui/core"; 
import feedStyle from './style/Newsfeed.module.css';


const Newsfeed = () => {
    return(
        <div>
            
             <Grid item xs={12} lg={4}>
                       
                    </Grid>
                    
            <section id={feedStyle.newscontainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                            <div className={feedStyle.imageprop}>
                                <img src="/static/img/boxing.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                            
                        </NewsCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                        <img src="/static/img/boxing.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        
                        </NewsCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                        <img src="/static/img/boxing.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        
                        </NewsCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                        <img src="/static/img/golf.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Golf</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        
                        </NewsCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                        <img src="/static/img/boxing.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        
                        </NewsCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                        <img src="/static/img/skysportimg.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        
                        </NewsCard>
                    </Grid>
                </Grid>
            </section>
            <Grid>
               
                    <h2 className={feedStyle.text}>Live On Sky</h2>
                    <div  className={feedStyle.sectiontwo}>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                                <img src="/static/img/boxing.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        </NewsCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <NewsCard>
                        <div className={feedStyle.imageprop}>
                                <img src="/static/img/boxing.jpg" alt="card image"/>
                                </div>
                                <div className={feedStyle.content}>
                                    <p>Football</p>
                                    <h3>Kelleher starts again, TAA captains liverpool LIVE!</h3>
                                    </div>
                        </NewsCard>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default Newsfeed