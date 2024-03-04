import AddRealtors from "../../../Components/Admin/Addrealtors/AddRealtors";
import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../layout/DefaultLayout";
import React from "react";

const AddRealtorsPage = () => {
    return ( 
        <>
        <DefaultLayout>
            <Breadcrumb pageName="Add Realtors"/>
            <AddRealtors/>
        </DefaultLayout>
        </>
     );
}
 
export default AddRealtorsPage;