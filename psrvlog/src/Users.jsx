import { useEffect, useState } from "react"
import UserForm from "./UserForm"
import UsersTable from "./UsersTable"
import Axios from "axios"

const Users = () => {
	const [users, setUsers] = useState([])
	const [submitted, setSubmitted] = useState(false)
	const [selectedUser, setSelectedUser] = useState({})
	const [isEdit, setIsEdit] = useState(false)

	useEffect(() => {
		getUsers()
	}, [])

	const getUsers = () => {
		Axios.get("http://localhost:5001/api/users")
			.then((response) => {
				// setUsers(response.data)
				setUsers(response.data?.response || []) // ? is for optional chaining
			})
			.catch((error) => {
				console.log("Axios Error: ", error)
			})
	}

	const addUser = (data) => {
		setSubmitted(true)

		const payload = {
			id: data.id,
			name: data.name,
		}

		Axios.post("http://localhost:5001/api/createuser", payload)
			.then(() => {
				getUsers()
				setSubmitted(false)
				setIsEdit(false)
			})
			.catch((error) => {
				console.log("Axios Error: ", error)
			})
	}

	const updateUser = (data) => {
		setSubmitted(true)

		const payload = {
			id: data.id,
			name: data.name,
		}

		Axios.post("http://localhost:5001/api/updateuser", payload)
			.then(() => {
				getUsers()
				setSubmitted(false)
				setIsEdit(false)
			})
			.catch((error) => {
				console.log("Axios Error: ", error)
			})
	}

	const deleteUser = (data) => {
		Axios.post("http://localhost:5001/api/deleteuser", data)
			.then(() => {
				getUsers()
			})
			.catch((error) => {
				console.log("Axios Error: ", error)
			})
	}

	return (
		<div>
			<UserForm
				addUser={addUser}
				updateUser={updateUser}
				submitted={submitted}
				data={selectedUser}
				isEdit={isEdit}
			/>
			<UsersTable
				rows={users}
				selectedUser={(data) => {
					setSelectedUser(data)
					setIsEdit(true)
				}}
				deleteUser={(data) =>
					window.confirm("Are you sure you want to delete this user?") &&
					deleteUser(data)
				}
			/>
		</div>
	)
}
export default Users
