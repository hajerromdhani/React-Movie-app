import React from "react";

const loadingHoc = Component => {
  return class loading extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
    componentDidMount = () =>
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);

    render() {
      return this.state.loading ? (
        <div className="loader"> </div>
      ) : (
        <Component {...this.props} />
      );
    }
  };
};
export default loadingHoc;
