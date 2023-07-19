import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const PackagesCard = (props) => {
  return (
    <>
      <div
        data-aos="fade-down"
        className={`packages-card-services-card services-card ${props.rootClassName} `}
      >
        <span className="packages-card-title">{props.Title}</span>
        <span className="packages-card-price">{props.Price}</span>
        <span className="packages-card-text">{props.Start}</span>
        <div className="packages-card-features">
          <span className="packages-card-details">{props.Details111}</span>
          <span className="packages-card-details1">{props.Details}</span>
          <span className="packages-card-details2">{props.Details1}</span>
          <span className="packages-card-details3">{props.Details11}</span>
          <span className="packages-card-details4">{props.Details1111}</span>
        </div>
        <div className="packages-card-button-res">
          <Link href="/order-rquest">
            <a className="packages-card-link button">{props.Button}</a>
          </Link>
          <span className="packages-card-restrictions">{props.Form}</span>
          <span className="packages-card-restrictions1">{props.Form1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .packages-card-services-card {
            height: auto;
          }
          .packages-card-title {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-price {
            width: 100%;
            font-size: 34px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 0px;
            background-image: linear-gradient(
              319deg,
              #efd002 0%,
              #31b74a 37%,
              #442ce0 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: rgba(255, 255, 255, 0);
          }
          .packages-card-text {
            width: 100%;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .packages-card-features {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-card-details {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details1 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details2 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details3 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details4 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .packages-card-button-res {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-card-link {
            color: var(--dl-color-scheme-green);
            width: 100%;
            transition: 0.3s;
            border-color: var(--dl-color-scheme-green);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .packages-card-link:hover {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            background-color: var(--dl-color-scheme-green);
          }
          .packages-card-root-class-name {
            display: none;
          }
          .packages-card-root-class-name1 {
            display: none;
          }
          @media (max-width: 1200px) {
            .packages-card-title {
              width: 100%;
              text-align: center;
            }
            .packages-card-price {
              width: 100%;
              font-size: 34px;
              text-align: center;
              margin-bottom: 0px;
            }
            .packages-card-text {
              width: 100%;
              font-style: normal;
              text-align: center;
              font-weight: 300;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .packages-card-details {
              width: 100%;
              text-align: center;
            }
            .packages-card-details1 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details2 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details3 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details4 {
              width: 100%;
              text-align: center;
            }
            .packages-card-link {
              color: var(--dl-color-scheme-green);
              width: 100%;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .packages-card-restrictions {
              margin-top: var(--dl-space-space-unit);
            }
            .packages-card-restrictions1 {
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

PackagesCard.defaultProps = {
  Form1: '** “Restrictions May Apply”',
  Title: 'Dryer vent',
  Button: 'Order Now',
  rootClassName: '',
  Price: '149$',
  Details11: '',
  Details1111: '',
  Form: '* Fill an Order Form',
  Details111: '',
  Start: 'Starting at',
  Details1: '',
  Details:
    'Create your ubest unique App development, crafted for your business needs.Create your ubest unique App development, crafted for your business needs.',
}

PackagesCard.propTypes = {
  Form1: PropTypes.string,
  Title: PropTypes.string,
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
  Price: PropTypes.string,
  Details11: PropTypes.string,
  Details1111: PropTypes.string,
  Form: PropTypes.string,
  Details111: PropTypes.string,
  Start: PropTypes.string,
  Details1: PropTypes.string,
  Details: PropTypes.string,
}

export default PackagesCard
