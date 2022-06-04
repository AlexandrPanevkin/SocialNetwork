import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login, isAuth } = response.data.data;
        this.props.setAuthUserData(id, email, login, isAuth);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
