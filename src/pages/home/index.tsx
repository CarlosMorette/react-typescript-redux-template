import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from './../../actions'

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators({
		saveNewUser: actions.saveNewUser
	}, dispatch)
}

const mapStateToProps = (state: any) => ({
	user: state.user.user
})

/**
 * another type of implementation would be using useDispatch and useSelector of react-redux
 * consulting official documentation:
 * https://react-redux.js.org/api/hooks
 */

function Home(props: any) {
	const { saveNewUser, user } = props

	return (
		<div>
			<p>I'am a Home</p>
			<button onClick={() => saveNewUser({ age: "any", email: "foo", name: "bar" })}>Save</button>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)	
