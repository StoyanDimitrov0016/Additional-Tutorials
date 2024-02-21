export default function reducer(state, action) {
    switch (action.type) {
        case 'setSingleSelection': {
            const selectedID = state.selectedID === action.currentId ? null : action.currentId;
            return { ...state, selectedID }
        }

        case 'addToMultiSelection': {
            return { ...state, multipleSelectedIDs: [...state.multipleSelectedIDs, action.currentId] }
        }

        case 'removeFromMultiSelection': {
            const multipleSelectedIDs = state.multipleSelectedIDs.filter(id => id !== action.currentId);
            return { ...state, multipleSelectedIDs }
        }

        case 'changeSelectionMode': {
            const newState = { ...state };

            if (newState.isSingleSelectMode) {
                newState.multipleSelectedIDs = [newState.selectedID]
            }

            newState.isSingleSelectMode = !newState.isSingleSelectMode;

            return newState;
        }

        default:
            return state;
    }
}