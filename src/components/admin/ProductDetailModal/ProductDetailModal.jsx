/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactModal from 'react-modal';
import Quill from '../../Quill/Quill';
import { useEffect } from 'react';
ReactModal.setAppElement('#root');

const button = css`
    box-sizing: border-box;
    margin: 5px 5px 5px 0px;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        border: 1px solid #2400c4cb;
    }

    &:active {
        background-color: #00005cff;
        color: #eeeeee;
    }
`

function ProductDetailModal({isOpen, setIsOpen, value, onchange, ref}) {
    
    const handleOk = () => {
        handleClose();
    }

    const handleClose = () => {
        setIsOpen(() => false);
    }


    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            style={
                {
                    content: {
                        margin: "0px auto",
                        width: "1000px",
                        height: "800px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }
                }
            }
        >
            <Quill onChange={onchange} ref={ref} value={value}/>
            <div>
                <button css={button} onClick={handleOk}>확인</button>
                <button css={button} onClick={handleClose}>취소</button>
            </div>
      </ReactModal>
    );
}

export default ProductDetailModal;