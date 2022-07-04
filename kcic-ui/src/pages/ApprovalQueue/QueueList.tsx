import { Button } from 'reactstrap';
import ReviewClaimModal from '../../components/modals/ReviewClaimModal';
import { useUserService } from '../../user-context';

import { getCurrencyValue } from '../../utils/formatter';

const statusMap = new Map([[0, 'Pending'], [1, 'Approved'], [2, 'Rejected']]);

function QueueList({ claims, showReviewClaimModal, toggleReviewClaimModal }: { claims: Array<any>, showReviewClaimModal: boolean, toggleReviewClaimModal: () => void, }) {
    const { state: user } = useUserService();
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Date Submitted</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Issue</th>
                    <th>Documented?</th>
                    <th style={{ textAlign: 'right' }}>Payment Amount</th>
                    <th>Status</th>
                    {user.currentUser.username === 'ApproverUser' &&
                        <th>Review</th>}
                </tr>
            </thead>
            <tbody>
                {claims.map(claim => <tr key={claim.id}>
                    <td>{claim.dateSubmitted}</td>
                    <td>{claim.firstName} {claim.lastName}</td>
                    <td>{claim.product}</td>
                    <td>{claim.issue}</td>
                    <td>{claim.isDocumented === true ? 'Yes' : 'No'}</td>
                    <td style={{ textAlign: 'right' }}>{getCurrencyValue(claim.paymentAmount)}
                    </td>
                    <td>{statusMap.get(claim.status)}</td>
                    {user.currentUser.username === 'ApproverUser' && <td>
                        <Button className="btn btn-danger" onClick={toggleReviewClaimModal}>Review Claim</Button>
                        <ReviewClaimModal status={claim.status} showModal={showReviewClaimModal} toggle={toggleReviewClaimModal} />
                    </td>}

                </tr>
                )}
            </tbody>
        </table>
    )
}

export default QueueList;