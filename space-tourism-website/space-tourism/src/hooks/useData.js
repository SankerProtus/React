import { useState, useEffect } from 'react';
import data from '../components/data.json';

// Custom hook to get destination data
export const useDestination = (identifier) => {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const found = data.destinations.find(dest => 
        dest.id === identifier || 
        dest.name.toLowerCase() === identifier.toLowerCase() ||
        dest.slug === identifier
      );
      
      if (found) {
        setDestination(found);
      } else {
        setError(`Destination "${identifier}" not found`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [identifier]);

  return { destination, loading, error };
};

// Custom hook to get crew data
export const useCrew = (identifier) => {
  const [crew, setCrew] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const found = data.crew.find(member => 
        member.id === identifier || 
        member.role.toLowerCase().includes(identifier.toLowerCase()) ||
        member.slug === identifier
      );
      
      if (found) {
        setCrew(found);
      } else {
        setError(`Crew member "${identifier}" not found`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [identifier]);

  return { crew, loading, error };
};

// Custom hook to get technology data
export const useTechnology = (identifier) => {
  const [technology, setTechnology] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const found = data.technology.find(tech => 
        tech.id === identifier || 
        tech.name.toLowerCase().includes(identifier.toLowerCase()) ||
        tech.slug === identifier
      );
      
      if (found) {
        setTechnology(found);
      } else {
        setError(`Technology "${identifier}" not found`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [identifier]);

  return { technology, loading, error };
};
