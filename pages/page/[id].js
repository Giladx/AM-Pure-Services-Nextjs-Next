import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import pagePageInitialPathsFd805Resource from '../../resources/page-page-initial-paths-fd805'
import pagePageInitialProps32903Resource from '../../resources/page-page-initial-props-32903'

const Page2 = (props) => {
  return (
    <>
      <div className="page2-container">
        <Head>
          <title>
            Page2 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Page2 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(PageEntity) => (
            <>
              <div className="page2-container1">
                <h1>{PageEntity?.title?.rendered}</h1>
                <div className="page2-container2">
                  <Script
                    html={PageEntity?.content?.rendered}
                    className="page2-html-node"
                  ></Script>
                </div>
              </div>
            </>
          )}
          initialData={props.pageEntity}
          persistDataDuringLoading={true}
          key={props?.pageEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .page2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page2-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .page2-container2 {
            width: 100%;
            align-self: stretch;
          }
          .page2-html-node {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Page2.defaultProps = {
  pageEntity: [],
}

Page2.propTypes = {
  pageEntity: PropTypes.array,
}

export default Page2

export async function getStaticPaths() {
  try {
    const response = await pagePageInitialPathsFd805Resource({})
    return {
      paths: (response || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await pagePageInitialProps32903Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        pageEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
