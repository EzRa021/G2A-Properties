import AddProperties from "../../../Components/Admin/Addproperties/AddProperties";
import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../layout/DefaultLayout";
import React from "react";

const AddPropertiesPage = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Add Properties" />
                <AddProperties />
            </DefaultLayout>

        </>
    );
}

export default AddPropertiesPage;