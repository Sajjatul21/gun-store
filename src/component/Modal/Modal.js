import React from 'react';

const Modal = ({ data, setModalData }) => {
    // console.log(data)
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-lg font-bold">{data.name}</h2>
                    <p className="py-4">Capacity: {data.capacity}</p>
                    <p className="py-4">Category: {data.category}</p>
                    <p className="py-4">Price: ${data.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;