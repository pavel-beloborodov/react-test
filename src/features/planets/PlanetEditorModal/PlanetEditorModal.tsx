import React, { useCallback, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchPlanetRequest } from "store/features/planets/PlanetsActions";
import { Planet } from "store/features/planets/PlanetsModel";
import { RootStoreState } from "store/rootModel";
import PlanetForm from "./components/PlanetForm/PlanetForm";

const MODAL_STYLES = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
  },
};

interface PlanetModalPageProps extends RouteComponentProps {
  fetchPlanetDetails: (planetId: string) => void;
  planet?: Planet;
  planetId: string | null;
}

function PlanetEditorModal({
  fetchPlanetDetails,
  planet,
  history,
  location,
  planetId,
}: PlanetModalPageProps) {
  const closeModal = useCallback(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete("edit");
    history.replace({
      search: queryParams.toString(),
    });
  }, [history, location]);

  const onSubmit = useCallback(
    async (planet: Planet) => {
      const errors = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              name: "Some server side error message",
            }),
          1000
        )
      );

      if (!errors) {
        closeModal();
        return;
      }

      return errors;
    },
    [closeModal]
  );

  useEffect(() => {
    if (!planet && planetId) {
      fetchPlanetDetails(planetId);
    }
  }, [fetchPlanetDetails, planet, planetId]);

  return (
    <Modal isOpen={!!planetId} onRequestClose={closeModal} style={MODAL_STYLES}>
      {planet ? (
        <PlanetForm
          onCloseClick={closeModal}
          planet={planet}
          onSubmit={onSubmit}
        />
      ) : null}
    </Modal>
  );
}

const mapStateToProps = (
  state: RootStoreState,
  ownProps: PlanetModalPageProps
) => {
  const params = new URLSearchParams(ownProps.location.search);
  const planetId = params.get("edit");
  let planet: Planet | undefined;
  if (planetId) {
    planet = state.planets.planetById[planetId];
  }
  return {
    planet: planet,
    planetId: planetId,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchPlanetDetails: (id: string) => dispatch(fetchPlanetRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetEditorModal);
