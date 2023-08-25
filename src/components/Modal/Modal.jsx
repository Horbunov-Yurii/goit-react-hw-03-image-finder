
import { OverLay } from 'components/Overlay/Overlay';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modal_root = document.getElementById('modal_root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleOverLay = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal({ src: '', alt: '' });
    }
  };

  handleEscape = e => {
    if (e.key === 'Escape') {
      this.props.closeModal({ src: '', alt: '' });
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <>
        {createPortal(
          <OverLay onClick={this.handleOverLay}>
            <img src={src} alt={alt} width="70%" />
          </OverLay>,
          modal_root
        )}
      </>
    );
  }
}
