import React from 'react';
import ShowTable from "../components/ShowTable";
import BookProductModal from "../components/BookProductModal";
import ReturnProductModal from "../components/ReturnProductModal";

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