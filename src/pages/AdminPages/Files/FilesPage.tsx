
import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../../layout/DefaultLayout";
import React from "react";
import Files from "../../../Components/Admin/files/File";



const FilesPage = () => {
    return (<>
        <DefaultLayout>
            <Breadcrumb pageName="Files" />
           <Files/>
        </DefaultLayout>


    </>);
}

export default FilesPage;