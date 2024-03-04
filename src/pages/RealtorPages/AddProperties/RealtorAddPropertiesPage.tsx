import RealtorAddProperties from "../../../Components/Realtor/Addproperties/RealtorAddProperties";
// import AddProperties from "../../../Components/Realtor/Addproperties/RealtorAddProperties";
import Breadcrumb from "../../../Components/Realtor/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../Realtorlayout/DefaultLayout";
import React from "react";

const RealtorAddPropertiesPage = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Add Properties" />
                <RealtorAddProperties />
            </DefaultLayout>

        </>
    );
}

export default RealtorAddPropertiesPage;