import { useState } from "react";
import "../../App.css";
import TechnologySelect from "../../utils/TechnologySelect";
import { useTechnology } from '../../hooks/useData';

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState('vehicle');
  const { technology, loading, error } = useTechnology(selectedTechnology);
  
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  return (
    <div className="technology-content">
      <div className="technology-left">
        <TechnologySelect 
          selectedTechnology={selectedTechnology}
          onChangeTechnology={setSelectedTechnology}
        />
        <div className="technology-info">
          <p className="technology-subtitle">The terminology...</p>
          <h1 className="technology-title">{technology.name}</h1>
          <p className="technology-description">{technology.description}</p>
        </div>
      </div>
      <div className="technology-right">
        <img src={technology.images.portrait} alt={technology.name} className="technology-image" />
      </div>
    </div>
  );
}

export default Technology