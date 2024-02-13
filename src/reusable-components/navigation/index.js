import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavBar from "../../components/sideNavBar";
import { sideNavLinkItems } from "../../routes/navigationLinks";
import { routing } from "../../routes/path";
import { basicConstants } from "../../utils/constants";

const Navigation = () => {
  return (
    <Router>
      {sideNavLinkItems.map((item, i) => {
        return (
          <SideNavBar
            key={i}
            linkTo={item.linkTo}
            iconClassName={item.iconClassName}
            iconTitle={item.linkTitle}
          />
        );
      })}
      <Suspense fallback={<div>{basicConstants.loading}</div>}>
        <Routes>
            {routing.map((route,index)=>{
                return (<Route key={index} path={route.path} exact={route.exact} component={route.component} />)
            })}
          {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} /> */}
        </Routes>
      </Suspense>

      {/* Add routes for other sections */}
    </Router>
  );
};

export default Navigation;
