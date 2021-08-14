import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'Новый список',
        
        
    }
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.myList.map((item) => {
                        return <li key={item.imdbID} className="favorites__item">{item.Title} ({item.Year} ) <button className="del_btn" onClick = {() => this.props.deleteFilm(item)}>X</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;