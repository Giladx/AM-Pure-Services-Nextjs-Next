import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPaths2fa90Resource from '../../resources/attachment-page-initial-paths-2fa90'
import attachmentPageInitialPropsDec68Resource from '../../resources/attachment-page-initial-props-dec68'

const Attachment = (props) => {
  return (
    <>
      <div className="attachment-container">
        <Head>
          <title>
            Attachment - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Attachment - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(AttachmentEntity) => (
            <>
              <div className="attachment-container1">
                <h1>{AttachmentEntity?.title?.rendered}</h1>
              </div>
            </>
          )}
          initialData={props.attachmentEntity}
          persistDataDuringLoading={true}
          key={props?.attachmentEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .attachment-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Attachment.defaultProps = {
  attachmentEntity: [],
}

Attachment.propTypes = {
  attachmentEntity: PropTypes.array,
}

export default Attachment

export async function getStaticPaths() {
  try {
    const response = await attachmentPageInitialPaths2fa90Resource({})
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
    const response = await attachmentPageInitialPropsDec68Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        attachmentEntity: response?.data?.[0],
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
