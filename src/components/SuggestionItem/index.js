import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionFunction} = props
  const {suggestion} = suggestionDetails

  const getSuggestion = () => {
    suggestionFunction(suggestion)
  }

  return (
    <li className="suggestions-list">
      <p className="suggestion-name">{suggestion}</p>
      <button className="btn" type="button" onClick={getSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
