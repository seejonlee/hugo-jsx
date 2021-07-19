import * as React from 'react';
import * as ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import * as params from '@params';

import BaseLayout from './BaseLayout.jsx';
import Count from './Count.jsx';

const ROOT_ID = params.rootId;

console.log({params});
console.log(ROOT_ID);


const PageLayout = () => {
	return (
		<BaseLayout>
			<div className={`page-content`}>
				<Count />
				<Count />
			</div>
		</BaseLayout>
	);
};

ReactDOM.render(React.createElement(PageLayout), document.getElementById(ROOT_ID));
