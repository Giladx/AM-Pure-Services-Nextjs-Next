import React from 'react'
import Head from 'next/head'

const Info = (props) => {
  return (
    <>
      <div className="info-container">
        <Head>
          <title>
            Info - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Info - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="info-dead-end">
          <h1 className="info-text">
            <span>Sorry your password could not be verified.</span>
            <br></br>
            <span>But you can always make yourself a sandcastle!</span>
            <br></br>
          </h1>
          <img alt="image" src="/fun1-1500w.gif" className="info-image" />
          <button
            type="button"
            onclick="history.back()"
            className="info-button button"
          >
            Go Back
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .info-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .info-dead-end {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            text-align: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .info-text {
            color: var(--dl-color-scheme-green);
            width: 100%;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .info-image {
            width: 35em;
            align-self: center;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .info-button {
            color: var(--dl-color-scheme-white);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            border-color: var(--dl-color-scheme-green);
            background-color: var(--dl-color-scheme-green);
          }
          @media (max-width: 479px) {
            .info-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Info
