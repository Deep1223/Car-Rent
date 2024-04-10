import React, { lazy, useState, ChangeEvent } from 'react';
import DataTable from 'react-data-table-component';
import TableStyles from '../../../components/tablestyle';

const Footer = lazy(() => import('../../../common/footer'));

interface MyData {
    id: any;
    name: any;
    email: any;
    age: any;
}

const CarList: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAdding, setIsAddingtext] = useState<boolean>(false); // Flag to indicate whether adding or editing
    const [editedRow, setEditedRow] = useState<MyData | null>(null); // State to hold data of the currently edited row

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const OpenSidebar = (adding: boolean, row?: MyData) => {
        setIsAddingtext(adding);
        setEditedRow(row || null); // If row is provided, set it as editedRow, otherwise set to null
        setSidebarOpen(true);
    }

    const handleEdit = (row: MyData) => {
        OpenSidebar(false, row); // Pass the row data to the sidebar for editing
    }

    const handleDelete = (row: MyData) => {
        // Handle delete action here
        console.log("Deleting row:", row);
    }

    const columns = [
        {
            name: 'Name',
            selector: (row: MyData) => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: MyData) => row.email,
            sortable: true,
        },
        {
            name: 'Age',
            selector: (row: MyData) => row.age,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row: MyData) => (
                <div className="d-flex flex-row gap-3">
                    <a href="#" onClick={() => handleEdit(row)} className="text-decoration-none text-dark">
                        <i className="bi bi-pencil-square"></i>
                    </a>
                    <a href="#" onClick={() => handleDelete(row)} className="text-decoration-none text-dark">
                        <i className="bi bi-trash"></i>
                    </a>
                </div>
            ),
        }
    ];

    const data: MyData[] = [
        {
            id: 1,
            name: 'John',
            email: 'john@example.com',
            age: '25'
        },
        {
            id: 2,
            name: 'Jane',
            email: 'jane@example.com',
            age: '30'
        },
        {
            id: 3,
            name: 'Alice',
            email: 'alice@example.com',
            age: '28'
        },
        {
            id: 4,
            name: 'Bob',
            email: 'bob@example.com',
            age: '33'
        },
        {
            id: 5,
            name: 'Eve',
            email: 'eve@example.com',
            age: '27'
        },
        {
            id: 6,
            name: 'David',
            email: 'david@example.com',
            age: '31'
        },
        {
            id: 7,
            name: 'Emma',
            email: 'emma@example.com',
            age: '29'
        },
        {
            id: 8,
            name: 'Michael',
            email: 'michael@example.com',
            age: '35'
        },
        {
            id: 9,
            name: 'Sophia',
            email: 'sophia@example.com',
            age: '26'
        },
        {
            id: 10,
            name: 'William',
            email: 'william@example.com',
            age: '32'
        },
        {
            id: 11,
            name: 'Olivia',
            email: 'olivia@example.com',
            age: '34'
        },
        {
            id: 12,
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: '28'
        },
        {
            id: 13,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            age: '26'
        },
        {
            id: 14,
            name: 'Alice Smith',
            email: 'alice.smith@example.com',
            age: '30'
        },
        {
            id: 15,
            name: 'Bob Johnson',
            email: 'bob.johnson@example.com',
            age: '32'
        },
        {
            id: 16,
            name: 'Emily Brown',
            email: 'emily.brown@example.com',
            age: '25'
        },
        {
            id: 17,
            name: 'Michael Wilson',
            email: 'michael.wilson@example.com',
            age: '29'
        },
        {
            id: 18,
            name: 'Sophia Lee',
            email: 'sophia.lee@example.com',
            age: '27'
        },
        {
            id: 19,
            name: 'William Taylor',
            email: 'william.taylor@example.com',
            age: '31'
        },
        {
            id: 20,
            name: 'Olivia Martinez',
            email: 'olivia.martinez@example.com',
            age: '33'
        },
        {
            id: 21,
            name: 'Daniel Anderson',
            email: 'daniel.anderson@example.com',
            age: '34'
        }
    ];

    const [records, setRecords] = useState(data);
    const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.toLowerCase();
        const filteredData = data.filter(row => {
            return row.name.toLowerCase().includes(inputValue) ||
                row.email.toLowerCase().includes(inputValue) ||
                row.age.toLowerCase().includes(inputValue);
        });
        setRecords(filteredData);
    }

    return (
        <>
            <div className="main">
                <main className="content px-3 py-3 cr-main-body-container">
                    <div className="container-fluid rounded full-height-container">
                        <div className="row align-items-center mb-0 py-3 gx-2">
                            <div className="col">
                                <h3 className="fw-bold fs-5 mb-0 ">Admin Dashboard</h3>
                            </div>
                            <div className="col-auto">
                                <div className="input-group">
                                    <input type="text" className="form-control custom-search-box" placeholder="Search..." onChange={handleFilter} />
                                    <button className="btn btn-outline-secondary custom-search-box" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-primary" id="submitButton" onClick={() => OpenSidebar(true)}>Add New</button>
                            </div>
                        </div>

                        <DataTable
                            columns={columns}
                            data={records}
                            pagination
                            customStyles={TableStyles}
                        />

                    </div>
                </main>

                <Footer />
            </div>

            {/* Sidebar */}
            <div id="right-sidebar" className={`right-sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="container px-3">
                    <div className="py-3">
                        <h2 className="fs-5 fw-600">{isAdding ? 'Add Car Details Master' : 'Update Car Details Master'}</h2>
                        <button type="button" className="close-btn py-1 px-3 mt-1" onClick={closeSidebar}>
                            <i className="bi bi-x-lg text-danger"></i>
                        </button>
                    </div>
                    <main className="content cr-container-right-sidebar-form">
                        <form id="holidayForm">
                            <div className="container-fluid rounded bg-white py-3">
                                <div className="mb-3">
                                    <label className="form-label form-label-custom-margin cr-form-title">Holiday Name<span> *</span></label>
                                    <input type="text" className="form-control border border-custom cr-form-input-type" id="holidayName" name="holidayName" required defaultValue={editedRow?.name || ''} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label form-label-custom-margin cr-form-title">Holiday Type<span> *</span></label>
                                    <select className="form-select border border-custom cr-form-input-type" id="holidayType" name="holidayType"
                                        required>
                                        <option value="Festival Leave">Festival Leave</option>
                                        <option value="Public Holiday">Public Holiday</option>
                                        <option value="Company Holiday">Company Holiday</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label form-label-custom-margin cr-form-title">Short Code<span> *</span></label>
                                    <input type="text" className="form-control border border-custom cr-form-input-type" id="shortName" name="shortName" required defaultValue={editedRow?.age || ''} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label form-label-custom-margin cr-form-title">Date<span> *</span></label>
                                    <input type="date" className="form-control border border-custom cr-form-input-type" id="date" name="date" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label form-label-custom-margin cr-form-title">Description</label>
                                    <textarea className="form-control border border-custom cr-form-input-type" id="description" name="description" rows={1} defaultValue={editedRow?.email || ''}></textarea>
                                </div>

                                <div className="row gx-2 justify-content-end">
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary custom-button-border">{isAdding ? 'Submit' : 'Update'}</button>
                                    </div>
                                    <div className="col-auto">
                                        <button type="reset" className="btn custom-button-border bg-white">Reset</button>
                                    </div>
                                </div>

                            </div>
                        </form>

                    </main>
                </div>
            </div>
        </>
    )
}

export default CarList;
