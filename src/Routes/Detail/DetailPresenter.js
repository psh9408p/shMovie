import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.PropTypes = {
  nowPlaying: PropTypes.array,
  pupular: PropTypes.array,
  upComing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
