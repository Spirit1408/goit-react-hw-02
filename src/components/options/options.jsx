import optStyles from "./options.module.css";

export default function Options({ func, onReset, hasFeedback }) {
	return (
		<div className={optStyles.optWrapper}>
			<ul className={optStyles.optList}>
				<li>
					<button
						type="button"
						className={optStyles.good}
						onClick={() => func("good")}
					>
						Good
					</button>
				</li>
				<li>
					<button
						type="button"
						className={optStyles.neutral}
						onClick={() => func("neutral")}
					>
						Neutral
					</button>
				</li>
				<li>
					<button
						type="button"
						className={optStyles.bad}
						onClick={() => func("bad")}
					>
						Bad
					</button>
				</li>
			</ul>

			{hasFeedback && (
				<button type="button" className={optStyles.reset} onClick={onReset}>
					Reset
				</button>
			)}
		</div>
	);
}
