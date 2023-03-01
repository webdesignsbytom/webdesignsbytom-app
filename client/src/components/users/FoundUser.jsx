import React from 'react';

function FoundUser({ foundUser }) {
  console.log('xxx', foundUser);
  const { firstName, lastName } = foundUser;
  return (
    <>
      <article>
        <h2>
          FoundUser: {firstName} {lastName}
        </h2>
        <section>
          <table>
            <tr>
              <th>Data Point</th>
              <th>Result</th>
            </tr>
            {Object.entries(foundUser).map((row, index) => {
                console.log('keys', row);
              return (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1].toString()}</td>
                </tr>
              );
            })}
          </table>
        </section>
      </article>
    </>
  );
}

export default FoundUser;
