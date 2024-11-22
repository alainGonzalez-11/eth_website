import React from 'react';

const BranchesSection = ({ branches, onBranchClick, selectedBranchId }) => {
  return (
    <div className="branches-section d-flex justify-content-center flex-wrap py-3">
      {branches.map((branch) => (
        <button
          key={branch.id}
          className={`btn  rounded-0 mx-2 my-2 ${selectedBranchId === branch.id ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onBranchClick(branch.id)}
        >
          <i className={`bi ${branch.icon} me-2`} /> {/* Bootstrap icon from the JSON */}
          {branch.name}
        </button>
      ))}
    </div>
  );
};

export default BranchesSection;
