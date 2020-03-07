import React, { Component } from "react";
import { connect } from "react-redux";

import { loadImages } from "../../actions";

import "./styles.css";
import Button from "../Button";

class ImageGrid extends Component {
  render() {
    const { isLoading, images, error } = this.props;
    return (
      <div className="content">
        {images.length > 0 && (
          <section className="grid">
            {images.map(image => (
              <div
                key={image.id}
                className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            ))}
            <a onClick={this.props.loadImages}>Load Images</a>
          </section>
        )}
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button onClick={() => !isLoading && loadImages()} loading={isLoading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
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
