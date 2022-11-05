import React from "react"
import PropTypes from "prop-types"

function Home ({ children }) {
  return (
	<main className="container mt-3">
	 {children}
	</main>
  )
}

Home.propTypes = { children: PropTypes.node }

export default Home
