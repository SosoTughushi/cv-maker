import './App.scss';
import CvComponent from '../CvComponent';
import * as soso from "../../cv/Soso";

function App() {
  return (
    <div className="App">
      <CvComponent education={soso.education} jobs={soso.jobs} languages={soso.languages} personalInfo={soso.personalInfo} skills={soso.skills} />
    </div>
  );
}

export default App;
