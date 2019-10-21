import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Layout, Typography, Input, Icon } from 'antd'
import { getWeather, getForecast } from './service'
import Weather from './components/Weather'
import Forecast from './components/Forecast'

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography
const { Search } = Input

function App() {
  const [cityInfo, setCityInfo] = useState({
    name: '',
    main: {},
    weather: {}
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [forecast, setForecast] = useState([])

  const onSearch = (city) => {
    setLoading(true)
    getWeather(city)
      .then(response => {
        if (response.cod === 200) {
          setCityInfo({
            ...cityInfo,
            name: response.name,
            main: response.main,
            weather: response.weather[0],
            sys: response.sys
          })
          setError(false)
          setLoading(false)
        } else {
          setError(response.message)
          setLoading(false)
        }
      })
    getForecast(city)
      .then(response => {
        if (response.cod === '200') {
          setForecast(response.list)
        }
      })
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Title style={{
          color: 'white'
        }}>Awesome Weather</Title>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{
          paddingTop: 10,
          paddingBottom: 10
        }}>
          <Search placeholder="Type the name of the city" style={{
            width: 300
          }} onSearch={onSearch} enterButton loading={loading} />
        </div>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {error && <Text type="warning">{error}</Text>}
          {loading && (
            <Icon type="loading" />
          )}
          {!error && cityInfo.name !== '' && !loading && (
            <Weather {...cityInfo} />
          )}
          {!error && cityInfo.name !== '' && !loading && (
            <Forecast items={forecast} />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Awesome Weather 2019</Footer>
    </Layout>
  );
}

export default App;