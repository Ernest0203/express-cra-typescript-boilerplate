import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

const routes = [
  // {
	// 	exact: true,
  //   link: 'component',
  //   path: 'component',
  //   component: lazy(() => import('./Component'))
  // },
];

const Layout = () => {
	// const linksList = routes.map((route, index) => {
	// 	return <NavLink key={index} to={`/${route.link}`} activeClassName='linkActive'>{route.link}</NavLink>
	// });
	// const routesList = routes.map((route, index) => {
	// 	return <Route key={index} path={`/${route.path}`} exact={route.exact} component={route.component}></Route> 
	// 	}
	// );

  return (
    <LayoutWrapper>
			<div className="mainContent">
				<Suspense fallback={() => <p>Loading...</p>}>
					<Switch>
					</Switch>
				</Suspense>
			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	nav {
		padding: 20px;
		border-bottom: 2px solid #ddd;
		a {
    	border: 2px solid #46b156;
    	border-radius: 5px;
    	color: #46b156;
			display: inline-block;
    	font-size: 14px;
    	font-weight: bold;
			margin-right: 20px;
    	padding: 6px 10px;
    	text-transform: uppercase;	
  	}
		.linkActive {
    	background-color: #46b156;
    	color: #fff;
    }
	}
	.mainContent {
		padding: 20px 20px 20px 20px;
	}
`

export default Layout;