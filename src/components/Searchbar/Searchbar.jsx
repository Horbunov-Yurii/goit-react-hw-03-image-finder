import PropTypes from 'prop-types';
import { Component } from 'react';
import {SearchBar, SerchForm, Input,SearchBtn,SerchFormBtnLabel,} from './Serchbar.styled'

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
  };

  render() {
    return (
      <>
        <SearchBar>
          <SerchForm className="form" onSubmit={this.hendleSubmit}>
            <SearchBtn type="submit" className="button">
              <SerchFormBtnLabel>Search</SerchFormBtnLabel>
            </SearchBtn>

            <Input
              value={this.state.text}
              className="input"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              onChange={this.hendleChange}
            />
          </SerchForm>
        </SearchBar>
      </>
    );
  }
}

Searchbar.propTypes = {
  onChange: PropTypes.func,
};
