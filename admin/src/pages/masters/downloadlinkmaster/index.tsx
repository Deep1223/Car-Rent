import React, { lazy, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import TableStyles from '../../../components/tablestyle';

const Footer = lazy(() => import('../../../common/footer'));

interface FormData {
    id: any;
    title: string;
    downloadurl: string;
    image: string;
    description: string;
    downloadoption1: string;
    downloadoption2: string;
    url1: string;
    url2: string;
    errors?: { [key: string]: string };
    timestamp?: any;
}

const DownloadlinkMaster: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        id: '',
        title: '',
        downloadurl: "",
        image: '',
        description: '',
        downloadoption1: '',
        downloadoption2: '',
        url1: '',
        url2: ''
    });
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
            const trimmedFormData = { ...formData };
            Object.keys(trimmedFormData).forEach((key) => {
                if (typeof key === 'string' && typeof trimmedFormData[key as keyof FormData] === 'string') {
                    trimmedFormData[key as keyof FormData] = trimmedFormData[key as keyof FormData].trim(); // Trim whitespace
                }
            });

            if (!trimmedFormData.title) {
                errors.title = 'Title is Required';
            }
            if (!trimmedFormData.downloadurl) {
                errors.downloadurl = 'Download Url is Required';
            }
            if (!trimmedFormData.image) {
                errors.image = 'Image is Required';
            }
            if (!trimmedFormData.description) {
                errors.description = 'Description is Required';
            }

            if (Object.keys(errors).length > 0) {
                setFormData(prevState => ({ ...prevState, errors }));
                return;
            }

            let imageName = "";
            let downloadoptionname1 = "";
            let downloadoptionname2 = "";
            if (formData.image && formData.title && formData.description) {
                const file = (e.target as HTMLFormElement).elements.namedItem('image') as HTMLInputElement;
                const downloadimagefile1 = (e.target as HTMLFormElement).elements.namedItem('downloadimage1') as HTMLInputElement;
                const downloadimagefile2 = (e.target as HTMLFormElement).elements.namedItem('downloadimage2') as HTMLInputElement;
                if (file && file.files && file.files[0]) {
                    const uploadedFile = file.files[0];
                    imageName = `${uploadedFile.name}`;

                    const formData = new FormData();
                    formData.append('file', uploadedFile);
                    await axios.post("http://localhost:5000/downloadlinkmasterupload", formData);
                }

                if (downloadimagefile1 && downloadimagefile1.files && downloadimagefile1.files[0]) {
                    const downloadimageuploadedFile1 = downloadimagefile1.files[0];
                    downloadoptionname1 = `${downloadimageuploadedFile1.name}`;

                    const formData = new FormData();
                    formData.append('file', downloadimageuploadedFile1);
                    await axios.post("http://localhost:5000/downloadlinkmasterupload", formData);
                }

                if (downloadimagefile2 && downloadimagefile2.files && downloadimagefile2.files[0]) {
                    const downloadimageuploadedFile2 = downloadimagefile2.files[0];
                    downloadoptionname2 = `${downloadimageuploadedFile2.name}`;

                    const formData = new FormData();
                    formData.append('file', downloadimageuploadedFile2);
                    await axios.post("http://localhost:5000/downloadlinkmasterupload", formData);
                }

                formData.image = imageName;
                formData.downloadoption1 = downloadoptionname1;
                formData.downloadoption2 = downloadoptionname2;

                if (formData.id) {
                    const responseupdatedata = await axios.put(`http://localhost:5000/downloadlinkmaster/${formData.id}`, formData);
                    console.log(responseupdatedata.data);
                } else {
                    const responseinsertdata = await axios.post("http://localhost:5000/downloadlinkmaster", formData);
                    console.log(responseinsertdata.data);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWorkingStepData();
    }, []);

    const fetchWorkingStepData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/downloadlinkmaster');
            const fetchedData = response.data;

            if (fetchedData.length > 0) {
                setDataExists(true);
                setFormData({
                    ...formData,
                    id: fetchedData[0].id,
                    title: fetchedData[0].title,
                    downloadurl: fetchedData[0].downloadurl,
                    image: fetchedData[0].image,
                    description: fetchedData[0].description,
                    downloadoption1: fetchedData[0].downloadimage1,
                    downloadoption2: fetchedData[0].downloadimage2,
                    url1: fetchedData[0].url1,
                    url2: fetchedData[0].url2,
                    timestamp: fetchedData[0].timestamp,
                });
            } else {
                setDataExists(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="main">
                <main className="content px-3 py-3 cr-main-body-container">
                    <div className="container-fluid rounded full-height-container">
                        <div className="row align-items-center mb-0 py-3 gx-2">
                            <div className="col">
                                <h3 className="fw-bold fs-5 mb-0 ">Download Link Master</h3>
                            </div>
                        </div>

                        <form id="workingstepmasterForm" onSubmit={handleSubmit}>
                            <input type='hidden' name="id" value={formData.id} />
                            <div className="container-fluid rounded bg-white py-3">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Title<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-typ ${formData.errors?.title && 'is-invalid'}`}
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
                                            <label className="form-label form-label-custom-margin cr-form-title">Download Url<span className='text-danger'> *</span></label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-typ ${formData.errors?.downloadurl && 'is-invalid'}`}
                                                id="downloadurl"
                                                name="downloadurl"
                                                value={formData.downloadurl}
                                                onChange={handleChange}
                                            />
                                            {formData.errors?.downloadurl && <div className="invalid-feedback">{formData.errors.downloadurl}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-3">
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

                                    <div className="col-3">
                                        <div className="form-group mb-3">
                                            <a href={`/images/downloadlinkmaster/${formData.image}`} target="_blank" rel="noreferrer noopener">
                                                <img src={`/images/downloadlinkmaster/${formData.image}`} alt="" style={{ width: '100%' }} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">Description<span className='text-danger'> *</span></label>
                                            <textarea
                                                className={`form-control border border-custom cr-form-input-type-textarea ${formData.errors?.description && 'is-invalid'}`}
                                                rows={5}
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
                                    <div className="col-3">
                                        <div className="form-group mb-3">
                                            <label htmlFor="downloadimage1" className="form-label form-label-custom-margin cr-form-title">Download Option 1</label>
                                            <input
                                                type="file"
                                                className={`form-control-file form-control border border-custom cr-form-input-type`}
                                                id="downloadimage1"
                                                name="downloadimage1"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="form-group mb-3">
                                            <a href={`/images/downloadlinkmaster/${formData.downloadoption1}`} target="_blank" rel="noreferrer noopener">
                                                <img src={`/images/downloadlinkmaster/${formData.downloadoption1}`} alt="" style={{ width: '100%' }} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="form-group mb-3">
                                            <label htmlFor="downloadimage2" className="form-label form-label-custom-margin cr-form-title">Download Option 2</label>
                                            <input
                                                type="file"
                                                className={`form-control-file form-control border border-custom cr-form-input-type`}
                                                id="downloadimage2"
                                                name="downloadimage2"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="form-group mb-3">
                                            <a href={`/images/downloadlinkmaster/${formData.downloadoption2}`} target="_blank" rel="noreferrer noopener">
                                                <img src={`/images/downloadlinkmaster/${formData.downloadoption2}`} alt="" style={{ width: '100%' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">url 1</label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type`}
                                                id="url1"
                                                name="url1"
                                                value={formData.url1}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                            <label className="form-label form-label-custom-margin cr-form-title">url 2</label>
                                            <input
                                                type="text"
                                                className={`form-control border border-custom cr-form-input-type`}
                                                id="url2"
                                                name="url2"
                                                value={formData.url2}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-2 justify-content-start">
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
                            </div>
                        </form >

                    </div>
                </main>

                <Footer />
            </div>

        </>
    )
}

export default DownloadlinkMaster;