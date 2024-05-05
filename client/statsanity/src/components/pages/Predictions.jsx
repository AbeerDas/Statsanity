import React, { useState } from 'react';

import Cavs from '../images/logos/cavs.webp';
import Mavs from '../images/logos/mavs.png';
import Nets from '../images/logos/brooklyn-nets.png';
import Celtics from '../images/logos/celtics.png';
import Hornets from '../images/logos/charlotte-hornets.png';
import Nuggets from '../images/logos/denver-nuggets.png';
import Hawks from '../images/logos/hawks.png';
import Clips from '../images/logos/los-angeles-clippers.png';
import Lakers from '../images/logos/los-angeles-lakers.png';
import Griz from '../images/logos/memphis-grizzlies.png';
import Heat from '../images/logos/heat1.png';
import Knicks from '../images/logos/new-york-knicks.png';
import Warriors from '../images/logos/warriors.png';
import Bulls from '../images/logos/bulls.png';
import Pistons from '../images/logos/pistons.png';

import Rockets from '../images/logos/rockets.png';
import Pacers from '../images/logos/pacers.png';
import Bucks from '../images/logos/bucks.png';
import Timberwolves from '../images/logos/wolves.png';
import Pelicans from '../images/logos/pelicans.png';
import Thunder from '../images/logos/thunder.png';
import Magic from '../images/logos/magic.png';

import Sixers from '../images/logos/76ers.png';
import Suns from '../images/logos/suns.png';
import Blazers from '../images/logos/blazers.png';
import Kings from '../images/logos/kings.png';
import Spurs from '../images/logos/spurs.png';
import Raptors from '../images/logos/raptors.png';
import Jazz from '../images/logos/jazz.png';
import Wizards from '../images/logos/wizards.png';

import vsLogo from '../images/vs-text.webp';

const nbaTeamLogos = {
  "Atlanta Hawks": Hawks,
  "Boston Celtics": Celtics,
  "Brooklyn Nets": Nets,
  "Charlotte Hornets": Hornets,
  "Chicago Bulls": Bulls,
  "Cleveland Cavaliers": Cavs,
  "Dallas Mavericks": Mavs,
  "Denver Nuggets": Nuggets,
  "Detroit Pistons": Pistons,
  "Golden State Warriors": Warriors,
  "Houston Rockets": Rockets,
  "Indiana Pacers": Pacers,
  "LA Clippers": Clips,
  "Los Angeles Lakers": Lakers,
  "Memphis Grizzlies": Griz,
  "Miami Heat": Heat,
  "Milwaukee Bucks": Bucks,
  "Minnesota Timberwolves": Timberwolves,
  "New Orleans Pelicans": Pelicans,
  "New York Knicks": Knicks,
  "Oklahoma City Thunder": Thunder,
  "Orlando Magic": Magic,
  "Philadelphia 76ers": Sixers,
  "Phoenix Suns": Suns,
  "Portland Trail Blazers": Blazers,
  "Sacramento Kings": Kings,
  "San Antonio Spurs": Spurs,
  "Toronto Raptors": Raptors,
  "Utah Jazz": Jazz,
  "Washington Wizards": Wizards
};

const Predictions = () => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [fade, setFade] = useState(true);

  const handleGenerate = () => {
    const selectedTeam1 = document.getElementById('team1').value;
    const selectedTeam2 = document.getElementById('team2').value;

    // Set the fade state to false to trigger fade-out effect
    setFade(false);

    // Set the teams and trigger the fade-in effect after a short delay
    setTimeout(() => {
      setFade(true);
      setTeam1(selectedTeam1);
      setTeam2(selectedTeam2);
      // Set the fade state to true to trigger fade-in effect
    }, 275); // Adjust the delay as needed to match the duration of the fade-out animation
  };

  return (
    <div className={`pred-content ${fade ? 'fade-in' : 'fade-out'}`}>
      <div className='PredContainer'>
        <div className="HeaderText">
          <div className="Header-and-Paragraph">
            <h1 className='Header'>Predict</h1>
            <p className='HeaderParagraph'>
              Predict the future results of a game with great accuracy with our machine learning model
            </p>
          </div>
        </div>
      </div>
      <div className='Buttons'>
        <div className='PredButtons'>
          <div className="ButtonContent">
            <div>
              <h1 className='ButtonHeading'>Choose Your Teams</h1>
              <div className='pred-teams'>
                <div className='team-1'>
                  <div className='pred-single-team'>
                    <select id="team1" name="team1">
                      {Object.keys(nbaTeamLogos).map((team, index) => (
                        <option key={index} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button className='generate-btn generate-button' onClick={handleGenerate}><span className='generate-text'>Generate</span></button>
                <div className='team-2'>
                  <div className='pred-single-team'>
                    <select id="team2" name="team2">
                      {Object.keys(nbaTeamLogos).map((team, index) => (
                        <option defaultValue="Boston Celtics" key={index} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`test-results ${team1 && team2 ? 'fade-in' : ''}`}>
        {team1 && team2 && (
          <div className="logos-container">
            <img className='team-image team-1-image' src={nbaTeamLogos[team1]} alt={`${team1} Logo`} />
            <img className='vs-image' src={vsLogo} alt={`versus logo`} />
            <img className='team-image team-2-image' src={nbaTeamLogos[team2]} alt={`${team2} Logo`} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Predictions;
