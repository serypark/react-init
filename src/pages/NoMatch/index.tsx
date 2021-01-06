import React from 'react'
import { Result, Button } from 'antd'

const NoMatch: React.FunctionComponent = () => {
  return (
    <div>
      <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
    </div>
  )
}

export default NoMatch
