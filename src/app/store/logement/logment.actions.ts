import { createAction, props } from "@ngrx/store";
import { Logement, LogementState } from "./logement.models";

export const loadingLogement = createAction("loading logement");

export const succesLoagingLogment = createAction("loading succes logement", props<{ logementItems: Logement[]}>())

export const errorLoadingLogement = createAction("loading error logement",props< { error:any}>);
