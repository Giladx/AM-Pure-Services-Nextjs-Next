import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const ListContainer = (props) => {
  return (
    <>
      <div className={`list-container-div ${props.rootClassName} `}>
        <div>
          <DangerousHTML
            html={`<style>

:root {
  --w: 720;
  --speed: 3s;
}

li{
  list-style:none;
}

.g-container {
  width: 720px;
  height: 136px;
  line-height: 36px;
  background: #ffffff00;
  overflow: hidden;
  margin-top: 5em;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  --s:5;
}

ul li {
  flex-shrink: 0;
  width: 720px;
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

@media screen and (max-width: 479px){
  ul li {
  width: 369px;
}

.g-container {
  width: 360px;
}
:root {
  --w: 360;
}}
</style>`}
          ></DangerousHTML>
        </div>
        <div className="list-container-g-container g-container">
          <ul className="list-container-ul list">
            <li className="list-item">
              <h1 className="list-container-text">{props.slide121}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text1">{props.slide1211}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-heading">{props.slide123}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-heading1">{props.slide12}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-heading2">{props.slide124}</h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text2">{props.slide1212}</h1>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .list-container-div {
            display: flex;
          }
          .list-container-g-container {
            flex: 0 0 auto;
            width: 720px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .list-container-ul {
            width: 720px;
            align-self: flex-start;
            align-items: center;
          }
          .list-container-text {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-text1 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-heading {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            padding-bottom: 32px;
          }
          .list-container-heading1 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-heading2 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-text2 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-root-class-name {
            width: 500px;
            align-self: center;
          }

          @media (max-width: 1600px) {
            .list-container-g-container {
              width: 720px;
            }
            .list-container-ul {
              width: 720px;
              align-items: center;
            }
            .list-container-text {
              width: 720px;
            }
            .list-container-text1 {
              width: 720px;
            }
            .list-container-heading {
              width: 720px;
            }
            .list-container-heading1 {
              width: 720px;
            }
            .list-container-heading2 {
              width: 720px;
            }
            .list-container-text2 {
              width: 720px;
            }
          }
          @media (max-width: 479px) {
            .list-container-div {
              width: auto;
              justify-content: center;
            }
            .list-container-g-container {
              width: 360px;
            }
            .list-container-ul {
              width: 360px;
            }
            .list-container-text {
              width: 360px;
              font-size: 3em;
            }
            .list-container-text1 {
              width: 360px;
              font-size: 3em;
            }
            .list-container-heading {
              width: 360px;
              font-size: 3em;
            }
            .list-container-heading1 {
              width: 360px;
              font-size: 3em;
            }
            .list-container-heading2 {
              width: 360px;
              font-size: 3em;
            }
            .list-container-text2 {
              width: 360px;
              font-size: 3em;
            }
          }
        `}
      </style>
    </>
  )
}

ListContainer.defaultProps = {
  slide121: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  slide12: 'WE WILL GIVE YOU BEST PERFORMANCE',
  rootClassName: '',
  slide1211: 'WE CARE FOR PEOPLE HEALTH',
  slide123: 'WE BELIEVE IN SAVING ENERGY',
  slide124: 'PURE CLEAN AIR DUCT FOR HEALTHY LIFE',
  slide1212: 'WE BELIEVE IN ONE WAY: INTEGRITY',
}

ListContainer.propTypes = {
  slide121: PropTypes.string,
  slide12: PropTypes.string,
  rootClassName: PropTypes.string,
  slide1211: PropTypes.string,
  slide123: PropTypes.string,
  slide124: PropTypes.string,
  slide1212: PropTypes.string,
}

export default ListContainer
