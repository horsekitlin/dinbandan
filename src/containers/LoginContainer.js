import {connect} from "react-redux";
import LoginScene from "../components/LoginScene";
import { loginAction } from "../actions/loginActions";

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: payload => {
      dispatch(loginAction(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
