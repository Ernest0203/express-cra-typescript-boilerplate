import actions from './actions';

const initialState = {
  filesUrls: []
};

export default function files(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        filesUrls: [...data]
      };

    default:
      return state;
  }
}