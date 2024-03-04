import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../layout/DefaultLayout";
import React from "react";
import RealtorSingle from "../../../Components/Admin/RealtorSingle/RealtorSingle";

React
const RealtorSinglePage = () => {
    return ( 
        <>
        <DefaultLayout>
            <Breadcrumb pageName="Realtors/Siyanbola Ogunnaike "/>
            <RealtorSingle/>
        </DefaultLayout>
        </>
     );
}
 
export default RealtorSinglePage;