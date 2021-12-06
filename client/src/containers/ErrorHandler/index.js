import React from "react";
import Error from "./Error";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error,errorInfo)  // logger here
  }
  render() {
    if(this.state.error) {
      return <Error error={this.state.error}/>
    }
    return this.props.children;
  }
}
export default ErrorHandler;
