import { Event } from '../utils/constants';
import { createAction } from 'redux-actions';

/* Tracing actions */
export const addPoint = createAction(Event.ADD_POINT_REQUESTED);

/* Image editing actions */
export const loadImageFile: (options: { file: File, height: number, width: number }) => any = createAction(Event.LOAD_IMAGE_REQUESTED);
export const flipImageX: () => any = createAction(Event.FLIP_IMAGE_X_REQUESTED);
export const setBrightness: (value: number) => any = createAction(Event.SET_IMAGE_BRIGHTNESS_REQUESTED);
export const invertImage: () => any = createAction(Event.INVERT_IMAGE_REQUESTED);
export const resetWorkspace: () => any = createAction(Event.RESET_WORKSPACE_REQUESTED);


/**
 * Ignores the result of automatic detection of whether the image is a cephalometric radiograph
 */
export const ignoreLikelyNotCephalo: () => any = createAction(
  Event.SET_IS_CEPHALO_REQUESTED,
  () => ({ isCephalo: true }),
);