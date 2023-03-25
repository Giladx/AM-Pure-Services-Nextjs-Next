import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const ListContainer = (props) => {
  return (
    <>
      <div className={`g-container list-container-div ${props.rootClassName} `}>
        <ul className="list-container-ul list">
          <li className="list-item">
            <h1 className="list-container-text">{props.slide121}</h1>
          </li>
          <li className="list-item">
            <h1 className="list-container-text1">{props.slide12}</h1>
          </li>
          <li className="list-item">
            <h1 className="list-container-text2">{props.slide122}</h1>
          </li>
        </ul>
        <div>
          <DangerousHTML
            html={`<style>
.g-container {
  width: 300px;
  margin: auto;
  height: 36px;
  line-height: 36px;
  font-size: 20px;
  background: #ffffff00;
  color: #000;
  overflow: hidden;
  border: 2px dashed #000;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
}

ul li {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  box-sizing: border-box;
}

ul {
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
}

ul li {
  white-space: nowrap;
  cursor: pointer;
  animation: liMove calc(var(--speed)) infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(var(--s) * var(--w) * -1px), 0);
  }
}

@keyframes liMove {
  0% {
    transform: translate(0, 0px);
  }
  80%,
  100%  {
    transform: translate(calc(var(--w) * -1px), 0);
  }
}
</style>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .list-container-ul {
            -s: 6;
          }
          .list-container-text {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .list-container-text1 {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .list-container-text2 {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .list-container-root-class-name {
            align-self: center;
          }
          @media (max-width: 1600px) {
            .list-container-text {
              font-size: 3em;
            }
            .list-container-text1 {
              font-size: 3em;
            }
            .list-container-text2 {
              font-size: 3em;
            }
          }
          @media (max-width: 479px) {
            .list-container-div {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ListContainer.defaultProps = {
  slide121: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  slide12: 'PURE CLEAN AIR DUCT FOR HEALTHY LIFE',
  rootClassName: '',
  slide122: 'PURE CLEAN AIR DUCT FOR HEALTHY LIFE',
}

ListContainer.propTypes = {
  slide121: PropTypes.string,
  slide12: PropTypes.string,
  rootClassName: PropTypes.string,
  slide122: PropTypes.string,
}

export default ListContainer
