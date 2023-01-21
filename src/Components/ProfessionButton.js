import React from "react";

const ProfessionButton = ({ title }) => {
    return (
        <div>
            <button className="ba2 br2 bg-light-blue dib grow ph5 pv2 mt1 mb1" style={{ width: "300px", height: "50px" }}>{title}</button>
        </div>
    );
}

export default ProfessionButton;