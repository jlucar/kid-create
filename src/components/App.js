import React from 'react';
import BabyQuestions from './BabyQuestions';
import BabyCanvas from './BabyCanvas';

const App = () => {
  return (
    <div className="ui grid">
      <BabyQuestions />
      <BabyCanvas />
    </div>
  );
};

export default App;