import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Irc = (props) => {
  return (
    <>
      <div className="irc-container">
        <Head>
          <title>
            Irc - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Irc - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="irc-div">
          <DangerousHTML
            html={`<iframe src="https://kiwiirc.com/client/irc.kiwiirc.com/?nick=Tech1|?#AMPS" style="border:0;top:0; width:100%; height:100vh;"></iframe>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .irc-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .irc-div {
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default Irc
