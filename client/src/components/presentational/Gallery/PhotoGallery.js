import React, { Component } from "react";
import Nav from "../Nav";
import Footer from "./Footer";
import ReactPhotoGallery from "react-photo-gallery";
import Lightbox from "react-images";
import Measure from "react-measure";

export default class PhotoGallery extends Component {
  state = {
    currentImage: 0,
    width: -1
  };

  componentWillMount() {
    const { setCloudData, fetchTheme } = this.props;
    setCloudData(fetchTheme);
  }

  renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
  });
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    const width = this.state.width;
    const data = [...this.props.cloudData].reduce((a, b) => a.concat(b), []);
    // Renombrar la URL segura de Cloudinary por src, prop-name requerida por react-photo-gallery
    const fotos = data.map(foto => this.renameProp("secure_url", "src", foto));

    return (
      <Measure
        bounds
        onResize={contentRect =>
          this.setState({ width: contentRect.bounds.width })
        }
      >
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 3;
          }
          return (
            <div className="image-grid__container" ref={measureRef}>
              <Nav />
              <ReactPhotoGallery
                photos={fotos}
                onClick={this.openLightbox}
                columns={columns}
              />
              <Lightbox
                images={fotos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                imageCountSeparator={"de"}
              />
              <Footer resetGallery={this.props.resetGallery}>
                <span className="fake-link">
                  <i className="fa fa-caret-left" /> Volver
                </span>
              </Footer>
            </div>
          );
        }}
      </Measure>
    );
  }
}
