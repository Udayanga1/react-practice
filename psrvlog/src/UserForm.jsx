import { useEffect, useState } from "react"

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
	const [id, setId] = useState(0)
	const [name, setName] = useState("")

	// Clear the form after submission
	useEffect(() => {
		if (!submitted) {
			setId(0)
			setName("")
		}
	}, [submitted])

	useEffect(() => {
		if (data?.id && data.id !== 0) {
			setId(data.id)
			setName(data.name)
		}
	}, [data])

	return (
		<>
			<form
				className='text-gray-900 my-8 mx-6'
				onSubmit={(e) => e.preventDefault()}
			>
				<h2 className='text-base font-semibold leading-7'>User Form</h2>
				<div className='my-5'>
					<label htmlFor='id' className='text-sm inline-block font-medium w-12'>
						ID
					</label>
					<input
						className='border-b border-gray-600 w-60 px-3 py-2 mt-1 text-sm bg-inherit'
						type='number'
						name='id'
						id='id'
						value={id}
						placeholder='your id'
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div className='my-5'>
					<label
						htmlFor='name'
						className='text-sm inline-block font-medium w-12'
					>
						Name
					</label>
					<input
						className='border-b border-gray-600 w-60 px-3 py-2 mt-1 text-sm bg-inherit'
						type='text'
						name='name'
						id='name'
						value={name}
						placeholder='your name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button
					className='rounded-md bg-cyan-600 px-4 py-1.5 font-semibold text-gray-900 shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800'
					type='submit'
					onClick={() =>
						isEdit ? updateUser({ id, name }) : addUser({ id, name })
					} // id: id, name: name
				>
					{isEdit ? "Update" : "Add"}
				</button>
			</form>
		</>
	)
}
export default UserForm
