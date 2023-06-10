import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>
            Page - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Page - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/22dabe9a-fd15-434a-ba18-d5a5efd124ab/9b2dfd80-db34-45ba-a7c4-c1045c6ffc8a?org_if_sml=1"
          />
        </Head>
        <span className="page-text">404</span>
        <span className="page-text1">Page Not Found</span>
        <Link href="/">
          <a className="page-link">
            <span>Go Back -&gt;</span>
            <br></br>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text {
            font-size: 45vh;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
          }
          .page-text1 {
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-link {
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-weight: 900;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .page-text {
              font-size: 45vh;
            }
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .page-text {
              font-size: 40vh;
              align-self: center;
            }
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .page-text {
              font-size: 30vh;
              align-self: center;
            }
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .page-text {
              font-size: 20vh;
              align-self: center;
            }
            .page-text1 {
              width: 100%;
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
