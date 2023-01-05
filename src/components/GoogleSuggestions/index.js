import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  getSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  search = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const result = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="suggestion-card">
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              className="search-input"
              onChange={this.search}
            />
          </div>
          <ul className="list-container">
            {result.map(item => (
              <SuggestionItem
                suggestionDetails={item}
                key={item.id}
                suggestionFunction={this.getSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
