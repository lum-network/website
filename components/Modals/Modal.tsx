import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import BootstrapModal from 'react-bootstrap/Modal';

import styles from './Modals.module.scss';

interface Props {
    id: string;
    children?: React.ReactNode;
    withCloseButton?: boolean;
    bodyClassName?: string;
    contentClassName?: string;
    dialogClassName?: string;
    dataBsBackdrop?: 'static' | boolean;
    onCloseButtonPress?: () => void;
}

interface Handlers {
    toggle: () => void;
    show: () => void;
    hide: () => void;
}

const Modal: React.ForwardRefRenderFunction<Handlers, Props> = (props, ref) => {
    const {
        id,
        children,
        bodyClassName,
        contentClassName,
        dialogClassName,
        onCloseButtonPress,
        withCloseButton = true,
        dataBsBackdrop = true,
    } = props;

    const [isVisible, setIsVisible] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const bootstrapModalRef = useRef();

    useImperativeHandle(
        ref,
        () => ({
            toggle: () => {
                setIsVisible(!isVisible);
            },
            show: () => {
                setIsVisible(true);
            },
            hide: () => {
                setIsVisible(false);
            },
        }),
        [bootstrapModalRef],
    );

    const onClose = () => {
        setIsVisible(false);
        if (onCloseButtonPress) {
            onCloseButtonPress();
        }
    };

    return (
        <BootstrapModal
            centered
            onEscapeKeyDown={onClose}
            id={id}
            show={isVisible}
            ref={modalRef}
            backdrop={dataBsBackdrop}
            backdropClassName="opacity-75"
            dialogClassName={`my-5 ${dialogClassName}`}
            contentClassName={`border-0 text-center ${styles['modal-content']} ${contentClassName}`}
        >
            {withCloseButton && (
                <button
                    type="button"
                    onClick={onClose}
                    className={`${styles['close-btn']} bg-white rounded-circle d-flex align-self-center justify-content-center align-items-center`}
                    aria-label="Close"
                >
                    <div className={`btn-close ${styles['btn-close']} mx-auto`} />
                </button>
            )}
            <BootstrapModal.Body className={`mx-auto ${bodyClassName}`}>{children}</BootstrapModal.Body>
        </BootstrapModal>
    );
};

Modal.displayName = 'Modal';

export default React.forwardRef(Modal);
