import React, { useCallback, useMemo } from "react";
import { Form, Field } from "react-final-form";
import IconButton from "components/IconButton/IconButton";
import { Planet } from "store/features/planets/PlanetsModel";
import styles from "./PlanetForm.module.scss";
import { TERRAIN_VALUES, PLANET_HEADERS } from "./PlanetFormConst";
import { validatePlanet } from "./PlanetFormValidator";
import { ReactComponent as CloseIcon } from "assets/clear.svg";

type FormInputProps = {
  name: string;
  type?: "text" | "number";
};

function FormInput({ name, type = "text" }: FormInputProps) {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <div className={styles.formElement}>
          <label htmlFor={name} className={styles.formElementLabel}>
            {
              //@ts-ignore
              PLANET_HEADERS[name]
            }
          </label>
          <input
            id={name}
            {...input}
            type={type}
            className={styles.formInput}
          />
          {meta.touched && (meta.error || meta.submitError) && (
            <span className={styles.formErrorLabel}>
              {meta.error || meta.submitError}
            </span>
          )}
        </div>
      )}
    />
  );
}

interface PlanetFormProps {
  onCloseClick: () => void;
  planet?: Planet;
  onSubmit: (planet: Planet) => void;
}

function PlanetForm({ planet, onCloseClick, onSubmit }: PlanetFormProps) {
  const handleSubmit = useCallback(
    async (values) => {
      const { terrain, ...rest } = values;
      return onSubmit({ ...rest, terrain: terrain.join(", ") });
    },
    [onSubmit]
  );

  const initialValues = useMemo(() => {
    if (planet) {
      return {
        ...planet,
        terrain: planet.terrain.split(", "),
      };
    }
  }, [planet]);

  return (
    <div className={styles.formContainer}>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validatePlanet}
        render={({ handleSubmit, submitting, pristine, form, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h2>EDIT PLANET DETAILS</h2>
              <IconButton
                Icon={CloseIcon}
                title="Close"
                onClick={onCloseClick}
                invert={true}
              />
            </div>

            <FormInput name="name" />
            <FormInput name="rotation_period" type="number" />
            <FormInput name="orbital_period" type="number" />
            <FormInput name="diameter" type="number" />
            <FormInput name="climate" />
            <FormInput name="gravity" />
            <Field
              name="terrain"
              type="select"
              render={({ input, meta }) => {
                return (
                  <div className={styles.formElement}>
                    <label className={styles.formElementLabel}>Terrain</label>
                    <select {...input} multiple>
                      {TERRAIN_VALUES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {meta.touched && (meta.error || meta.submitError) && (
                      <span className={styles.formErrorLabel}>
                        {meta.error || meta.submitError}
                      </span>
                    )}
                  </div>
                );
              }}
            />
            <FormInput name="surface_water" type="number" />

            <div className={styles.buttonsBlock}>
              <button
                type="button"
                /*@ts-ignore*/
                onClick={form.reset}
                disabled={submitting || pristine}
                className={styles.actionButton}
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={
                  submitting || pristine || Object.keys(errors).length > 0
                }
                className={styles.actionButton}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default React.memo(PlanetForm);
