import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Grid from "components/Grid/Grid";
import Navigation from "components/Navigation/Navigation";
import { fetchFilmListRequest } from "store/features/films/FilmsActions";
import { Film } from "store/features/films/FilmsModel";
import { fetchPlanetRequest } from "store/features/planets/PlanetsActions";
import { Planet } from "store/features/planets/PlanetsModel";
import { RootStoreState } from "store/rootModel";
import { FILM_COLUMNS } from "./Films.const";
import styles from "./FilmsPage.module.scss";

interface RouteProps extends RouteComponentProps<{ id: string }> {}

interface FilmsProps extends RouteProps {
  fetchFilms: (ids: string[]) => any;
  fetchPlanet: (id: string) => any;
  films: Film[];
  planet: Planet;
}

function FilmsPage({
  match,
  planet,
  fetchPlanet,
  fetchFilms,
  films,
  history,
}: FilmsProps) {
  useEffect(() => {
    if (!planet) {
      const id = match.params.id;
      fetchPlanet(id);
    } else {
      if (films.length !== planet.filmsIds.length) {
        fetchFilms(planet.filmsIds);
      }
    }
  }, [fetchFilms, films, fetchPlanet, planet, match]);

  const goBack = useCallback(() => history.goBack(), [history]);

  return (
    <div className={styles.container}>
      <Navigation
        className={styles.navigation}
        onBack={goBack}
        title={planet ? `Films for ${planet.name}` : "Films"}
      />
      <Grid className={styles.table} columns={FILM_COLUMNS} data={films} />
    </div>
  );
}

const mapStateToProps = (state: RootStoreState, ownProps: RouteProps) => {
  const id = ownProps.match.params.id;
  const planet = state.planets.planetById[id];
  let films: Film[] = [];
  if (planet) {
    films = planet.filmsIds
      .map((id) => state.films.filmById[id])
      .filter(Boolean);
  }
  return { planet, films };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchPlanet: (planetId: string) => dispatch(fetchPlanetRequest(planetId)),
    fetchFilms: (filmIds: string[]) => dispatch(fetchFilmListRequest(filmIds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);
