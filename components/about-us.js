import React from 'react'

import PropTypes from 'prop-types'

const AboutUs = (props) => {
  return (
    <>
      <div
        className={`about-us-about section-container ${props.rootClassName} `}
      >
        <div className="about-us-max-width max-content-container">
          <div className="about-us-text-container">
            <span className="about-us-text">{props.text}</span>
            <h2 className="about-us-text01 Heading1">
              <span>Why us?</span>
              <br></br>
            </h2>
            <span className="about-us-text04">{props.text1}</span>
            <div className="about-us-checklist">
              <div className="about-us-check-item">
                <svg viewBox="0 0 1024 1024" className="about-us-icon">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text05">{props.text2}</span>
              </div>
              <div className="about-us-check-item1">
                <svg viewBox="0 0 1024 1024" className="about-us-icon02">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text06">{props.text3}</span>
              </div>
              <div className="about-us-check-item2">
                <svg viewBox="0 0 1024 1024" className="about-us-icon04">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text07">{props.text4}</span>
              </div>
              <div className="about-us-check-item3">
                <svg viewBox="0 0 1024 1024" className="about-us-icon06">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text08">{props.text5}</span>
              </div>
              <div className="about-us-check-item4">
                <svg viewBox="0 0 1024 1024" className="about-us-icon08">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text09">{props.text6}</span>
              </div>
              <div className="about-us-check-item5">
                <svg viewBox="0 0 1024 1024" className="about-us-icon10">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text10">{props.text7}</span>
              </div>
            </div>
          </div>
          <div className="about-us-image-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              loading="lazy"
              className="about-us-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-us-about {
            position: relative;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .about-us-max-width {
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text-container {
            flex: 1;
            width: 40%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .about-us-text {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .about-us-text01 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-us-text04 {
            color: var(--dl-color-scheme-black80);
            font-size: 24px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .about-us-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-check-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text05 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon02 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text06 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon04 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text07 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon06 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text08 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon08 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text09 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item5 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-us-icon10 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text10 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-image {
            flex: 1;
            width: 564px;
            height: 416px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }

          @media (max-width: 1600px) {
            .about-us-image {
              width: 500px;
              height: 334px;
            }
          }
          @media (max-width: 991px) {
            .about-us-max-width {
              flex-direction: column;
            }
            .about-us-text-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-image-container {
              width: 100%;
            }
            .about-us-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

AboutUs.defaultProps = {
  image_alt: 'image',
  text3: 'Availability',
  text1: 'We are a full air duct cleaning service',
  image_src: '/playground_assets/photo-1621905252507-b35492cc74b4-1000w.webp',
  text2: 'Quality service all time',
  text7: 'Support in any implementation',
  text4: 'FREE Estimate',
  rootClassName: '',
  text: 'about us',
  text6: 'integrity',
  text5: 'Over 10 years in the business',
}

AboutUs.propTypes = {
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
}

export default AboutUs
