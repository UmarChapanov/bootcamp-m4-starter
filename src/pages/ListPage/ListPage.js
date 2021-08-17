import React, { Component } from 'react';
import './ListPage.css';
import {Link} from "react-router-dom";

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        fetchId: "1"
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.loadId(id).then(data => this.setState({fetchId:data}));
        
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    

    componentDidUpdate(props, state) {
        if (state.fetchId !== this.state.fetchId) {
            console.log(this.state.fetchId.movies)
            this.renderingList(this.state.fetchId.movies).then(data => this.setState({ movies: data }))
        }
    }

    renderingList(arrId) {
        console.log(arrId)
        let arr = arrId.map((item) => fetch(`http://www.omdbapi.com/?apikey=ab0b8749=${item}`).then(response => response.json()));
        return Promise.all(arr)
      }


    loadId = async(id) =>{
        
            const response = await fetch(
              `https://acb-api.algoritmika.org/api/movies/list/${id}`
            );
            const body = await response.json();
            return body;
         
    }

    render() { 
        console.log(this.state.fetchId);
        return (
            <div className="list-page">
                <Link to = {`/`}>Домой</Link>
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;