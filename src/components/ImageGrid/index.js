import React, { Component } from "react";
import { connect } from "react-redux";

import { loadImages } from "../../actions";

import "./styles.css";
import Button from "../Button";
import Stats from "../Stats";

class ImageGrid extends Component {
  render() {
    const { isLoading, images, error, loadImages,imageStats } = this.props;

    return (
      <div className="content">
        <section className="grid">
          {images.map(image => {
            return (
              <div
                key={image.id}
                className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <Stats stats={imageStats} />
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            );
          })}
        </section>

        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button
          onClick={() => loadImages()}
          children="Load Images"
          loading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //state reducer dan geliyor reducers/index.js
  const { isLoading, images, error } = state;
  return {
    isLoading,
    images,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
