import React, { Component } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";

class MainPage extends Component {
  state = {
    movies: [],
    myList: [],
  };

  loadMovies = async (filmName) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${filmName}&apikey=ab0b8749`
    );
    const apis = await response.json();
    this.setState({ movies: apis.Search });
  };

  addFilmToMyList = (item) => {
    const newList = [...this.state.myList];
    let isNew = true;
    newList.forEach((myList) => {
      if (myList.imdbID === item.imdbID) {
        isNew = false;
      }
    });
    if (isNew) {
      newList.push(item);
    }
    this.setState({ myList: newList });
  };

  deleteFilmFromMyList = (film) => {
    const listWithOutFilm = this.state.myList.filter((el) => {
      return el.imdbID !== film.imdbID;
    });
    this.setState({ myList: listWithOutFilm });
  };

  render() {
    return (
      <div className="main-page">
        <Header />
        <main className="main-page__content">
          <section className="main-page__main-section">
            <div className="main-page__search-box">
              <SearchBox search={this.loadMovies} />
            </div>
            <div className="main-page__movies">
              <Movies movies={this.state.movies} addTo={this.addFilmToMyList} />
            </div>
          </section>
          <aside className="main-page__favorites">
            <Favorites
              myList={this.state.myList}
              deleteFilm={this.deleteFilmFromMyList}
            />
          </aside>
        </main>
      </div>
    );
  }
}

export default MainPage;