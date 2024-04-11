import css from '../SearchBox/SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
	return (
		<div>
			<label>Find contacts by name</label>
			<input type='text' value={value} onChange={onChange} />
		</div>
	)
}

export default SearchBox