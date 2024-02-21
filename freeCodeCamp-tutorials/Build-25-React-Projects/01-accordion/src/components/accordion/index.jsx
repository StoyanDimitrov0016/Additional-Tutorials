import { useReducer } from "react";
import accordionData from "./data";
import reducer from "../../reducers/accordionReducer";
import "./styles.css";

const initialState = {
  isSingleSelectMode: true,
  selectedID: null,
  multipleSelectedIDs: [],
};

const Accordion = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectionHandler = (currentId) => {
    const isIDIncluded = state.multipleSelectedIDs.includes(currentId);
    const actionForMultiMode = isIDIncluded ? "removeFromMultiSelection" : "addToMultiSelection";

    const type = state.isSingleSelectMode ? "setSingleSelection" : actionForMultiMode;

    dispatch({ type, currentId });
  };

  const onClickChangeSelectionMode = () => {
    dispatch({ type: "changeSelectionMode" });
  };

  return (
    <div className="wrapper">
      <button onClick={onClickChangeSelectionMode}>
        {state.isSingleSelectMode ? "Enable multi selection" : "Disable multi selection"}
      </button>
      <div className="accordion">
        {!accordionData || accordionData.length === 0 ? (
          <div>No available data.</div>
        ) : (
          accordionData.map(({ id, question, answer }) => (
            <div key={id} className="item">
              <div onClick={() => selectionHandler(id)} className="title">
                <h3>{question}</h3>
                <span>+</span>
              </div>
              {state.isSingleSelectMode
                ? state.selectedID === id && <div className="content">{answer}</div>
                : state.multipleSelectedIDs.includes(id) && <div className="content">{answer}</div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Accordion;
