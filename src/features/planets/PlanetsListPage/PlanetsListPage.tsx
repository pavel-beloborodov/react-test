import React, { useCallback, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { ReactComponent as FilmsIcon } from "assets/local_movies.svg";
import { ReactComponent as DetailsIcon } from "assets/create.svg";
import { ReactComponent as ResidentsIcon } from "assets/people_alt.svg";
import Grid, { GridAction } from "components/Grid";
import Navigation from "components/Navigation";
import { fetchPlanetListRequest } from "store/features/planets/PlanetsActions";
import { Planet } from "store/features/planets/PlanetsModel";
import { RootStoreState } from "store/rootModel";

import { PLANET_LIST_COLUMNS } from "./PlanetsListPage.const";

import styles from "./PlanetsListPage.module.scss";

interface PlanetsPageProps extends RouteComponentProps {
  fetchPlanets: (page: number) => void;
  planets: Planet[];
  nextPage: number | null;
}

function PlanetsListPage({
  fetchPlanets,
  planets,
  history,
  nextPage,
}: PlanetsPageProps) {
  useEffect(() => {
    if (nextPage === 1) {
      fetchPlanets(nextPage);
    }
  }, [fetchPlanets, nextPage]);

  const loadMore = useCallback(() => {
    if (nextPage) {
      fetchPlanets(nextPage);
    }
  }, [fetchPlanets, nextPage]);

  const actions = useMemo((): GridAction[] => {
    return [
      {
        id: "action_film",
        label: "Go to Films",
        onClick: (id) => history.push(`/planets/${id}/films`),
        Icon: FilmsIcon,
      },
      {
        id: "action_residents",
        label: "Go to Residents",
        onClick: (id) => {
          history.push(`/planets/${id}/residents`);
        },
        Icon: ResidentsIcon,
      },
      {
        id: "action_edit",
        label: "Edit",
        onClick: (id) => {
          history.replace({
            search: `edit=${id}`,
          });
        },
        Icon: DetailsIcon,
      },
    ];
  }, [history]);

  const openDetails = useCallback(
    (id: string) => {
      history.push(`/planets/${id}`);
    },
    [history]
  );

  return (
    <div className={styles.container}>
      <Navigation className={styles.navigation} title="Star wars planets" />
      <Grid
        className={styles.table}
        onClick={openDetails}
        actions={actions}
        columns={PLANET_LIST_COLUMNS}
        data={planets}
      />
      {nextPage ? (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load More
        </button>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state: RootStoreState) => {
  return {
    planets: state.planets.planetsIds.map((id) => {
      const planet = state.planets.planetById[id];
      return {
        ...planet,
        film_count: planet.filmsIds.length,
        residents_count: planet.residentsIds.length,
      };
    }),
    nextPage: state.planets.nextPage,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  fetchPlanets: (page: number) => dispatch(fetchPlanetListRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsListPage);
