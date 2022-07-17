import React from "react";
import UseFetch from "./hooks";

export default function Fetch({ uri, renderSuccess, loadingFallback = <p>loading...</p>, renderError = error => (
<pre>{JSON.stringify(error, null, 2)}</pre> )
}) {

const { loading, data, error } = UseFetch(uri); if (loading) return loadingFallback;
if (error) return renderError(error);
if (data) return renderSuccess({ data });
}