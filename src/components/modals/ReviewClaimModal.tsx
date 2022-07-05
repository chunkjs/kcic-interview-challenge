import {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody, Input, Form, Label,
} from 'reactstrap';

function ReviewClaimModal({ showModal, toggle, status }: { showModal: boolean, toggle: () => void, status: number }) {
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
