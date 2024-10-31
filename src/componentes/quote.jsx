import React from "react";
import '../hojas-de-estilo/quote.css';
import { connect } from "react-redux";

import { nextQuote } from '../redux/slices/quotes';

class Quote extends React.Component{
  constructor(props) {
    super(props);
    this.colors = ['red', 'yellow', 'green'];
    this.state = { state: true, currentColor:  this.colors[Math.floor(Math.random() * this.colors.length)]};
  }

  randomColor() {
    const index = Math.floor(Math.random() * this.colors.length);
    this.setState(prevState => ({
      ...prevState,
      currentColor: this.colors[index]
    }));
  }

  handleNextQuote() {
    this.setState({
      state: false
    });

    setTimeout(() => {
      this.setState({
        state: true
      });
      this.randomColor();
      this.props.nextQuoteAccion();
    }, 1000)
  }

  render() {
    return (
      <div className={`App d-flex flex-column justify-content-center align-items-center bg-color-${this.state.currentColor}`} >
        <div id='quote-box'>
          <p id='text' className={ `${this.state.state ? 'animacion-de-entrada' : 'animacion-de-salida'} ${this.state.currentColor}`}>
          <i class="bi bi-quote"></i> { this.props.quotes.currentQuote.quote }
          </p>
          <span id='author' className={ `${this.state.state ? 'animacion-de-entrada' : 'animacion-de-salida'} ${this.state.currentColor}`}>- { this.props.quotes.currentQuote.author }</span>
          <div>
            <a className={`bg-color-${this.state.currentColor}`} href='twitter.com/intent/tweet' id='tweet-quote' target='_blank'>
              <i className="bi bi-twitter"></i>
            </a>
            <a className={`bg-color-${this.state.currentColor}`} href='#' id='new-quote' onClick={() => this.handleNextQuote()}>New quote</a>
          </div>
        </div>
        <p className='me'>by BrandonLVV</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextQuoteAccion: () => {
      dispatch(nextQuote())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
