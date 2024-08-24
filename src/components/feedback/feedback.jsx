import fbStyle from "./feedback.module.css";

export default function Feedback({ points, total }) {
	const { good, neutral, bad } = points;
	const average = Number(Math.round((good / total) * 100));
	return (
		<>
			<ul className={fbStyle.feedbackList}>
				<li>
					<p className={fbStyle.good}>Good: {good}</p>
				</li>
				<li>
					<p className={fbStyle.neutral}>Neutral: {neutral}</p>
				</li>
				<li>
					<p className={fbStyle.bad}>Bad: {bad}</p>
				</li>
			</ul>

			<ul className={fbStyle.feedbackList}>
				<li>
					<p className={fbStyle.feedbackText}>Total: {total}</p>
				</li>
				<li>
					<p className={fbStyle.feedbackText}>
						Positive:{" "}
						<span
							className={
								(average <= 25 && fbStyle.bad) ||
								(average > 25 && average <= 75 && fbStyle.neutral) ||
								(average > 75 && fbStyle.good)
							}
						>
							{average}%
						</span>
					</p>
				</li>
			</ul>
		</>
	);
}
