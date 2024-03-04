import Breadcrumb from "../../../Components/Admin/Breadcrumbs/Breadcrumb";
import Inspections from "../../../Components/Admin/Inpections/Inspections";
import DefaultLayout from "../../../layout/DefaultLayout";

const InspectionsPage = () => {
    return ( 
        <>
        <DefaultLayout>
            <Breadcrumb pageName="Inspection"/>
            <Inspections/>
        </DefaultLayout>
        </>
     );
}
 
export default InspectionsPage;