import React from "react";

const Congrates = ({ success }) => {
  return (
    <>
      {success ? (
        <div data-test="component-congrates">
          <p data-test="congrates-message">Congratulations!!</p>
        </div>
      ) : (
        <div data-test="component-congrates"></div>
      )}
    </>
  );
};

export default Congrates;
