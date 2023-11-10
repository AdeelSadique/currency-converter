import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost/getApi/getApi.php')
      .then(res => {
        const data = res.data.data;
        // console.log(data);
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => (
            <tr>
              <td>{data.user_id}</td>
              <td>{data.user_name}</td>
              <td>{data.user_email}</td>
              <td>{data.dt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
