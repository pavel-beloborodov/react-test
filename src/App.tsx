import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PlanetEditorModal from "./features/planets/PlanetEditorModal/PlanetEditorModal";

const Planets = lazy(() => import("./features/planets/PlanetsListPage"));
const PlanetDetails = lazy(
  () => import("./features/planets/PlanetDetailsPage")
);
const Films = lazy(() => import("./features/films/FilmsPage"));
const Residents = lazy(() => import("./features/residents/Residents"));

export const App = () => (
  <Suspense fallback="Loading...">
    <Switch>
      <Route exact path="/planets" component={Planets} />
      <Route exact path="/planets/:id" component={PlanetDetails} />
      <Route exact path="/planets/:id/films" component={Films} />
      <Route exact path="/planets/:id/residents" component={Residents} />
      <Redirect to="/planets" />
    </Switch>
    <Route exact path="/planets" component={PlanetEditorModal} />
  </Suspense>
);

export default App;
