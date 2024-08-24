import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/description";
import Options from "./components/options/options";
import Feedback from "./components/feedback/feedback";
import Notification from "./components/notification/notification";

export default function App() {
	const [points, setPoints] = useState(() => {
		const data = window.localStorage.getItem("data");

		return data !== null ? JSON.parse(data) : { good: 0, neutral: 0, bad: 0 };
	});

	useEffect(() => {
		window.localStorage.setItem("data", JSON.stringify(points));
	}, [points]);

	const updateFeedback = (feedbackType) => {
		switch (feedbackType) {
			case "good":
				setPoints({ ...points, good: points.good + 1 });
				break;
			case "neutral":
				setPoints({ ...points, neutral: points.neutral + 1 });
				break;
			case "bad":
				setPoints({ ...points, bad: points.bad + 1 });
				break;
			default:
				alert("Wrong option was selected!");
		}
	};

	const totalFeedback = points.good + points.neutral + points.bad;

	const resetFeedback = () => {
		setPoints({ good: 0, neutral: 0, bad: 0 });
	};

	const hasFeedback = totalFeedback > 0;

	return (
		<div>
			<Description />

			<Options
				func={updateFeedback}
				onReset={resetFeedback}
				hasFeedback={hasFeedback}
			/>

			{totalFeedback ? (
				<Feedback points={points} total={totalFeedback} />
			) : (
				<Notification />
			)}
		</div>
	);
}
