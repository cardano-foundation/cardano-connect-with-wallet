import React from 'react';
import ModalDialog from './ModalDialog';

describe('<ModalDialog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ModalDialog
        visible={true}
        content={''}
        icon={undefined}
        handleClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    cy.get('[data-testid="modal-content"] > p').contains('CIP45');
  });
});
