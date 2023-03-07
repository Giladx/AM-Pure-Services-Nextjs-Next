import React from 'react'

import PropTypes from 'prop-types'

const Content = (props) => {
  return (
    <>
      <div className={`content-content ${props.rootClassName} `}>
        <div className="content-content-wrap">
          <span className="content-text">
            <span>At AM Pure Services</span>
            <br></br>
          </span>
          <span className="content-text03">
            <span>WE AIM TO THE BEST FOR YOU</span>
            <br></br>
          </span>
          <span className="content-text06">
            <span>Here are few good reasons why:</span>
            <br></br>
          </span>
          <span className="content-text09">
            <span>AVAILABILITY</span>
            <br className="Heading1"></br>
          </span>
          <span className="content-text12">
            <span>
              Weekends and same-day appointments, We are ready to deliver our
              services.
            </span>
            <br></br>
          </span>
          <span className="content-text15">
            <span>PROFESSIONALITY</span>
            <br></br>
          </span>
          <span className="content-text18">{props.text}</span>
          <span className="content-text19">
            <span>COMPETITIVE</span>
            <br></br>
          </span>
          <span className="content-text22">{props.text1}</span>
        </div>
        <div className="content-image">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="content-image1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .content-content {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
          }
          .content-content-wrap {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .content-text {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .content-text03 {
            width: 100%;
            font-size: 46px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .content-text06 {
            width: 100%;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
          }
          .content-text09 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .content-text12 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .content-text15 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .content-text18 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .content-text19 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .content-text22 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .content-image {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .content-image1 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .content-content-wrap {
              height: 654px;
            }
            .content-image {
              height: 720px;
            }
            .content-image1 {
              padding-bottom: 0px;
            }
          }
          @media (max-width: 1200px) {
            .content-content-wrap {
              height: 802px;
            }
            .content-text {
              font-size: 36px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 70px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .content-text06 {
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
            }
            .content-image {
              height: auto;
            }
            .content-image1 {
              width: 100%;
              height: 800px;
            }
          }
          @media (max-width: 991px) {
            .content-image1 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .content-text06 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .content-text12 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .content-text18 {
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .content-text22 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .content-image {
              display: none;
            }
            .content-image1 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .content-content-wrap {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Content.defaultProps = {
  image_alt: 'image',
  text: 'We train the best and brightest duct cleaning technicians that Michigan has to offer. All technicians are certified at AM Pure, allowing them to understand the needs of your air ducts.',
  image_src: '/playground_assets/undraw_all_the_data_h4ki.svg',
  rootClassName: '',
  text1:
    'We will beat any competitor prices and service for a limited time only!',
}

Content.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default Content
