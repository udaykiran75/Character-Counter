import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'
import CharacterItem from './CharacterItem'

class App extends Component {
  state = {userinput: '', inputsList: []}

  onChangeUserInput = event => {
    this.setState({userinput: event.target.value})
  }

  onAddNewInput = event => {
    event.preventDefault()
    const {userinput} = this.state
    const count = userinput.length
    const newObject = {text: `${userinput} : ${count}`, id: v4()}
    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, newObject],
      userinput: '',
    }))
  }

  render() {
    const {userinput, inputsList} = this.state
    const lenghtOfList = inputsList.length
    return (
      <div className="app-bgcontainer">
        <div className="counter-container">
          <div className="charecter-counter-div">
            <div className="count-heading-div">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {lenghtOfList > 0 ? (
              <ul>
                {inputsList.map(eachObject => (
                  <CharacterItem key={eachObject.id} inputObject={eachObject} />
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt=" no user inputs"
                className="nouser-input-image"
              />
            )}
          </div>
          <div className="characters-enter-div">
            <h1 className="charecter-heading">Character Counter</h1>
            <form
              className="inputs-add-container"
              onSubmit={this.onAddNewInput}
            >
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input-container"
                value={userinput}
                onChange={this.onChangeUserInput}
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default App
