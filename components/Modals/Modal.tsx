import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import BootstrapModal from 'react-bootstrap/Modal';

import './Modals.module.scss';

interface Props {
    id: string;
    children?: React.ReactNode;
    withCloseButton?: boolean;
    contentClassName?: string;
    bodyClassName?: string;
    dataBsBackdrop?: 'static' | 'true';
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
        onCloseButtonPress,
        withCloseButton = true,
        dataBsBackdrop = 'true',
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

    return (
        <BootstrapModal id={id} show={isVisible} ref={modalRef} backdrop={dataBsBackdrop}>
            <div className="modal-dialog modal-dialog-centered my-5">
                <div className={`border-0 text-center modal-content ${contentClassName}`}>
                    {withCloseButton && (
                        <button
                            type="button"
                            onClick={onCloseButtonPress}
                            className="close-btn bg-white rounded-circle d-flex align-self-center justify-content-center align-items-center"
                            data-bs-dismiss="modal"
                            data-bs-target={id}
                            aria-label="Close"
                        >
                            <div className="btn-close mx-auto" />
                        </button>
                    )}
                    <div className={`modal-body mx-auto ${bodyClassName}`}>{children}</div>
                </div>
            </div>
        </BootstrapModal>
    );
};

Modal.displayName = 'Modal';

export default React.forwardRef(Modal);
