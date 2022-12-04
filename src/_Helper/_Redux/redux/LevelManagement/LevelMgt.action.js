import { CREATE_LEVEL, DELETE_LEVEL, LOAD_LEVELS } from './LevelMgt.types';

export const loadLevels = (levelsArray) => dispatch => {
  dispatch({ type: LOAD_LEVELS, payload: levelsArray })
}

export const createNewLevel = (newLevelObj) => dispatch => {
  dispatch({ type: CREATE_LEVEL, payload: newLevelObj })
}

export const deleteLevel = (levelId) => dispatch => {
  dispatch({ type: DELETE_LEVEL, payload: levelId })
}