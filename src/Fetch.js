import React, { CSSStyleSheet }  from "react";
import UseFetch from "./hooks";
import GridLoader from "react-spinners/GridLoader";




export default function Fetch({ uri, renderSuccess, loadingFallback =<div className="loading"> <GridLoader /></div>, renderError = error => (
<pre>{JSON.stringify(error, null, 2)}</pre> )
}) {

const { loading, data, error } = UseFetch(uri); if (loading) return loadingFallback;
if (error) return renderError(error);
if (data) return renderSuccess({ data });
}