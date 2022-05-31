import React, {useState} from "react";
import Config from "./components/Config";
import TagsBuilder from "./components/TagsBuilder";

const App = () => {
  const [scheduler, setScheduler] = useState(false);
  const [location, setLocation] = useState(false);
  const [tags, setTags] = useState([]);
  return (
    <div className="container">
      <Config
        title="Use Scheduler"
        toggleState={scheduler}
        onToggle={v => setScheduler(v)}
      />
      <Config
        title="Use Location"
        toggleState={location}
        onToggle={v => setLocation(v)}
      />
      <TagsBuilder
        tags={tags}
        addTags={v => setTags([...tags, {id: new Date().getTime(), title: v}])}
      />
    </div>
  );
};

export default App;
