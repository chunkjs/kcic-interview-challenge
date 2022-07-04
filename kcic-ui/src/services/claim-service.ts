const addClaim = (data) => fetch('http://localhost:3000/api/Claims', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    console.error('Error:', error);
    return error;
  });
const getAllClaims = () => fetch('http://localhost:3000/api/Claims', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    // model the data to comply with ordering requirement, however this operation should live in the db layer
    const t = _modelClaims(data.claims);
    console.log(t);
    _modelClaims(t);
    return t;
  })
  .catch((error) => {
    console.error('Error:', error);
    return error;
  });

const _modelClaims = (claims) => {
  const pendingItems = claims.filter((item) => item.status === 0);
  const nonPendingItems = claims.filter((item) => item.status !== 0).sort((claim1, claim2) => {
    if (new Date(claim1.dateSubmitted) < new Date(claim2.dateSubmitted)) {
      return -1;
    } if (new Date(claim1.dateSubmitted) > new Date(claim2.dateSubmitted)) {
      return 1;
    }
    return 0;
  });

  return pendingItems.concat(nonPendingItems);
};

export { getAllClaims, addClaim };
