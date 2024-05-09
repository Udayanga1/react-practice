// import { type ReactNode } from "react"
// import { type FC, type PropsWithChildren } from "react"
import { type PropsWithChildren } from "react"

// interface CourseGoalProps {
// 	title: string
// 	children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
	title: string
	id: number
	onDeleteGoal: (id: number) => void
}>

const CourseGoal = ({ title, id, children, onDelete }: CourseGoalProps) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	)
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	)
// }

export default CourseGoal
