import * as React from 'react';

const Count = () => {
	const [count, setCount] = React.useState(0);

	return (
		<div className={`count`}>
			<span>{count}</span>
			<button
				onClick={() => {
					setCount(prev => {
						return prev + 1;
					});
				}}
			>
				INCREMENT ME
			</button>
		</div>
	);
};

export default Count;
