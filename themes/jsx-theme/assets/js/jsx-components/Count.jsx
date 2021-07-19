import * as React from 'react';

const Count = () => {
	const [count, setCount] = React.useState(0);

	return (
		<div
			className={`count`}
			style={{
				padding: `20px`,
			}}
		>
			<span
				style={{
					marginRight: `10px`,
				}}
			>
				{count}
			</span>
			<button
				onClick={() => {
					setCount(prev => {
						return prev + 1;
					});
				}}
			>
				CLICK TO INCREMENT ME
			</button>
		</div>
	);
};

export default Count;
