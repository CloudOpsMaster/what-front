import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './modal-window.scss';

export const ModalWindow = ({
  children,
  toShow,
  onClose,
  onSubmit,
  onAfterClose,
  title,
  cancelButtonText,
  hideCancelButton,
  submitButtonText,
  useRedButton,
  marginLeft,
}) => (
  <Modal
    className={`${marginLeft ? classNames(styles.wrapper, 'ml-4') : styles.wrapper}`}
    show={toShow}
    onHide={onClose}
    onExited={onAfterClose}
    onEscapeKeyDown={onClose}
  >
    <Modal.Header closeButton>
      <h4>{title}</h4>
    </Modal.Header>
    <Modal.Body className={styles['modal-body']}>
      {children}
    </Modal.Body>
    <Modal.Footer className="justify-content-around">
      {hideCancelButton ? null : <button className={`btn btn-secondary ${styles['modal-btn']}`} type="button" onClick={onClose}>{cancelButtonText}</button>}
      <button className={`btn ${useRedButton ? 'btn-danger' : 'btn-success'} ${styles['modal-btn']}`} type="submit" onClick={onSubmit}>{submitButtonText}</button>
    </Modal.Footer>
  </Modal>
);

ModalWindow.propTypes = {
  toShow: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onAfterClose: PropTypes.func,
  title: PropTypes.string,
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  useRedButton: PropTypes.bool,
  marginLeft: PropTypes.bool,
  hideCancelButton: PropTypes.bool,
};

ModalWindow.defaultProps = {
  title: 'Confirm action',
  cancelButtonText: 'Cancel',
  submitButtonText: 'Confirm',
  useRedButton: false,
  onAfterClose: () => false,
  marginLeft: false,
  hideCancelButton: false,
};
