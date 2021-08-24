import React, { Component } from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";

class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <input
          value={this.props.title}
          type="text"
          placeholder="Введите название списка"
          className="favorites__name"
          // onChange={(e) => this.takeInputData(e.target.value)}
          onChange={this.props.takeInputData}
          disabled={this.props.servId}
        />
        <ul className="favorites__list">
          {this.props.myList.map((item) => {
            return (
              <li key={item.imdbID} className="favorites__item">
                {item.Title} ({item.Year} ){" "}
                <button
                  className="del_btn"
                  onClick={() => this.props.deleteFilm(item)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        {this.props.clickButton && (
          <button
            onClick={this.props.myListFilmsForSave}
            type="button"
            className="favorites__save"
            disabled={!this.props.title}
          >
            Сохранить список
          </button>
        )}
        {!this.props.clickButton && <a>Ссылка:</a>}
        {!this.props.clickButton && (
          <Link to={`/list/${this.props.servId}`}>{this.props.title}</Link>
        )}
      </div>
    );
  }
}

export default Favorites;
