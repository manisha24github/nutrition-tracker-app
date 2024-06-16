import { useEffect, useState } from 'react';
import { getAllTracks } from '../../services/tracker.mjs';
import { useNavigate } from 'react-router-dom';

function Tracker() {
  const [tracks, setTracks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const allTracks = await getAllTracks();
      setTracks(allTracks);
      //console.log('allTracks', allTracks);
    }

    fetchData();
  }, []);

  return (
    <>
      <div style={{ paddingTop: '30px' }}>
        <label className="control-label h4" style={{ marginBottom: '20px' }}>
          Your daily food tracker report
        </label>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Meal</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date</th>
              <th scope="col">Carbohydrate</th>
              <th scope="col">Protein</th>
              <th scope="col">Fat</th>
              <th scope="col">Calorie</th>
              <th scope="col">Fiber</th>
            </tr>
          </thead>
          <tbody>
            {tracks.length > 0 &&
              tracks.map((track) => {
                return (
                  <tr key={track.id}>
                    <td>{track.mealname}</td>
                    <td>{track.quantity}</td>
                    <td>{track.date}</td>
                    <td>{track.carbohydrates}</td>
                    <td>{track.protein}</td>
                    <td>{track.fat}</td>
                    <td>{track.calories}</td>
                    <td>{track.fiber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tracker;
