import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Grid from "components/Grid";
import Navigation from "components/Navigation";
import { fetchPlanetRequest } from "store/features/planets/PlanetsActions";
import { Planet } from "store/features/planets/PlanetsModel";
import { fetchResidentListRequest } from "store/features/residents/ResidentsActions";
import { Resident } from "store/features/residents/ResidentsModel";
import { RootStoreState } from "store/rootModel";
import styles from "./ResidentsPage.module.scss";
import { RESIDENT_COLUMNS } from "./Resident.const";

interface RouteProps extends RouteComponentProps<{ id: string }> {}

interface ResidentsProps extends RouteProps {
  fetchResidents: (ids: string[]) => any;
  fetchPlanet: (id: string) => any;
  residents: Resident[];
  planet: Planet;
}

function ResidentsPage({
  match,
  planet,
  history,
  fetchPlanet,
  fetchResidents,
  residents,
}: ResidentsProps) {
  useEffect(() => {
    if (!planet) {
      const id = match.params.id;
      fetchPlanet(id);
    } else {
      if (residents.length !== planet.residentsIds.length) {
        fetchResidents(planet.residentsIds);
      }
    }
  }, [fetchResidents, residents, fetchPlanet, planet, match]);

  const goBack = useCallback(() => history.goBack(), [history]);

  return (
    <div className={styles.container}>
      <Navigation
        className={styles.navigation}
        onBack={goBack}
        title={planet ? `Residents for ${planet.name}` : "Residents"}
      />

      <Grid
        className={styles.table}
        columns={RESIDENT_COLUMNS}
        data={residents}
      />
    </div>
  );
}

const mapStateToProps = (state: RootStoreState, ownProps: RouteProps) => {
  const id = ownProps.match.params.id;
  const planet = state.planets.planetById[id];
  let residents: Resident[] = [];
  if (planet) {
    residents = planet.residentsIds
      .map((id) => state.residents.residentById[id])
      .filter(Boolean);
  }
  return { planet, residents };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchPlanet: (planetId: string) => dispatch(fetchPlanetRequest(planetId)),
    fetchResidents: (residentIds: string[]) =>
      dispatch(fetchResidentListRequest(residentIds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResidentsPage);
