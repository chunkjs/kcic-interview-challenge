import { useState } from 'react';
import {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody, Alert, Input, Form, Label,
} from 'reactstrap';
import { useUserService } from '../../user-context';

function ReviewClaimModal({ showModal, toggle, status }: { showModal: boolean, toggle: () => void, status: number }) {
  const [error, setError] = useState(false);
  const { state: user } = useUserService();
  console.log('status');
  console.log(status);

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Claim Review</ModalHeader>
        <ModalBody>
          <Form>

            <Label for="exampleEmail">
              Please approve or deny
            </Label>

            <Input />
          </Form>
          {error && <Alert color="danger">Error</Alert>}
        </ModalBody>
        <ModalFooter>
          {status === 0
                        && (
                        <>
                          <Button color="primary" onClick={() => { }} disabled={false}>Approve Claim</Button>
                          <Button color="danger" onClick={() => { }} disabled={false}>Reject Claim</Button>
                        </>
                        )}

          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReviewClaimModal;
