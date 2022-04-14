import React, { Component } from 'react'

export default class OutsideWrapper extends Component {
    constructor(props) {
      super(props);
  
      this.wrapperRef = React.createRef();
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  
    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.props.action();
      }
    }
  
    render() {
      return <div ref={this.wrapperRef}>{this.props.children}</div>;
    }
  }
