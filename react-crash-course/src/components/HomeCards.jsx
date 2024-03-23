import Card from "./Card"

const HomeCards = () => {
	return (
		<section className='py-4'>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					<Card
						cardtitle='For Developers'
						description='Browse our React jobs and start your career today'
						btn_description='Browse Jobs'
						btn_link='/jobs'
					/>
					<Card
						bgcolor='bg-indigo-100'
						cardtitle='For Employers'
						description='List your job to find the perfect developer for the role'
						btncolor='bg-indigo-500 hover:bg-indigo-600'
						btn_description='Add Job'
						btn_link='/add-job'
					/>
				</div>
			</div>
		</section>
	)
}
export default HomeCards
