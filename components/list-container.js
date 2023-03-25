import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const ListContainer = (props) => {
  return (
    <>
      <div className={`list-container-div ${props.rootClassName} `}>
        <div className="list-container-g-container g-container">
          <ul className="list-container-ul list">
            <li className="list-item">
              <h1 className="list-container-text">{props.slide122}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text1">{props.slide121}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text2">{props.slide1211}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text3">{props.slide12}</h1>
            </li>
          </ul>
        </div>
        <div>
          <DangerousHTML
            html={`<style>

:root {
  --w: 500;
  --speed: 3s;
}

li{
  list-style:none;
}

.g-container {
  width: 500px;
  /*margin: auto;*/
  height: 136px;
  line-height: 36px;
  font-size: 20px;
  background: #ffffff00;
  color: #000;
  overflow: hidden;
  /*border: 2px dashed #000;*/
  margin-top: 5em;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  --s:3;
}

ul li {
  flex-shrink: 0;
  width: 500px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  box-sizing: border-box;
}

ul {
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
}

ul li {
  /*white-space: nowrap;*/
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
          .list-container-div {
            display: flex;
          }
          .list-container-g-container {
            flex: 0 0 auto;
            width: 500px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .list-container-ul {
            width: 500px;
            align-self: flex-start;
          }
          .list-container-text {
            color: var(--dl-color-scheme-green);
            width: 500px;
            padding: var(--dl-space-space-twounits);
            font-size: 2em;
          }
          .list-container-text1 {
            color: var(--dl-color-scheme-green);
            width: 500px;
            padding: var(--dl-space-space-twounits);
            font-size: 2em;
          }
          .list-container-text2 {
            color: var(--dl-color-scheme-green);
            width: 500px;
            padding: var(--dl-space-space-twounits);
            font-size: 2em;
          }
          .list-container-text3 {
            color: var(--dl-color-scheme-green);
            width: 500px;
            padding: var(--dl-space-space-twounits);
            font-size: 2em;
          }
          .list-container-root-class-name {
            width: 500px;
            align-self: center;
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
  slide1211: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  slide122: '',
}

ListContainer.propTypes = {
  slide121: PropTypes.string,
  slide12: PropTypes.string,
  rootClassName: PropTypes.string,
  slide1211: PropTypes.string,
  slide122: PropTypes.string,
}

export default ListContainer
