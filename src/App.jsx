import React, { useState } from 'react';
import hug from './assets/bearhug.gif';
import photo from './assets/valentinegif.gif';
function App() {
	const [count, setCount] = useState(0);
	const [yesPressed, setYesPressed] = useState(false);
	const yesButtonSize = count * 20 + 16;

	const phrases = [
		'Are you sure?',
		'Really sure',
		'Think again!',
		'Last chance!',
		'Surely not?',
		'You might regret this!',
		'Give it another thought!',
		'Are you absolutely certain?',
		'This could be a mistake!',
		'Have a heart!',
		"Don't be so cold!",
		'Change of heart?',
		"Wouldn't you reconsider?",
		'Is that your final answer?',
		"You're breaking my heart 😭",
	];

	return (
		<div className="container">
			{yesPressed ? (
				<>
					<img src={hug} alt="Photo" height={150} />
					<h1>YAAAAAYYYYYY!!!!!!</h1>
				</>
			) : (
				<>
					<img src={photo} alt="Photo" height={150} />
					<h1>Will you be my valentine?</h1>
					<div className="yn">
						<button
							className="button-66"
							style={{ fontSize: yesButtonSize }}
							onClick={() => setYesPressed(true)}>
							Yes
						</button>
						<button className="button-66" onClick={() => setCount(count + 1)}>
							{count == 0
								? 'No'
								: count > phrases.length
								? phrases[Math.floor(Math.random() * phrases.length)]
								: phrases[Math.min(count - 1, phrases.length - 1)]}
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
