import Sample from "./Sample";

import { withTimer } from "./WithTimer";

const SampleWithTimer = withTimer(Sample);

export default function App() {
  return (
    <div className="App">
      <SampleWithTimer />
    </div>
  );
}