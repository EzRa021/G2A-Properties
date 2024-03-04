// import AllProperties from "../../../Components/Realtor/Allproperties/AllProperties";
import RealtorAllProperties from "../../../Components/Realtor/Allproperties/RealtorAllProperties";
import Breadcrumb from "../../../Components/Realtor/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../Realtorlayout/DefaultLayout";
import React from "react";

const RealtorAllPropertiesPage = () => {
    return ( 
        <>
        <DefaultLayout>
            <Breadcrumb pageName="All Properties"/>
            <RealtorAllProperties/>
        </DefaultLayout>
        </>
     );
}
 
export default RealtorAllPropertiesPage;