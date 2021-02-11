/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@material-ui/icons/Close";
import SuccessIcon from "@material-ui/icons/Check";
import Snackbar from "components/Snackbar/Snackbar.js";


class Notify extends React.Component {
  constructor(props) {
    super(props)
    this.state = { display: false }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if( this.props.open === true ){
        this.show();
      }
    }
  }

  hide(){
    if(this.state.display === true){
      this.setState({ display: false })
      this.props.onClose()
    }
  }

  show(){
    const self = this
    this.setState({ display: true })
    setTimeout(function() {
      self.hide();
    }, 5000);
  }

  render() {
    const { text, type } = this.props
    const { display } = this.state

    const color = type === "error" ? "danger" : "success"
    const icon = type === "error" ? ErrorIcon : SuccessIcon

    return (
      <Snackbar
        place="br"
        color={color}
        icon={icon}
        message={text}
        open={display}
        closeNotification={() => this.hide()}
        close
      />
    );
  }
}

Notify.propTypes = {
  type: PropTypes.oneOf(["error", "success", ""]),
  text: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func
};

export default Notify;
