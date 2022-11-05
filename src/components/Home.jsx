import React from "react"
import PropTypes from "prop-types"

function Home ({ children }) {
  return (
	<div className="container">
	 {children}
	</div>
  )
}

Home.propTypes = { children: PropTypes.node }

export default Home
