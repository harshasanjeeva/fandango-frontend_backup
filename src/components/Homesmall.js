import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src:'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg' ,
    altText: '',
    caption: ''
  },
  {
    src: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209375/images/masterrepository/fandango/209375/ifeelpretty_onesheet_rgb_10.jpg',
    altText: '',
    caption: ''
  }
];

class Homesmall extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (      <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} height="100px" width="100px" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    );
    });

    return (<div>
        


        <br />
        <br />
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    </div>);
  }
}


export default withRouter((Homesmall));;