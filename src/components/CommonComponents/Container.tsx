import React from 'react'

const Container = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="container" style={{margin: "0 auto"}}>{children}</div>
  )
}

export default Container
