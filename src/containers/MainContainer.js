import {connect} from "react-redux";

import { withRouter } from 'react-router-dom'
import Main from "../MainScene";
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
