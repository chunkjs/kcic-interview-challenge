import { useState, useEffect } from 'react';
import { Button, Spinner } from 'reactstrap';
import AddClaimModal from '../../components/modals/AddClaimModal';

import QueueList from './QueueList';
import ErrorBoundary from '../../components/ErrorBoundary';

import { getAllClaims } from '../../services/claim-service';

function ApprovalQueue() {
  const [showAddClaimModal, setShowAddClaimModal] = useState(false);
  const [showReviewClaimModal, setShowReviewClaimModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [claimAdded, setClaimAdded] = useState(false);
  const [claims, setClaims] = useState<Array<any>>([]);

  useEffect(() => {
    setLoading(true);
    getAllClaims().then((data) => {
      setClaims(data);
      setLoading(false);
    }, (error) => {
      setLoading(false);
    });
  }, [claimAdded]);

  const toggleAddClaim = () => {
    setShowAddClaimModal(!showAddClaimModal);
  };

  const toggleReviewClaimModal = () => {
    setShowReviewClaimModal(!showReviewClaimModal);
  };

  return (
    <>
      <h1>Warranty Claims Approval Queue</h1>
      <p>Warranty claims pending review are listed below.</p>
      {loading === true
        ? <Spinner animation="border" variant="primary" />
        : (
          <ErrorBoundary>
            {claims && claims.length > 0 && <QueueList claims={claims} showReviewClaimModal={showReviewClaimModal} toggleReviewClaimModal={toggleReviewClaimModal} />}
            <Button className="btn btn-danger" onClick={toggleAddClaim}>Add Claim</Button>
            <AddClaimModal successSave={() => setClaimAdded(true)} showModal={showAddClaimModal} toggle={toggleAddClaim} />
          </ErrorBoundary>
        )}
    </>
  );
}

export default ApprovalQueue;
