import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import pagePageInitialPaths5b823Resource from '../../../resources/page-page-initial-paths-5b823'
import pagePageInitialPropsC4a86Resource from '../../../resources/page-page-initial-props-c4a86'

const Page11 = (props) => {
  return (
    <>
      <div className="page11-container">
        <Head>
          <title>
            Page1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Page1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PageEntities) => (
                  <>
                    <div className="page11-container1">
                      <h1>{PageEntities?.title?.rendered}</h1>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.pageEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .page11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Page11.defaultProps = {
  pageEntities: [],
}

Page11.propTypes = {
  pageEntities: PropTypes.array,
}

export default Page11

export async function getStaticPaths() {
  try {
    const response = await pagePageInitialPaths5b823Resource({})
    const headers = Object.fromEntries(response)
    const totalCount = headers?.['x-wp-total']
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
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
    const response = await pagePageInitialPropsC4a86Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        pageEntities: response,
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
