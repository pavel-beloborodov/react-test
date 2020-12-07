import React, { useCallback, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Grid from "components/Grid/Grid";
import Navigation from "components/Navigation/Navigation";
import { fetchPlanetRequest } from "store/features/planets/PlanetsActions";
import { Planet } from "store/features/planets/PlanetsModel";
import { RootStoreState } from "store/rootModel";

import styles from "./PlanetDetailsPage.module.scss";
import { PLANET_DETAILS_COLUMNS } from "./PlanetsDetailsPage.const";

interface PlanetDetailsRouteProps extends RouteComponentProps<{ id: string }> {}

interface PlanetDetailsProps extends PlanetDetailsRouteProps {
  fetchPlanetDetails: () => void;
  planet: Planet;
}

function PlanetDetailsPage({
  fetchPlanetDetails,
  planet,
  history,
}: PlanetDetailsProps) {
  useEffect(() => {
    if (!planet) {
      fetchPlanetDetails();
    }
  }, [fetchPlanetDetails, planet]);

  const data = useMemo(() => {
    return planet ? [planet] : [];
  }, [planet]);

  const goBack = useCallback(() => history.goBack(), [history]);

  return (
    <div className={styles.container}>
      <Navigation
        className={styles.navigation}
        title={planet ? planet.name : "Loading..."}
        onBack={goBack}
      />
      <Grid
        className={styles.table}
        columns={PLANET_DETAILS_COLUMNS}
        data={data}
      />
    </div>
  );
}

const mapStateToProps = (
  state: RootStoreState,
  ownProps: PlanetDetailsRouteProps
) => {
  const id = ownProps.match.params.id;
  return { planet: state.planets.planetById[id] };
};

const mapDispatchToProps = (
  dispatch: Function,
  ownProps: PlanetDetailsRouteProps
) => {
  const id = ownProps.match.params.id;
  return {
    fetchPlanetDetails: () => dispatch(fetchPlanetRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetailsPage);
