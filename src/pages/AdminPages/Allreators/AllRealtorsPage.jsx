import React from "react";
import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../layout/DefaultLayout";
import AllRealtors from "../../../Components/Admin/Allrealtors/AllRealtors";
// import AllRealtors from "../../../Components/Admin/Addrealtors/AddRealtors";

const AllRealtorPage = () => {
    return ( 
        <>
        <DefaultLayout>
            <Breadcrumb pageName="All Realtor"  />
            <AllRealtors/>
        </DefaultLayout>

        </>
     );
}
 
export default AllRealtorPage;