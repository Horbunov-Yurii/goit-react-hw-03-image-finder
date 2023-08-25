import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from '../service/galleryService'
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";




export class App extends Component {
  state = {
    hits: [],
    query: '',
    page: '',
    isEmpty: false,
    showBtn: false,
    isError: '',
    isLoading: false,
    src: '',
    alt: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      getImages(query, page)
        .then(({ hits, totalHits }) => {
          if (!totalHits) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({ isError: error.message });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  changeQuery = query => {
    this.setState({ query, hits: [], page: 1, isEmpty: false, isError: '' });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = ({ src, alt }) => {
    this.setState({ src, alt });
  };

  render() {
    const { hits, isEmpty, showBtn, isError, src, alt, isLoading } = this.state;
    return (
      <>
        <Searchbar onChangeQuery={this.changeQuery} />
        <ImageGallery hits={hits} openModal={this.handleOpenModal} />
        {showBtn && <Button handleClick={this.loadMore} text="Load more" />}
        {isEmpty && <p>Enter a valid request</p>}
        {isError && <p>{isError}</p>}
        {src && <Modal closeModal={this.handleOpenModal} src={src} alt={alt} />}
        {isLoading && <Loader />}
      </>
    );
  }
}