import React from 'react';

function FoundUser({ foundUser }) {
  const { firstName, lastName } = foundUser;

  const editUserData = (row) => {
    console.log('row', row);
  };
  return (
    <>
      <article>
        <h2>
          FoundUser: {firstName} {lastName}
        </h2>
        <section>
          <table>
            <thead>
              <tr>
                <th>Data Point</th>
                <th>Result</th>
                <th>Edit Data</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(foundUser).map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1].toString()}</td>
                    <td>
                      <button onClick={() => editUserData(row)}><span className='text-blue-500'>Edit</span></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </article>
    </>
  );
}

export default FoundUser;
