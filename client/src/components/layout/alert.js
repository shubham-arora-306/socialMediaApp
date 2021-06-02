//racfp

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.AlertReducer,
});

export default connect(mapStateToProps)(alert);
