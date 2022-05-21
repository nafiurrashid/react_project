import React from 'react';
import ShowTable from "./ShowTable";
import BookProductModal from "./BookProductModal";
import ReturnProductModal from "./ReturnProductModal";

const RentalTableHome = () => {
    return (
        <div className="container">
            {/* Search & Show table starts */}
            <ShowTable />
            <div style={{ textAlign: "right" }}>
                {/* start Book modal */}
                <BookProductModal />
                {/* end modal */}
                <ReturnProductModal />
            </div>
        </div>
    );
};

export default RentalTableHome;