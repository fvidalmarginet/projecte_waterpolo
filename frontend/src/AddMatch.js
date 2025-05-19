import React, { useState } from 'react';

function AddMatch({ onAdd }) {
  const [teamHome, setTeamHome] = useState('');
  const [teamAway, setTeamAway] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState(''); // Afegit l'state per time

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMatch = {
      team_home: teamHome,
      team_away: teamAway,
      date: date,
      location: location,
      time: time
    };

    fetch('http://127.0.0.1:8000/api/matches/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMatch),
    })
      .then(response => response.json())
      .then(data => {
        if (onAdd) onAdd(data);
        setTeamHome('');
        setTeamAway('');
        setDate('');
        setLocation('');
        setTime('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Afegir partit</h2>
      <div>
        <label>Equip local:</label>
        <input
          type="text"
          value={teamHome}
          onChange={e => setTeamHome(e.target.value)}
        />
      </div>
      <div>
        <label>Equip visitant:</label>
        <input
          type="text"
          value={teamAway}
          onChange={e => setTeamAway(e.target.value)}
        />
      </div>
      <div>
        <label>Data:</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Desar</button>
    </form>
  );
}

export default AddMatch;