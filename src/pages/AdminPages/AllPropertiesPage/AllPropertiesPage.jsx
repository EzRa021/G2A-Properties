import AllProperties from "../../../Components/Admin/Allproperties/AllProperties";
import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../layout/DefaultLayout";
import React from "react";

const AllPropertiesPage = () => {
    return ( 
        <>
        <DefaultLayout>
            <Breadcrumb pageName="All Properties"/>
            <AllProperties/>
        </DefaultLayout>
        </>
     );
}
 
export default AllPropertiesPage;