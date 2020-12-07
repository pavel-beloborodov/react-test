import { ValidationErrors } from "final-form";
import { Planet } from "../../../../../store/features/planets/PlanetsModel";

export function validatePlanet(values: Planet): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.name) {
    errors.name = "Name should not be empty";
  }

  if (values.rotation_period == null || values.rotation_period <= 0) {
    errors.rotation_period = "Rotation period should be positive";
  }

  if (values.orbital_period == null || values.orbital_period <= 0) {
    errors.orbital_period = "Orbital period should be positive";
  }

  if (values.diameter == null || values.diameter <= 0) {
    errors.diameter = "Planet diameter should be positive";
  }

  if (!values.climate) {
    errors.climate = "Climate should be specified";
  }

  if (!values.gravity) {
    errors.gravity = "Gravity should be specified as based on standard value";
  }

  if (!values.terrain || values.terrain.length === 0) {
    errors.terrain = "Terrain should have at least one value";
  }

  if (values.surface_water == null || values.surface_water <= 0) {
    errors.surface_water = "Surface water should be positive";
  }

  return errors;
}
