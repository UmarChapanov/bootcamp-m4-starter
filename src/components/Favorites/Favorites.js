import React, { Component } from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    title: "Новый список",
    buttonDisabled: "",
    inputValue: ""
  };



  takeInputData = (value) => {
    this.setState({ inputValue: value });
    console.log(this.setState.inputValue);
  };

  render() {
    return (
      <div className="favorites">
        <input
          type="text"
          placeholder="Введите название списка"
          className="favorites__name"
          onChange={(e) => this.takeInputData(e.target.value)}
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
            disabled={!this.state.title}
          >
            Сохранить список
          </button>
        )}
        {!this.props.clickButton && <a>Ссылка:</a>}
        {!this.props.clickButton && (
          <Link to={`/list/${this.props.servId}`}>{this.state.inputValue}</Link>
        )}
      </div>
    );
  }
}

export default Favorites;
