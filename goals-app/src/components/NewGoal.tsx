import { useRef, type FormEvent } from "react"

const NewGoal = () => {
	const goal = useRef<HTMLInputElement>(null)
	const summary = useRef<HTMLInputElement>(null)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const enteredGoal = goal.current!.value
		const enteredSummary = summary.current!.value
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor='goal'>Your goal</label>
				<input type='text' id='goal' ref={goal} />
			</p>
			<p>
				<label htmlFor='summary'>Short summary</label>
				<input type='text' id='summary' ref={summary} />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	)
}
export default NewGoal
