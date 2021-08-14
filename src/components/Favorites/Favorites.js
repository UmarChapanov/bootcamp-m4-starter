import React, { Component } from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    title: "Новый список",
    buttonDisabled: "",
    clickButton: true,
    inputValue: "",
  };

  hideButton = () => {
    this.setState({ clickButton: false });
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
          placeholder="Введите название фильма"
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
        {this.state.clickButton && (
          <button
            onClick={this.hideButton}
            type="button"
            className="favorites__save"
          >
            Сохранить список
          </button>
        )}
        {!this.state.clickButton && <a>Ссылка:</a>}
        {!this.state.clickButton && (
          <Link to={"/list/1"}>{this.state.inputValue}</Link>
        )}
      </div>
    );
  }
}

export default Favorites;
