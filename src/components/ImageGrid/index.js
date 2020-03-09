import React, { Component } from "react";
import { connect } from "react-redux";

import { loadImages } from "../../actions";

import "./styles.css";
import Button from "../Button";

class ImageGrid extends Component {

  render() {
    const { isLoading, images, error, loadImages } = this.props;

    return (
      <div className="content">
        <section className="grid">
          {images.map(image => {
            console.log(image.id);
            
            return (
              <div
                key={image.id}
                className={`item item-${Math.ceil(image.height / image.width)}`}
              >
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
