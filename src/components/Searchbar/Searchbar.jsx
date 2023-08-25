import { Component } from "react";


export class Searchbar extends Component {
  state = {
    text: '',
  };

  hendleChange = event => {
    this.setState({ text: event.target.value });
  };

   hendleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    if (!text.trim()) {
      alert('enter text');
      return;
    }
    this.props.onChangeQuery(text);
     this.setState({ text: '' });
}

  render() {
    return (
        <>
      <header className="searchbar">
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.text}
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.hendleChange}
          />
        </form>
      </header>
      </>
    )
  }
}



