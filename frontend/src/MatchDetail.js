import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MatchDetail() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/matches/${id}/`)
      .then(response => response.json())
      .then(data => setMatch(data));
  }, [id]);

  if (!match) return <p>Carregant...</p>;

  return (
    <div>
      <h2>Partit {match.id}</h2>
      <p><strong>Data:</strong> {match.date}</p>
      <p><strong>Equip local:</strong> {match.team_home}</p>
      <p><strong>Equip visitant:</strong> {match.team_away}</p>
    </div>
  );
}

export default MatchDetail;