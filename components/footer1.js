import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer1 = (props) => {
  return (
    <>
      <div
        className={`footer1-footer section-container ${props.rootClassName} `}
      >
        <div className="footer1-max-width max-content-container">
          <div className="footer1-top-part">
            <div className="footer1-links-container">
              <div className="footer1-product-container">
                <span className="footer1-text">{props.text1}</span>
                <Link href="/monthly-specials">
                  <a className="footer1-link">{props.text2}</a>
                </Link>
                <Link href="/air-duct-cleaning">
                  <a className="footer1-link01">{props.text3}</a>
                </Link>
                <Link href="/dryer-vent">
                  <a className="footer1-link02">{props.text4}</a>
                </Link>
                <Link href="/uv-light">
                  <a className="footer1-link03">{props.text5}</a>
                </Link>
              </div>
            </div>
            <div className="footer1-navigate-container">
              <span className="footer1-text01">{props.text6}</span>
              <Link href="/about">
                <a className="footer1-link04">
                  <span>ABOUT</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/restrictions">
                <a className="footer1-link05">{props.text7}</a>
              </Link>
              <Link href="/contact">
                <a className="footer1-link06">{props.text8}</a>
              </Link>
            </div>
            <div className="footer1-contact-container">
              <span className="footer1-text04">{props.text9}</span>
              <a href="tel:+18885031722" className="footer1-link07">
                {props.text11}
              </a>
              <a
                href="https://www.google.com/maps/place/Farmington+Hills,+MI+48331,+USA/@42.4981031,-83.4425518,13z/data=!3m1!4b1!4m5!3m4!1s0x8824b01110963c0d:0xb9db7893378fa2e6!8m2!3d42.508645!4d-83.4109834"
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link08"
              >
                <span>Farmington Hills,</span>
                <br></br>
              </a>
              <a
                href="https://www.google.com/maps/place/Farmington+Hills,+MI+48331,+USA/@42.4981031,-83.4425518,13z/data=!3m1!4b1!4m5!3m4!1s0x8824b01110963c0d:0xb9db7893378fa2e6!8m2!3d42.508645!4d-83.4109834"
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link09"
              >
                <span>MI 48331, USA</span>
                <br></br>
              </a>
              <a
                href="mailto:service@ampureservices.com?subject=Site Service Request"
                className="footer1-link10"
              >
                {props.text10}
              </a>
            </div>
            <div className="footer1-subscribe-container">
              <span className="footer1-text09">{props.text}</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder}
                className="footer1-textinput input"
              />
              <button className="button-primary button">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="footer1-separator"></div>
        <footer className="footer1-max-width1 max-content-container">
          <Link href="/">
            <a>
              <img
                alt={props.image_alt}
                src={props.image_src}
                width="150"
                height="59"
                className="footer1-image"
              />
            </a>
          </Link>
          <span className="footer1-text10">
            <span>
              All rights reserved @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="footer1-text12">am pure services</span>
            <span className="footer1-text13">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="footer1-text15">011.ninja</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .footer1-footer {
            position: relative;
          }
          .footer1-max-width {
            padding-left: 0px;
            padding-right: 0px;
          }
          .footer1-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link03 {
            text-decoration: none;
          }
          .footer1-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text01 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link06 {
            text-decoration: none;
          }
          .footer1-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text04 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .footer1-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .footer1-link10 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer1-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer1-text09 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-textinput {
            outline: none;
            align-self: stretch;
            padding-top: 4px;
            border-color: rgba(0, 0, 0, 0.1);
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 4px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .footer1-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer1-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-text10 {
            align-self: center;
          }
          .footer1-text12 {
            font-weight: 700;
          }
          .footer1-text13 {
            font-weight: 700;
          }
          .footer1-text15 {
            font-weight: 700;
          }

          .footer1-root-class-name1 {
            display: none;
          }
          .footer1-root-class-name2 {
            display: none;
          }

          @media (max-width: 1600px) {
            .footer1-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 1200px) {
            .footer1-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer1-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-link07 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer1-link08 {
              text-transform: uppercase;
              text-decoration: none;
            }
            .footer1-link09 {
              text-transform: uppercase;
            }
            .footer1-link10 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
          }
          @media (max-width: 767px) {
            .footer1-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer1-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer1-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer1-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer1-links-container {
              position: relative;
            }
            .footer1-product-container {
              width: auto;
            }
            .footer1-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer1-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .footer1-link10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-max-width1 {
              flex-direction: column;
            }
            .footer1-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer1-text10 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text3: 'AIR DUCT CLEANING',
  text1: 'Product',
  textinput_placeholder: 'Enter your e-mail address',
  rootClassName: '',
  button: 'Subscribe',
  text6: 'Info',
  text8: 'CONTACT',
  text4: 'DRYER VENT CLEANING',
  image_alt: 'image',
  text10: 'SERVICE@AMPURESERVICES.COM',
  text9: 'Contact Us',
  text2: 'MONTHLY SPECIALS',
  text5: 'UV LIGHT',
  text: 'Subscribe to our newsletter',
  text11: '(888) 503-1722',
  image_src: '/playground_assets/logo-651.svg',
  text7: 'RESTRICTIONS',
}

Footer1.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  image_alt: PropTypes.string,
  text10: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  image_src: PropTypes.string,
  text7: PropTypes.string,
}

export default Footer1
