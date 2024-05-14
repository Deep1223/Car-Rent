import React, { lazy, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import TableStyles from '../../../components/tablestyle';

const Footer = lazy(() => import('../../../common/footer'));

interface FormData {
    id?: any;
    name: string;
    image: string;
    description: string;
    rating: string;
    city: string;
    country: string;
    errors?: { [key: string]: string };
    timestamp?: any;
}

const TestimonialMaster: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAdding, setIsAddingtext] = useState<boolean>(false); // Flag to indicate whether adding or editing
    const [formData, setFormData] = useState<FormData>({
        name: "",
        image: "",
        description: "",
        rating: "",
        city: "",
        country: "",
    });
    const [testimonialdata, setTestimonialData] = useState<FormData[]>([]);
    const [id, setid] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const OpenSidebar = (adding: boolean, row?: FormData) => {
        setIsAddingtext(adding);
        setSidebarOpen(true);
        if (adding) {
            handleReset();
        }
    }

    const columns = [
        {
            name: 'Name',
            selector: (row: FormData) => row.name,
            sortable: true,
        },
        {
            name: 'City',
            selector: (row: FormData) => row.city,
            sortable: true,
        },
        {
            name: 'Country',
            selector: (row: FormData) => row.country,
            sortable: true,
        },
        {
            name: 'Description',
            selector: (row: FormData) => row.description,
            sortable: true,
        },
        {
            name: 'Rating',
            selector: (row: FormData) => row.rating,
            sortable: true,
        },
        {
            name: 'Image',
            cell: (row: FormData) => {
                const timestamp = new Date(row.timestamp);
                const year = timestamp.getFullYear();
                const month = String(timestamp.getMonth() + 1).padStart(2, '0');
                const imgfoldername = 'testimonial';
                return (
                    <a href={`/images/${year}/${month}/${imgfoldername}/${row.image}`} target="_blank" rel="noreferrer noopener">
                        <img src={`/images/${year}/${month}/${imgfoldername}/${row.image}`} alt={row.name} style={{ maxWidth: '50px', height: '39px', padding: '5px 0px' }} />
                    </a>
                );
            }
        },
        {
            name: 'Actions',
            cell: (row: FormData) => (
                <div className="d-flex flex-row gap-3">
                    <a href="#" onClick={() => handleEdit(row.id)} className="text-decoration-none text-dark">
                        <i className="bi bi-pencil-square"></i>
                    </a>
                    <a href="#" onClick={() => handleDelete(row.id)} className="text-decoration-none text-dark">
                        <i className="bi bi-trash"></i>
                    </a>
                </div>
            ),
        }
    ];

    const handleChange = (e: ChangeEvent<any>) => {
        const { name, value } = e.target;

        let DataValue: string | number;
        DataValue = value;
        setFormData({ ...formData, [name]: DataValue });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const errors: { [key: string]: string } = {};
            if (!formData.name.trim()) {
                errors.name = 'Name is Required';
            }
            if (!formData.image) {
                errors.image = 'Image is Required';
            }
            if (!formData.description) {
                errors.description = 'Description is Required';
            }
            if (!formData.rating) {
                errors.rating = 'Rating is Required';
            }
            if (!formData.city) {
                errors.city = 'City is Required';
            }
            if (!formData.country) {
                errors.country = 'Country is Required';
            }
    
            if (Object.keys(errors).length > 0) {
                setFormData(prevState => ({ ...prevState, errors }));
                return;
            }
    
            if (id !== '') {
                if (formData.image !== "") {
                    let updatedImageData = formData.image;
                    if (typeof formData.image === 'string') {
                        const uploadedFileInput = document.getElementById('image') as HTMLInputElement | null;
                        const uploadedFile = uploadedFileInput?.files?.[0];
                        if (uploadedFile) {
                            const imageName = uploadedFile.name;
            
                            const formDataImage = new FormData();
                            formDataImage.append('file', uploadedFile);
            
                            await axios.post("http://localhost:5000/testimonialupload", formDataImage);
            
                            updatedImageData = imageName;
                        }
                    }
                    const updatedFormData = { ...formData, image: updatedImageData };
            
                    const response = await axios.put(`http://localhost:5000/testimonialmaster/${id}`, updatedFormData);
                    console.log(response.data);
                    setSidebarOpen(false);
                } else {
                    const response = await axios.put(`http://localhost:5000/testimonialmaster/${id}`, formData);
                    console.log(response.data);
                    setSidebarOpen(false);
                }
            } else {
                let imageName = "";
                if (formData.image) {
                    const file = (e.target as HTMLFormElement).elements.namedItem('image') as HTMLInputElement;
                    if (file && file.files && file.files[0]) {
                        const uploadedFile = file.files[0];
                        imageName = `${uploadedFile.name}`;
    
                        const formData = new FormData();
                        formData.append('file', uploadedFile);
                        await axios.post("http://localhost:5000/testimonialupload", formData);
                    }
                    formData.image = imageName;
    
                    console.log(formData);
    
                    const response = await axios.post("http://localhost:5000/testimonialmaster", formData);
                    console.log(response.data);
                }
            }
    
            setFormData(prevState => ({ ...prevState, errors: {} }));
            fetchtestimonialData();
            handleReset();
        } catch (error) {
            console.error(error);
        }
    };
    

    useEffect(() => {
        fetchtestimonialData();
    }, []);

    const fetchtestimonialData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/testimonialmaster');
            setTestimonialData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`http://localhost:5000/testimonialmaster/${id}`);
            fetchtestimonialData();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const handleEdit = async (id: any) => {
        OpenSidebar(false, id);
        try {
            const response = await axios.get<FormData>(`http://localhost:5000/testimonialmaster/${id}`);
            setFormData(response.data);
            setid(id);

            console.log('Editing testimonialmaster data with id:', id);
        } catch (error) {
            console.error('Error fetching testimonialmaster data:', error);
        }
    };

    const handleReset = () => {
        setFormData({ name: "", image: "", description: "", rating: "", city: "", country: "" });
    };

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredtestimonialData = testimonialdata.filter(master =>
        master.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="main">
                <main className="content px-3 py-3 cr-main-body-container">
                    <div className="container-fluid rounded full-height-container">
                        <div className="row align-items-center mb-0 py-3 gx-2">
                            <div className="col">
                                <h3 className="fw-bold fs-5 mb-0 ">Testimonial Master</h3>
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
                            data={filteredtestimonialData}
                            pagination
                            customStyles={TableStyles}
                        />

                    </div>
                </main>

                <Footer />
            </div>

            <div id="right-sidebar" className={`right-sidebar modal-Default ${sidebarOpen ? 'active' : ''}`}>
                <div className="py-3 px-3">
                    <h2 className="fs-5 fw-600">{isAdding ? 'Add Testimonial Details Master' : 'Update Testimonial Details Master'}</h2>
                    <button type="button" className="close-btn py-1 px-3 mt-1" onClick={closeSidebar}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </button>
                </div>
                <div className="container px-3 right-sidebar-overflow">
                    <main className="content rounded cr-container-right-sidebar-form">
                        <form id="testimonialmasterForm" onSubmit={handleSubmit}>
                            <div className="container-fluid rounded bg-white py-3">
                                <div className='row'>
                                    <div className="col-12">
                                        <div className="form-group mb-3">
                                            <label htmlFor="image" className="form-label form-label-custom-margin cr-form-title">Image <span className='text-danger'> *</span></label>
                                            <input
                                                type="file"
                                                className={`form-control-file form-control border border-custom cr-form-input-type ${formData.errors?.image && 'is-invalid'}`}
                                                id="image"
                                                name="image"
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.image && <div className="invalid-feedback">{formData.errors.image}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Rating<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type ${formData.errors?.rating && 'is-invalid'}`}
                                                id="rating"
                                                name="rating"
                                                value={formData.rating}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.rating && <div className="invalid-feedback">{formData.errors.rating}</div>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Regard's Name<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type ${formData.errors?.name && 'is-invalid'}`}
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.name && <div className="invalid-feedback">{formData.errors.name}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Description<span className='text-danger'> *</span></label>
                                            <textarea
                                                className={`form-control border border-custom cr-form-input-type-textarea ${formData.errors?.description && 'is-invalid'}`}
                                                rows={4}
                                                id="description"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.description && <div className="invalid-feedback">{formData.errors.description}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">City<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type ${formData.errors?.city && 'is-invalid'}`}
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.city && <div className="invalid-feedback">{formData.errors.city}</div>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Country<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type ${formData.errors?.country && 'is-invalid'}`}
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.country && <div className="invalid-feedback">{formData.errors.country}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-2 justify-content-end">
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary custom-button-border">{isAdding ? 'Submit' : 'Update'}</button>
                                    </div>
                                    <div className="col-auto">
                                        <button type="reset" className="btn custom-button-border bg-white" onClick={handleReset}>Reset</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
            </div >

        </>
    )
}

export default TestimonialMaster;
