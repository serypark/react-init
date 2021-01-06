import React from 'react'

const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading-wrap">
      <div className="container animation-2">
        <div className="shape shape1" />
        <div className="shape shape2" />
        <div className="shape shape3" />
        <div className="shape shape4" />
      </div>
      <div className="text">확인중...</div>
    </div>
  )
}

export default Loading
