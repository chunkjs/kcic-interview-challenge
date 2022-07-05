import { useState, useRef } from 'react';
import {
  Button, Modal,
  ModalHeader, ModalBody, Alert,
} from 'reactstrap';
import Form from 'react-jsonschema-form';
import { addClaim } from '../../services/claim-service';
import { addClaimSchema, uiSchema } from './schemas';

import { getTodaysDate } from '../../utils/formatter';

/**
 * TODO: Validation rules
 * @param param0
 */
function AddClaimModal({ showModal, toggle, successSave }: { showModal: boolean, toggle: () => void, successSave: () => void }) {
  const [error, setError] = useState(false);
  let formElement = useRef();

  const modelClaim = (rawClaim: any) => {
    const claim = {
      dateSubmitted: getTodaysDate(),
      firstName: rawClaim.firstName,
      lastName: rawClaim.lastName,
      product: rawClaim.Product,
      issue: rawClaim.Issue,
      paymentAmount: rawClaim.PaymentAmount,
      isDocumented: true,
      status: 0,
    };
    return claim;
  };
  const onSubmit = (form: any) => {
    addClaim(modelClaim(form.formData)).then(() => {
      successSave();
      toggle();
    }, (err) => {
      setError(true);
      console.error(err);
    });
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a Warranty Claim</ModalHeader>
        <ModalBody>
          <Form ref={(form) => { formElement = form; }} schema={addClaimSchema} uiSchema={uiSchema} onSubmit={onSubmit}>
            <br />
            <Button type="submit" color="primary" disabled={false}>Add Claim</Button>
            {' '}
            <Button color="secondary" onClick={toggle} disabled={false}>Cancel</Button>
          </Form>
          {error && <Alert color="danger">Error</Alert>}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddClaimModal;
