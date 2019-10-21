import React from 'react'
import { Typography, Divider } from 'antd'
import { kevinToCelcius } from '../tempConverter'

const { Title, Text } = Typography

export default ({ name, sys, weather, main }) => (
  <div
    style={{
      textAlign: 'center'
    }}
    >
    <Title level={2}>{`${name}, ${sys.country}`}</Title>
    <Divider />
    <div>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.main} />
      <div
        style={{
          display: 'flex',
          marginTop: 10
        }}>
          <div style={{
            width: '30%'
          }}>
            <div>
              <Text>Humidity {main.humidity}%</Text>
            </div>
          </div>
      </div>
    </div>
    <Divider />
    <div
      style={{
        display: 'flex'
      }}>
        <div style={{
          width: '30%'
        }}>
          <div>
            <Text>Min</Text>
          </div>
          <div>
            <Text>{kevinToCelcius(main.temp_min)} ºC</Text>
          </div>
        </div>
        <div style={{
          width: '30%'
        }}>
          <div>
            <Text strong style={{
              fontSize: 20
            }}>{kevinToCelcius(main.temp)} ºC</Text>
          </div>
        </div>
        <div style={{
          width: '30%'
        }}>
          <div>
            <Text>Max</Text>
          </div>
          <div>
            <Text>{kevinToCelcius(main.temp_max)} ºC</Text>
          </div>
        </div>
    </div>
  </div>
)