import PropTypes from 'prop-types'

function Header({ title, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor
  }

  return (
    <header style={ headerStyles }>
      <div className="container">
        <h1>{ title }</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: "Feedback App",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ffa695'
}

Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header