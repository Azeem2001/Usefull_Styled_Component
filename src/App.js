import logo from "./logo.svg";
import Cards from "./Components/Cards/Cards";
import OverView from "./Components/OverView/OverView";
import SurveyData from "./Components/Table2/SurveyData";
import AddEmployModal from "./Components/AddEmployModal/AddEmployModal";
import NotesModal from "./Components/NotesModal/NotesModal";
import EvaluationModal from "./Components/EvaluationModal/EvaluationModal";
import OverviewTable from "./Components/OverViewTable/OverviewTable";

function App() {
  return (
    <div className="App">
      {/* <Cards /> */}
      <OverView />
      {/* <SurveyData /> */}
      {/* <AddEmployModal /> */}
      {/* <NotesModal /> */}
      <EvaluationModal />
      {/* <OverviewTable/> */}
    </div>
  );
}

export default App;
