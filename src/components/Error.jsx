import React from 'react'
import PropTypes from 'prop-types'

const Error = ({message}) => (
    <p className="alert alert-danger error">{message || "There was an error"}</p>
)

Error.propTypes = {
    message: PropTypes.string,
}
export default Error