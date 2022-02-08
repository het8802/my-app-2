import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let props = {};
        Object.assign(props, this.props);       // created a copy of this.props in props so that we can change the values of keys inside props.

        for (let i in props){
            if(props[i] === null){
                props[i] = `No ${i} to display`;
            }
            else if(i == 'title' || i == 'description'){
                props[i] = props[i].slice(0,100) + "...";
            }
        }

        const alertForUrl = function() {
            if (!props.url){
                alert('No url found for this news!');
            }
        }

        return (
            <div>
                <div className="card mx-3 my-3" style={{width: "18rem", float: 'left', height: '33rem'}}>
                    <img src={props.imageurl} className="card-img-top" alt="..." style={{height: '40%'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.url} onClick={alertForUrl} className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
