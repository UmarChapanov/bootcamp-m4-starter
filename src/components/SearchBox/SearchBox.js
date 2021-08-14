import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    searchLine: "",
  };

  sumbitSearch = () => {
    this.props.search(this.state.searchLine);
  };

  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    this.sumbitSearch();
  };
  render() {
    console.log(this.state.searchLine);
    const { searchLine } = this.state;
    const { searchLineChangeHandler, searchBoxSubmitHandler } = this;

    return (
      <div className="search-box">
        <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={searchLineChangeHandler}
            />
          </label>
          <button
            onClick={this.sumbitSearch}
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;