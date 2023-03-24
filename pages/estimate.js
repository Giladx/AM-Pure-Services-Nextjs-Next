import React from 'react'
import Head from 'next/head'

const Estimate = (props) => {
  return (
    <>
      <div className="estimate-container">
        <Head>
          <title>Estimate - AM Pure Services Nextjs</title>
          <meta
            property="og:title"
            content="Estimate - AM Pure Services Nextjs"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/22dabe9a-fd15-434a-ba18-d5a5efd124ab/9b2dfd80-db34-45ba-a7c4-c1045c6ffc8a?org_if_sml=1"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .estimate-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Estimate
