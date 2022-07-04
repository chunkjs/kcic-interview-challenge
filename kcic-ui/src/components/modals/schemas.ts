const addClaimSchema = {
  title: '',
  description: 'Please enter the fields below.',
  type: 'object',
  required: [
    'firstName',
    'lastName',
  ],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      default: 'Chuck',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
      default: 'Norris',
    },
    Product: {
      type: 'string',
      title: 'Product',
      default: '4k TV',
    },
    Issue: {
      type: 'string',
      title: 'Issue',
      default: 'Image of my roundhouse kick broke it',
    },
    PaymentAmount: {
      type: 'number',
      title: 'Requested Payment Amount',
      default: 1,
    },
  },
};

const uiSchema = {
  Issue: {
    'ui:widget': 'textarea',
  },
};

export { addClaimSchema, uiSchema };
