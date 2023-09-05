import React from 'react';
import './style.css';

function PackageItem({packageItem}) {
    const {destinationName, destinationTel, destinationAddress, packageWeight} = packageItem
    return (
        <div className="package-item-wrapper">
            <p>
                <span>{destinationName}</span>
                <span>{destinationTel}</span>
                <span>{destinationAddress}</span>
                {packageWeight} <span>кг.</span>
            </p>

        </div>
    );
}

export default PackageItem