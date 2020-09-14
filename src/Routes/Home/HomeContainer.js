import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcomming },
      } = await moviesApi.upcomming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcomming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { nowPlaying, upcomming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
