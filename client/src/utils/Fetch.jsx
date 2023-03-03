import client from './client';

export const getUserById = async (id) => {
    console.log('getUserById', id)
    client
      .get(`/users/${id}`)
      .then((res) => {
        console.log('WWWWWWW res', res.data);
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });

}