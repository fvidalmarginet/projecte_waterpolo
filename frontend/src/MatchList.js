import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddMatch from './AddMatch';

function MatchList() {
  const [matches, setMatches] = useState([]);
  const handleAddMatch = (newMatch) => {
    setMatches([newMatch,...matches]);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/matches/')
      .then(response => response.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div>
      <h2>Llista de partits</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <Link to={`/match/${match.id}`}>
              {match.date} — {match.team_home} vs {match.team_away}
            </Link>
          </li>
        ))}
      </ul>
      <AddMatch onAdd={handleAddMatch}/>
    </div>
  );
}

export default MatchList;