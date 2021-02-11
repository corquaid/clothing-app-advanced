import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

// this selector will return the desired directory sections
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)