import './index.css'

const CharacterItem = props => {
  const {inputObject} = props
  return (
    <li>
      <p className="userinputs-text">{inputObject.text}</p>
    </li>
  )
}
export default CharacterItem
