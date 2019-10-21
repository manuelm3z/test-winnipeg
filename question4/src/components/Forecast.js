import React from 'react'
import { Divider } from 'antd'
import Single from './Single'
import './Forecast.css'

const reorderItems = (items) => {
  const ordered = {}
  items.forEach(item => {
    if (!ordered[new Date(item.dt_txt).toDateString()]) {
      ordered[new Date(item.dt_txt).toDateString()] = []
    }
    ordered[new Date(item.dt_txt).toDateString()].push({
      hour: new Date(item.dt_txt).toTimeString().substring(0, 5),
      temp: item.main.temp,
      icon: item.weather[0].icon,
      alt: item.weather[0].description
    })
  })
  return ordered
}

export default ({ items }) => {
  const reordered = reorderItems(items)
  return (
    <div
      style={{
        marginTop: 20
      }}
    >
      <Divider />
      <div style={{
        display: 'flex'
      }}>
        {Object.keys(reordered).map(key => {
          return (
            <div key={key} className="Day">
              {key}
              {reordered[key].map((item, index) => <Single key={index} {...item} />)}
            </div>
          )
        })}
      </div>
    </div>
  )
}