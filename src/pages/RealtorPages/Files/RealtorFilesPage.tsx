
import Breadcrumb from "../../../Components/Realtor/Breadcrumbs/Breadcrumb";
import RealtorFiles from "../../../Components/Realtor/files/RealtorFile";
import DefaultLayout from "../../../Realtorlayout/DefaultLayout";
import React from "react";




const RealtorFilesPage = () => {
    return (<>
        <DefaultLayout>
            <Breadcrumb pageName="Files" />
           <RealtorFiles/>
        </DefaultLayout>


    </>);
}

export default RealtorFilesPage;