const UsersTable = ({ rows, selectedUser, deleteUser }) => {
	return (
		<>
			{rows.length > 0 ? (
				<table className='w-full text-left rtl:text-right mx-6 '>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => (
							<tr key={row.id} className='border-b border-gray-300 '>
								<td>{row.id}</td>
								<td>{row.name}</td>
								<td className='flex gap-3 text-cyan-600 uppercase'>
									<button
										onClick={() => selectedUser({ id: row.id, name: row.name })}
									>
										Update
									</button>
									<button onClick={() => deleteUser({ id: row.id })}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p className='mx-6'>No users found</p>
			)}
		</>
	)
}
export default UsersTable
