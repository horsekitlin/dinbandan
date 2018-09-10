import {connect} from "react-redux";
import App from "../App";
import { loginAction } from "../actions/loginActions";
import { chagePageAction } from "../actions/routesActions";

const mapStateToProps = ({auth, routes}) => ({
  auth,
  routes
});

const mapDispatchToProps = dispatch => {
  return {
    handleChangePage: payload => {
      dispatch(chagePageAction(payload));
    },
    handleLogin: payload => {
      dispatch(loginAction(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
