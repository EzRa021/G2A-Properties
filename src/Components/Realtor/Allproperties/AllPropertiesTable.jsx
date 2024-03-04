import { users } from "../../../Ui/Icons";
import { Table, TableHeader, TableColumn, TableBody, Pagination, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Tabs, Tab, Card } from "@nextui-org/react";
import React from "react";



const AllPropertiesTable = () => {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;

    const pages = Math.ceil(users.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users.slice(start, end);
    }, [page, users]);

    const [selected, setSelected] = React.useState("Name");
   
    return ( 
        <>
         <div className="mt-20">
                    <div className="flex w-full flex-col">
                        <Tabs
                            aria-label="Options"
                            selectedKey={selected}
                            onSelectionChange={setSelected}

                            variant="underlined" className=" text-orange-600 font-bold border-b-1 border-[#E4E7EC] py-3 border-t-1"
                            

                        >
                            <Tab key="All Properties" title="All Properties">
                                <Card>
                                    <Table
                                        aria-label="Example table with client side pagination"
                                        bottomContent={
                                            <div className="flex w-full justify-center">
                                                <Pagination
                                                    isCompact
                                                    showControls
                                                    showShadow
                                                    color="secondary"
                                                    page={page}
                                                    total={pages}
                                                    onChange={(page) => setPage(page)}
                                                />
                                            </div>
                                        }
                                        classNames={{
                                            wrapper: "min-h-[222px]",
                                        }}
                                    >
                                        <TableHeader>
                                            <TableColumn key="name">NAME</TableColumn>
                                            <TableColumn key="role">ROLE</TableColumn>
                                            <TableColumn key="status">STATUS</TableColumn>
                                        </TableHeader>
                                        <TableBody items={items}>
                                            {(item) => (
                                                <TableRow key={item.name}  className=" border-b-1 border-[#E4E7EC] mt-0 py-10">
                                                    {(columnKey) => <TableCell className="py-3 mt-0 font-bold">{getKeyValue(item, columnKey)}</TableCell>}
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>

                                </Card>
                            </Tab>
                            <Tab key="Approved" title="Approved">
                                <Card>
                                    <Table
                                        aria-label="Example table with client side pagination"
                                        bottomContent={
                                            <div className="flex border-t-1 border-b-1 py-3 border-[#E4E7EC]">
                                                <Pagination
                                                // className=""
                                                    isCompact
                                                    showControls
                                                    showShadow
                                                    color="secondary"
                                                    page={page}
                                                    total={pages}
                                                    onChange={(page) => setPage(page)}
                                                />
                                            </div>
                                        }
                                        classNames={{
                                            wrapper: "min-h-[222px]",
                                        }}
                                    >
                                        <TableHeader >
                                            <TableColumn key="name">NAME</TableColumn>
                                            <TableColumn key="size">size</TableColumn>
                                            <TableColumn key="status">STATUS</TableColumn>
                                        </TableHeader>
                                        <TableBody items={items}>
                                            {(item) => (
                                                <TableRow key={item.name}>
                                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>

                                </Card>
                            </Tab>
                            <Tab key="Pending" title="Pending">
                                <Card>
                                    <Table
                                        aria-label="Example table with client side pagination"
                                        bottomContent={
                                            <div className="flex w-full justify-center">
                                                <Pagination
                                                    isCompact
                                                    showControls
                                                    showShadow
                                                    color="secondary"
                                                    page={page}
                                                    total={pages}
                                                    onChange={(page) => setPage(page)}
                                                />
                                            </div>
                                        }
                                        classNames={{
                                            wrapper: "min-h-[222px]",
                                        }}
                                    >
                                        <TableHeader>
                                            <TableColumn key="name">NAME</TableColumn>
                                            <TableColumn key="role">ROLE</TableColumn>
                                            <TableColumn key="status">STATUS</TableColumn>
                                        </TableHeader>
                                        <TableBody items={items}>
                                            {(item) => (
                                                <TableRow key={item.name}>
                                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>

                                </Card>
                            </Tab>
                            <Tab  key="Sold" title="Sold">
                                <Card>
                                    <Table
                                        aria-label="Example table with client side pagination"
                                        bottomContent={
                                            <div className="flex w-full justify-center">
                                                <Pagination
                                                    isCompact
                                                    showControls
                                                    showShadow
                                                    color="secondary"
                                                    page={page}
                                                    total={pages}
                                                    onChange={(page) => setPage(page)}
                                                />
                                            </div>
                                        }
                                        classNames={{
                                            wrapper: "min-h-[222px]",
                                        }}
                                    >
                                        <TableHeader>
                                            <TableColumn key="name">NAME</TableColumn>
                                            <TableColumn key="role">ROLE</TableColumn>
                                            <TableColumn key="status">STATUS</TableColumn>
                                        </TableHeader>
                                        <TableBody items={items}>
                                            {(item) => (
                                                <TableRow key={item.name}>
                                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>

                                </Card>
                            </Tab>

                        </Tabs>
                    </div>
                    
                </div>
        </>
     );
}
 
export default AllPropertiesTable;