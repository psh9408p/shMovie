import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, pupular, airingToday, loading, error }) =>
  null;

TVPresenter.PropTypes = {
  topRated: PropTypes.array,
  pupular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
