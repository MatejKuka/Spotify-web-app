import "../../styles/loadingSpinner.scss"
import React from "react";

const LoadingSpinner = () => {
    return (
        <div className={"spinnerContainer"}>
            <div className={"spinner"}/>;
        </div>
    )
}

export default React.memo(LoadingSpinner);