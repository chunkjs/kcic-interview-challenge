const _modelClaims = (claims: any) => {
  const pendingItems = claims.filter((item: any) => item.status === 0);
  const nonPendingItems = claims.filter((item: any) => item.status !== 0).sort((claim1: any, claim2: any) => {
    if (new Date(claim1.dateSubmitted) < new Date(claim2.dateSubmitted)) {
      return -1;
    } if (new Date(claim1.dateSubmitted) > new Date(claim2.dateSubmitted)) {
      return 1;
    }
    return 0;
  });

  return pendingItems.concat(nonPendingItems);
};
const addClaim = (data) => fetch('http://localhost:3000/api/Claims', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((claim) => claim)
  .catch((error) => error);
const getAllClaims = () => fetch('http://localhost:3000/api/Claims', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => _modelClaims(data.claims)) // model the data to comply with ordering requirement, however this operation should live in the db layer
  .catch((error) => error);

export { getAllClaims, addClaim };
