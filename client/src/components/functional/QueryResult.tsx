import React from 'react';
import {ApolloError} from "@apollo/client";
import LoadingSpinner from "../UI/LoadingSpinner";
import "../../styles/loadingSpinner.scss";

type propsQuery = {
    children?: React.ReactNode | any;
    error: ApolloError | undefined;
    loading: boolean;
    dataQuery: any;
}

const QueryResult: React.FC<propsQuery>=(props)=> {
    const errorData = props.error;
    if (props.error) {
        return <p>ERROR: {errorData?.message}</p>;
    }
    if (props.loading) {
        return (
            <div className={"spinnerContainer"}>
                <LoadingSpinner/>
            </div>
        );
    }
    if (!props.dataQuery) {
        return <p>Nothing to show...</p>;
    }
    if (props.dataQuery) {
        return props.children;
    }
}

export default QueryResult;