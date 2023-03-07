import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Blog from '../components/blog'
import Banner from '../components/banner'
import Footer1 from '../components/footer1'

const ServicesTest = (props) => {
  return (
    <>
      <div className="services-test-container">
        <Head>
          <title>Services-Test - AM Pure Services Nextjs</title>
          <meta
            property="og:title"
            content="Services-Test - AM Pure Services Nextjs"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/22dabe9a-fd15-434a-ba18-d5a5efd124ab/9b2dfd80-db34-45ba-a7c4-c1045c6ffc8a?org_if_sml=1"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name4"></Navigation>
        <div className="services-test-main">
          <div className="services-test-title">
            <span className="services-test-text">
              <span>SERVICES</span>
              <br></br>
            </span>
          </div>
        </div>
        <Blog rootClassName="blog-root-class-name7"></Blog>
        <Banner rootClassName="banner-root-class-name13"></Banner>
        <Footer1 rootClassName="footer1-root-class-name3"></Footer1>
      </div>
      <style jsx>
        {`
          .services-test-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-test-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 0px;
          }
          .services-test-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .services-test-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.3em;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .services-test-text {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .services-test-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ServicesTest
