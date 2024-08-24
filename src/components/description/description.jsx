import descrStyles from "./description.module.css";

export default function Description() {
	return (
		<div className={descrStyles.h1}>
			<h1>Sip Happens Café</h1>
			<p className={descrStyles.p}>
				Please leave your feedback about our service by selecting one of the
				options below.
			</p>
		</div>
	);
}
