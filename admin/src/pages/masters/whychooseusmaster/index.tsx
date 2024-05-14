import React, { lazy, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import TableStyles from '../../../components/tablestyle';

const Footer = lazy(() => import('../../../common/footer'));

interface FormData {
    id?: any;
    title: string;
    image: string;
    no: string;
    subtitle: string;
    description: string;
    subimage: string;
    errors?: { [key: string]: string };
    timestamp?: any;
}

const WhyChooseUsMaster: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        image: "",
        no: "",
        subtitle: "",
        description: "",
        subimage: "",
    });
    const [id, setid] = useState('');
    const [tableData, setTableData] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [dataExists, setDataExists] = useState(false);

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

            if (!formData.title.trim()) {
                errors.title = 'Title is Required';
            }
            if (!formData.image) {
                errors.image = 'Image is Required';
            }

            if (Object.keys(errors).length > 0 || tableData.length === 0) {
                setFormData(prevState => ({ ...prevState, errors }));
                setErrorMessage("All fields are required.");
                return;
            }

            if (formData.title.trim() && formData.image.trim() && tableData.length !== 0) {
                if (id !== '') {
                    let updatedImageData = formData.image;
                    const uploadedFileInput = document.getElementById('image') as HTMLInputElement | null;
                    const uploadedFile = uploadedFileInput?.files?.[0];

                    if (typeof formData.image === 'string') {
                        if (uploadedFile) {
                            const imageName = uploadedFile.name;
                            updatedImageData = imageName;
                        }
                    }
                    const updatedFormData = { ...formData, image: updatedImageData };

                    const response = await axios.put(`http://localhost:5000/whychooseusmaster/${id}`, updatedFormData);
                    console.log(response.data);
                    if (response.status === 200) {
                        if (uploadedFile) {
                            const imageName = uploadedFile.name;

                            const formDataImage = new FormData();
                            formDataImage.append('file', uploadedFile);

                            await axios.post("http://localhost:5000/whychooseusupload", formDataImage);

                            updatedImageData = imageName;
                        }
                    }
                } else {
                    let imageName = "";
                    if (formData.image) {
                        const file = document.getElementById('image') as HTMLInputElement;
                        if (file && file.files && file.files[0]) {
                            const uploadedFile = file.files[0];
                            imageName = uploadedFile.name;
                        }

                        formData.image = imageName;

                        try {
                            const response = await axios.post("http://localhost:5000/whychooseusmaster", formData);

                            // Create an array of values for each row
                            const tableDataValues = tableData.map(item => [item.no, item.subtitle, item.description, item.subimage]);
                            if (tableDataValues.length > 0) {

                                const requestData = {
                                    formData,
                                    tableData: tableDataValues
                                };

                                await axios.post('http://localhost:5000/whychooseusdatamaster', requestData);
                            }



                            if (response.status === 200) {
                                if (file && file.files && file.files[0]) {
                                    const uploadedFile = file.files[0];

                                    const uploadFormData = new FormData();
                                    uploadFormData.append('file', uploadedFile);
                                    const uploadResponse = await axios.post("http://localhost:5000/whychooseusupload", uploadFormData);

                                    console.log(uploadResponse.data);
                                }
                            }
                        } catch (error) {
                            console.error("Error occurred:", error);
                        }
                    }
                }
            }

            setFormData(prevState => ({ ...prevState, errors: {} }));
            setErrorMessage("");
            fetchWorkingStepData();
            handleReset();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWorkingStepData();
    }, []);

    const fetchWorkingStepData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/whychooseusmaster');
            const fetchedData = response.data;

            if (fetchedData.length > 0) {
                setDataExists(true);
            } else {
                setDataExists(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleReset = () => {
        setFormData({ title: "", image: "", no: "", subtitle: "", description: "", subimage: "" });
    };


    const handletabledata = () => {

        const newData = { ...formData };

        if (!newData.no || !newData.subtitle || !newData.description || !newData.subimage) {
            setErrorMessage("All fields are required.");
            return;
        }

        const uploadedFile = document.getElementById('subimage') as HTMLInputElement | null;
        if (uploadedFile && uploadedFile.files && uploadedFile.files[0]) {
            const formDataImage = new FormData();
            formDataImage.append('file', uploadedFile.files[0]);

            axios.post("http://localhost:5000/whychooseusdataupload", formDataImage)
                .then(uploadResponse => {
                    console.log(uploadResponse.data);
                })
                .catch(error => {
                    console.error("Error uploading image:", error);
                });
        }

        setTableData(prevData => [...prevData, newData]);
        setFormData(prevData => ({
            ...prevData,
            no: "",
            subtitle: "",
            description: "",
            subimage: "",
        }));

        const subimageInput = document.getElementById('subimage') as HTMLInputElement;
        if (subimageInput) {
            subimageInput.value = "";
        }

        setErrorMessage("");
    };



    const handletabledatadelete = (indexToRemove: number) => {
        setTableData(prevData => prevData.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            <div className="main">
                <main className="content px-3 py-3 cr-main-body-container">
                    <div className="container-fluid rounded full-height-container">
                        <form id="whychooseusmasterForm" onSubmit={handleSubmit}>
                            <div className="container-fluid rounded bg-white py-3">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Title<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type ${formData.errors?.title && 'is-invalid'}`}
                                                id="title"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.title && <div className="invalid-feedback">{formData.errors.title}</div>}
                                        </div>
                                    </div>
                                    <div className="col-6">
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
                                    <div className="col-1">
                                        <div className="form-group mb-4">
                                            <label className="form-label form-label-custom-margin cr-form-title">No<span className='text-danger'> *</span></label>
                                            <input
                                                type="number"
                                                className={`form-control border border-custom cr-form-input-type`}
                                                id="no"
                                                name="no"
                                                value={formData.no}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group mb-4">
                                            <label className="form-label form-label-custom-margin cr-form-title">Sub Title<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type`}
                                                id="subtitle"
                                                name="subtitle"
                                                value={formData.subtitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="form-group mb-4">
                                            <label className="form-label form-label-custom-margin cr-form-title">Description<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type`}
                                                id="description"
                                                name="description"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group mb-4">
                                            <label htmlFor="subimage" className="form-label form-label-custom-margin cr-form-title">Sub Image <span className='text-danger'> *</span></label>
                                            <input
                                                type="file"
                                                className={`form-control-file form-control border border-custom cr-form-input-type`}
                                                id="subimage"
                                                name="subimage"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1 d-flex align-items-center">
                                        <a href='javascript:void(0)'>
                                            <button
                                                className="btn btn-primary custom-button-border"
                                                onClick={handletabledata}
                                            >
                                                <i className="bi bi-plus-lg"></i>
                                            </button>
                                        </a>
                                    </div>
                                    {errorMessage && <div className="error-message error-message-div">{errorMessage}</div>}
                                </div>
                            </div>
                            <div className="row px-3">
                                <div className="col-12">
                                    <table className="table table-striped table-hover">
                                        <thead className='table-font-custom'>
                                            <tr>
                                                <th style={{ width: '5%' }}>No.</th>
                                                <th style={{ width: '25%' }}>Subtitle</th>
                                                <th style={{ width: '60%' }}>Description</th>
                                                <th style={{ width: '5%' }}>Image</th>
                                                <th style={{ width: '5%' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData && tableData.length > 0 ? (
                                                tableData.map((data, index) => (
                                                    <tr key={index}>
                                                        <td>{data.no}</td>
                                                        <td>{data.subtitle}</td>
                                                        <td>{data.description}</td>
                                                        <td>
                                                            <a href={`/images/${data.subimage.split('\\').pop()}`} target="_blank" rel="noreferrer noopener">
                                                                <img src={`/images/${data.subimage.split('\\').pop()}`} alt={data.title} className="img-fluid" style={{ maxWidth: '50px', height: '39px', padding: '5px 0px' }} />
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <i className="bi bi-trash cursor-pointer" onClick={() => handletabledatadelete(index)}></i>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="text-center align-middle">Data not found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="row gx-2 px-3 justify-content-end align-items-center">
                                <div className="col-auto">
                                    {dataExists ? (
                                        <button type="submit" className="btn btn-primary custom-button-border">Update</button>
                                    ) : (
                                        <button type="submit" className="btn btn-primary custom-button-border">Submit</button>
                                    )}
                                </div>
                                <div className="col-auto">
                                    <button type="reset" className="btn custom-button-border bg-white">Reset</button>
                                </div>
                            </div>
                        </form >
                    </div>
                </main>

                <Footer />
            </div>

        </>
    )
}

export default WhyChooseUsMaster;
