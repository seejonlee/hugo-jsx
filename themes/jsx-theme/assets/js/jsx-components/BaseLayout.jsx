import * as React from 'react';

const BaseLayout = ({children}) => {
	return (
		<div className={`page-layout`}>
			{/* <Header /> */}
			<div>HEADER</div>
			<main>
				{children}
			</main>
			<div>FOOTER</div>
			{/* <Footer /> */}
		</div>
	);
};

export default BaseLayout;
