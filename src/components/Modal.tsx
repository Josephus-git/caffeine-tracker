import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'


type ModalProps = {
    children: React.ReactNode;
    handleCloseModal: () =>void
}
export default function Modal(props: ModalProps) {
    const { children, handleCloseModal } = props;
    const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setPortalRoot(document.getElementById('portal'));
    }, []);


    if (!portalRoot) return null;

    return ReactDOM.createPortal(
        <div className="modal-container">
            <button onClick={handleCloseModal} className="modal-underlay" />
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        portalRoot

    );
}