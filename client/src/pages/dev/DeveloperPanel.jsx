import React, { useEffect, useState } from 'react';

function DeveloperPanel() {
  const [eventLog, setEventLog] = useState([])

  useEffect(() => {
    
  }, [])
  return (
    <>
      <div>
        <h2>DeveloperPanel</h2>
        <div>
          <h4>Event Logs</h4>
          <ul>
            {eventLog.map((event, index) => {
              return (
                <li key={index}>
                  <h6>event</h6>
                  <p>event</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DeveloperPanel;
