import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Div = (props) => {
  return (
    <>
      <div className="mySwiper swiper">
        <div className="swiper-wrapper">
          <div className="div-slide-1 swiper-slide">
            <span className="div-text">{props.slide1}</span>
          </div>
          <div className="div-slide-2 swiper-slide">
            <span className="div-text1">{props.slide11}</span>
          </div>
          <div className="div-slide-3 swiper-slide">
            <span className="div-text2">{props.slide111}</span>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

  <!-- Initialize Swiper -->
  <script>
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // pagination: {
      //  el: ".swiper-pagination",
      //  clickable: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  </script>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .div-slide-1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .div-text {
            width: 100%;
            height: auto;
            font-size: 5em;
            font-style: normal;
            font-weight: 700;
          }
          .div-slide-2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .div-text1 {
            width: 100%;
            height: auto;
            font-size: 5em;
            font-style: normal;
            font-weight: 700;
          }
          .div-slide-3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .div-text2 {
            width: 100%;
            height: auto;
            font-size: 5em;
            font-style: normal;
            font-weight: 700;
          }
          .div-root-class-name {
            top: 0px;
            left: 0px;
            position: static;
          }
          @media (max-width: 1200px) {
            .div-text {
              color: var(--dl-color-scheme-green);
              font-size: 4em;
            }
            .div-text1 {
              color: var(--dl-color-scheme-green);
              font-size: 4em;
            }
            .div-text2 {
              color: var(--dl-color-scheme-green);
              font-size: 4em;
            }
          }
          @media (max-width: 767px) {
            .div-root-class-name {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .div-root-class-name {
              height: 450px;
            }
          }
        `}
      </style>
    </>
  )
}

Div.defaultProps = {
  slide11: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  slide1: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  rootClassName: '',
  slide111: 'WE BELIEVE IN ONE WAY: INTEGRITY',
}

Div.propTypes = {
  slide11: PropTypes.string,
  slide1: PropTypes.string,
  rootClassName: PropTypes.string,
  slide111: PropTypes.string,
}

export default Div
