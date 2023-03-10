import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Div = (props) => {
  return (
    <>
      <div className="mySwiper swiper div-div">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <strong className="div-text">{props.slide1}</strong>
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
          .div-text {
            color: var(--dl-color-scheme-green);
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
          }
          @media (max-width: 767px) {
            .div-root-class-name {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .div-div {
              height: auto;
            }
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
  slide1: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  rootClassName: '',
}

Div.propTypes = {
  slide1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Div
