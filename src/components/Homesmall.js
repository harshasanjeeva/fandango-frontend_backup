import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import history from "./History";
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


    const responsive = {
        0: {
          items: 1
        },
        300: {
          items: 2
        },
        600: {
          items: 3
        },
        900: {
            items: 4
          },
        1024: {
            items: 5
          }
      };
  



    const slides = items.map((item) => {
      return (      <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} height="150px" width="120px" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    );
    });

    return (<div style={{marginLeft:"70px",width:"1000px"}}>
        

        <AliceCarousel responsive={responsive} style={{width:"800px",height:"200px"}}>
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg" 
        className="yours-custom-class" onClick={() => {
                history.push('/login')
        }} />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" className="yours-custom-class"  onClick={() => {
          history.push('/login')
  }}/>
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209375/images/masterrepository/fandango/209375/ifeelpretty_onesheet_rgb_10.jpg" className="yours-custom-class"
        onClick={() => {
          history.push('/login')
  }}
        
        />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209376/images/masterrepository/fandango/209376/kings-2017.jpg" className="yours-custom-class" 
        onClick={() => {
          history.push('/login')
  }}
        
        
        />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/208107/images/masterrepository/fandango/208107/letthesunshinein-2018.jpg" className="yours-custom-class" 
        onClick={() => {
          history.push('/login')
  }}
        
        />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg" className="yours-custom-class"
        
        onClick={() => {
          history.push('/login')
  }}
        
        />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/204139/images/masterrepository/fandango/204139/rpo_new_main_vert_dom_2764x.jpg" className="yours-custom-class" 
        
        onClick={() => {
          history.push('/login')
  }}
  />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209375/images/masterrepository/fandango/209375/ifeelpretty_onesheet_rgb_10.jpg" className="yours-custom-class"
        onClick={() => {
          history.push('/login')
  }}
        
        />
        <img src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209375/images/masterrepository/fandango/209375/ifeelpretty_onesheet_rgb_10.jpg" className="yours-custom-class" 
        onClick={() => {
          history.push('/login')
  }}
        
        
        />

      </AliceCarousel>
    </div>);
  }
}


export default withRouter((Homesmall));;