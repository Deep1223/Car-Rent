"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const index_1 = require("../admin/src/components/function/index");
// Example usage of the generateUniqueId function
const uid = (0, index_1.generateUniqueId)();
const app = (0, express_1.default)();
const port = 5000;
const currentDate = new Date();
const year = currentDate.getFullYear().toString();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// MySQL Connection
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car_rent'
});
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// --------------------------- carmaster page start ------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// Multer configuration for file upload
const carmasterstorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const pagename = "car-list";
        const destinationDir = `../admin/public/images/${year}/${month}/${pagename}`;
        if (!fs_1.default.existsSync(destinationDir)) {
            fs_1.default.mkdirSync(destinationDir, { recursive: true });
        }
        cb(null, destinationDir);
    },
    filename: function (req, file, cb) {
        const filename = `${uid}_${file.originalname}`;
        cb(null, filename);
    }
});
const upload = (0, multer_1.default)({ storage: carmasterstorage });
// Endpoint to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.status(200).send('File uploaded successfully');
});
// Endpoint to insert carmaster
app.post('/carmaster', (req, res) => {
    console.log('Received data:', req.body);
    const { name, image, passengersid, passengers, gearid, gear, coolingtypeid, coolingtype, doorstypeid, doorstype, price } = req.body;
    const uniqueimage = `${uid}_${image}`;
    const timestamp = new Date();
    const INSERT_USER_QUERY = `INSERT INTO carmaster (name, image, passengersid, passengers, gearid, gear, coolingtypeid, coolingtype, doorstypeid, doorstype, price, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(INSERT_USER_QUERY, [name, uniqueimage, passengersid, passengers, gearid, gear, coolingtypeid, coolingtype, doorstypeid, doorstype, price, timestamp], (err, results) => {
        if (err) {
            console.error('Error inserting user: ' + err);
            res.status(500).send('Error inserting user');
            return;
        }
        console.log('User inserted successfully');
        res.status(200).send('User inserted successfully');
    });
});
// Endpoint to fetch car data from the database
app.get('/carmaster', (req, res) => {
    const SELECT_CARS_QUERY = `SELECT id,name,image,passengers,gear,coolingtype,doorstype,price,timestamp FROM carmaster`;
    connection.query(SELECT_CARS_QUERY, (err, results) => {
        if (err) {
            console.error('Error fetching cars: ' + err);
            res.status(500).send('Error fetching cars');
            return;
        }
        console.log('Cars fetched successfully');
        res.status(200).json(results);
    });
});
// Endpoint to delete a car by id
app.delete('/carmaster/:id', (req, res) => {
    const carId = req.params.id;
    const DELETE_QUERY = `DELETE FROM carmaster WHERE id = ?`;
    const SELECT_IMAGE_QUERY = `SELECT image, timestamp FROM carmaster WHERE id = ?`;
    connection.query(SELECT_IMAGE_QUERY, carId, (err, imageResults) => {
        if (err) {
            console.error('Error selecting image:', err);
            res.status(500).send('Error selecting image');
            return;
        }
        // Inside the DELETE endpoint
        const imageName = imageResults[0] && imageResults[0].image;
        const timestamp = imageResults[0] && imageResults[0].timestamp;
        const pagename = 'car-list';
        const timestampDate = new Date(timestamp);
        const year = timestampDate.getFullYear();
        const month = String(timestampDate.getMonth() + 1).padStart(2, '0');
        connection.query(DELETE_QUERY, carId, (err, carDeleteResults) => {
            if (err) {
                console.error('Error deleting car:', err);
                res.status(500).send('Error deleting car');
                return;
            }
            // Ensure imageName is not empty
            if (imageName) {
                const imagePath = `../admin/public/images/${year}/${month}/${pagename}/${imageName}`;
                fs_1.default.unlink(imagePath, (err) => {
                    if (err) {
                        console.error('Error unlinking image:', err);
                        res.status(500).send('Error deleting image');
                        return;
                    }
                    else {
                        console.log('Image deleted successfully');
                    }
                });
            }
            console.log('Car deleted successfully');
            res.status(200).send('Car deleted successfully');
        });
    });
});
// Endpoint to edit user data
app.get('/carmaster/:id', (req, res) => {
    const CarId = req.params.id;
    const SELECT_SECOND_FORM_BY_ID_QUERY = `SELECT * FROM carmaster WHERE id = ?`;
    connection.query(SELECT_SECOND_FORM_BY_ID_QUERY, CarId, (err, results) => {
        if (err) {
            console.error('Error fetching carmaster data by ID:', err);
            res.status(500).send('Error fetching carmaster data by ID');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Data not found');
            return;
        }
        res.status(200).json(results[0]);
    });
});
// Endpoint to update user data
app.put('/carmaster/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, image, passengersid, passengers, gearid, gear, coolingtypeid, coolingtype, doorstypeid, doorstype, price } = req.body;
    const timestamp = new Date();
    const SELECT_IMAGE_QUERY = `SELECT image, timestamp FROM carmaster WHERE id = ?`;
    const UPDATE_USER_QUERY = `UPDATE carmaster SET name=?, image=?, passengersid=?, passengers=?, gearid=?, gear=?, coolingtypeid=?, coolingtype=?, doorstypeid=?, doorstype=?, price=?, timestamp=? WHERE id=?`;
    connection.query(SELECT_IMAGE_QUERY, id, (err, imageResults) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.error('Error selecting image:', err);
            res.status(500).send('Error selecting image');
            return;
        }
        const oldImageName = imageResults[0] && imageResults[0].image;
        const imgtimestamp = imageResults[0] && imageResults[0].timestamp;
        const pagename = 'car-list';
        const timestampDate = new Date(imgtimestamp);
        const year = timestampDate.getFullYear();
        const month = String(timestampDate.getMonth() + 1).padStart(2, '0');
        let newimage = image;
        if (image !== oldImageName) {
            newimage = `${uid}_${image}`;
        }
        connection.query(UPDATE_USER_QUERY, [name, newimage, passengersid, passengers, gearid, gear, coolingtypeid, coolingtype, doorstypeid, doorstype, price, timestamp, id], (err, results) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error('Error updating data: ' + err);
                res.status(500).send('Error updating data');
                return;
            }
            console.log('Data updated successfully');
            if (oldImageName) {
                const imagePath = `../admin/public/images/${year}/${month}/${pagename}/${oldImageName}`;
                try {
                    yield fs_1.default.promises.unlink(imagePath);
                    console.log('Old image deleted successfully');
                }
                catch (error) {
                    console.error('Error deleting old image:', error);
                }
            }
            res.status(200).send('Data updated successfully');
        }));
    }));
}));
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ------------------------------- carmaster page end ------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// --------------------------- workingstepmaster page start ------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// Multer configuration for file upload
const workingstepstorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const pagename = "working-step";
        const destinationDir = `../admin/public/images/${year}/${month}/${pagename}`;
        if (!fs_1.default.existsSync(destinationDir)) {
            fs_1.default.mkdirSync(destinationDir, { recursive: true });
        }
        cb(null, destinationDir);
    },
    filename: function (req, file, cb) {
        const filename = `${uid}_${file.originalname}`;
        cb(null, filename);
    }
});
const workingstepupload = (0, multer_1.default)({ storage: workingstepstorage });
// Endpoint to handle file upload
app.post('/workingstepupload', workingstepupload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.status(200).send('File uploaded successfully');
});
// Endpoint to insert workingstepmaster
app.post('/workingstepmaster', (req, res) => {
    console.log('Received data:', req.body);
    const { image, name, description } = req.body;
    const uniqueimage = `${uid}_${image}`;
    const timestamp = new Date();
    const INSERT_USER_QUERY = `INSERT INTO workingstepmaster (image, name, description, timestamp) VALUES (?, ?, ?, ?)`;
    connection.query(INSERT_USER_QUERY, [uniqueimage, name, description, timestamp], (err, results) => {
        if (err) {
            console.error('Error inserting user: ' + err);
            res.status(500).send('Error inserting user');
            return;
        }
        console.log('User inserted successfully');
        res.status(200).send('User inserted successfully');
    });
});
// fetch data
app.get('/workingstepmaster', (req, res) => {
    const SELECT_CARS_QUERY = `SELECT id,image,name,description,timestamp FROM workingstepmaster`;
    connection.query(SELECT_CARS_QUERY, (err, results) => {
        if (err) {
            console.error('Error fetching Data: ' + err);
            res.status(500).send('Error fetching Data');
            return;
        }
        console.log('Data fetched successfully');
        res.status(200).json(results);
    });
});
// Endpoint to edit data
app.get('/workingstepmaster/:id', (req, res) => {
    const Id = req.params.id;
    const SELECT_SECOND_FORM_BY_ID_QUERY = `SELECT * FROM workingstepmaster WHERE id = ?`;
    connection.query(SELECT_SECOND_FORM_BY_ID_QUERY, Id, (err, results) => {
        if (err) {
            console.error('Error fetching data by ID:', err);
            res.status(500).send('Error fetching data by ID');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Data not found');
            return;
        }
        res.status(200).json(results[0]);
    });
});
// Endpoint to update data
app.put('/workingstepmaster/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { image, name, description } = req.body;
    const newtimestamp = new Date();
    const SELECT_IMAGE_QUERY = `SELECT image, timestamp FROM workingstepmaster WHERE id = ?`;
    const UPDATE_USER_QUERY = `UPDATE workingstepmaster SET image=?, name=?, description=?, timestamp=? WHERE id=?`;
    connection.query(SELECT_IMAGE_QUERY, id, (err, imageResults) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.error('Error selecting image:', err);
            res.status(500).send('Error selecting image');
            return;
        }
        const oldImageName = imageResults[0] && imageResults[0].image;
        const timestamp = imageResults[0] && imageResults[0].timestamp;
        const pagename = 'working-step';
        const timestampDate = new Date(timestamp);
        const year = timestampDate.getFullYear();
        const month = String(timestampDate.getMonth() + 1).padStart(2, '0');
        let newimage = image;
        if (image !== oldImageName) {
            newimage = `${uid}_${image}`;
        }
        connection.query(UPDATE_USER_QUERY, [newimage, name, description, newtimestamp, id], (err, results) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error('Error updating data: ' + err);
                res.status(500).send('Error updating data');
                return;
            }
            console.log('Data updated successfully');
            if (oldImageName) {
                const imagePath = `../admin/public/images/${year}/${month}/${pagename}/${oldImageName}`;
                try {
                    yield fs_1.default.promises.unlink(imagePath);
                    console.log('Old image deleted successfully');
                }
                catch (error) {
                    console.error('Error deleting old image:', error);
                }
            }
            res.status(200).send('Data updated successfully');
        }));
    }));
}));
// Endpoint to delete a car by id
app.delete('/workingstepmaster/:id', (req, res) => {
    const Id = req.params.id;
    const DELETE_QUERY = `DELETE FROM workingstepmaster WHERE id = ?`;
    const SELECT_IMAGE_QUERY = `SELECT image, timestamp FROM workingstepmaster WHERE id = ?`;
    connection.query(SELECT_IMAGE_QUERY, Id, (err, imageResults) => {
        if (err) {
            console.error('Error selecting image:', err);
            res.status(500).send('Error selecting image');
            return;
        }
        // Inside the DELETE endpoint
        const imageName = imageResults[0] && imageResults[0].image;
        const timestamp = imageResults[0] && imageResults[0].timestamp;
        const pagename = 'working-step';
        const timestampDate = new Date(timestamp);
        const year = timestampDate.getFullYear();
        const month = String(timestampDate.getMonth() + 1).padStart(2, '0');
        connection.query(DELETE_QUERY, Id, (err, carDeleteResults) => {
            if (err) {
                console.error('Error deleting car:', err);
                res.status(500).send('Error deleting car');
                return;
            }
            // Ensure imageName is not empty
            if (imageName) {
                const imagePath = `../admin/public/images/${year}/${month}/${pagename}/${imageName}`;
                fs_1.default.unlink(imagePath, (err) => {
                    if (err) {
                        console.error('Error unlinking image:', err);
                        res.status(500).send('Error deleting image');
                        return;
                    }
                    else {
                        console.log('Image deleted successfully');
                    }
                });
            }
            console.log('Data deleted successfully');
            res.status(200).send('Data deleted successfully');
        });
    });
});
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// --------------------------- workingstepmaster page end --------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------- downloadmaster page start --------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// Multer configuration for file upload
const downloadmasterstorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const pagename = "downloadmaster";
        const destinationDir = `../admin/public/images/${pagename}`;
        if (!fs_1.default.existsSync(destinationDir)) {
            fs_1.default.mkdirSync(destinationDir, { recursive: true });
        }
        cb(null, destinationDir);
    },
    filename: function (req, file, cb) {
        const filename = `${uid}_${file.originalname}`;
        cb(null, filename);
    }
});
const downloadmasterupload = (0, multer_1.default)({ storage: downloadmasterstorage });
// Endpoint to handle file upload
app.post('/downloadmasterupload', downloadmasterupload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.status(200).send('File uploaded successfully');
});
// Endpoint to insert downloadmaster
app.post('/downloadmaster', (req, res) => {
    console.log('Received data:', req.body);
    const { title, image, description, downloadimage1, downloadimage2, url1, url2 } = req.body;
    const uniqueimage = `${uid}_${image}`;
    const timestamp = new Date();
    const filename1 = downloadimage1.split('\\').pop();
    const uniquedownloadimage1 = `${uid}_${filename1}`;
    const filename2 = downloadimage2.split('\\').pop();
    const uniquedownloadimage2 = `${uid}_${filename2}`;
    const INSERT_USER_QUERY = `INSERT INTO downloadmaster ( title, image, description, downloadimage1, downloadimage2, url1, url2, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(INSERT_USER_QUERY, [title, uniqueimage, description, uniquedownloadimage1, uniquedownloadimage2, url1, url2, timestamp], (err, results) => {
        if (err) {
            console.error('Error inserting user: ' + err);
            res.status(500).send('Error inserting user');
            return;
        }
        console.log('User inserted successfully');
        res.status(200).send('User inserted successfully');
    });
});
// fetch data
app.get('/downloadmaster', (req, res) => {
    const SELECT_CARS_QUERY = `SELECT id, title, image, description, downloadimage1, downloadimage2, url1, url2, timestamp FROM downloadmaster LIMIT 1`;
    connection.query(SELECT_CARS_QUERY, (err, results) => {
        if (err) {
            console.error('Error fetching Data: ' + err);
            res.status(500).send('Error fetching Data');
            return;
        }
        console.log('Data fetched successfully');
        res.status(200).json(results);
    });
});
// Endpoint to update data
app.put('/downloadmaster/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const id = req.params.id;
    const { title, image, description, downloadimage1, downloadimage2, url1, url2 } = req.body;
    const newtimestamp = new Date();
    const filename1 = downloadimage1 ? downloadimage1.split('\\').pop() : '';
    const uniquedownloadimage1 = `${uid}_${filename1}`;
    const filename2 = downloadimage1 ? downloadimage1.split('\\').pop() : '';
    const uniquedownloadimage2 = `${uid}_${filename2}`;
    const SELECT_IMAGE_QUERY = `SELECT image, timestamp FROM downloadmaster WHERE id = ?`;
    const UPDATE_USER_QUERY = `UPDATE downloadmaster SET title=?, image=?, description=?, downloadimage1=?, downloadimage2=?, url1=?, url2=?, timestamp=? WHERE id=?`;
    connection.query(SELECT_IMAGE_QUERY, id, (err, imageResults) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.error('Error selecting image:', err);
            res.status(500).send('Error selecting image');
            return;
        }
        const oldImageName = imageResults[0] && imageResults[0].image;
        const pagename = 'downloadmaster';
        let newimage = image;
        if (image !== oldImageName) {
            newimage = `${uid}_${image}`;
        }
        connection.query(UPDATE_USER_QUERY, [title, newimage, description, uniquedownloadimage1, uniquedownloadimage2, url1, url2, newtimestamp, id], (err, results) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error('Error updating data: ' + err);
                res.status(500).send('Error updating data');
                return;
            }
            console.log('Data updated successfully');
            if (oldImageName) {
                const imagePath = `../admin/public/images/${pagename}/${oldImageName}`;
                try {
                    yield fs_1.default.promises.unlink(imagePath);
                    console.log('Old image deleted successfully');
                }
                catch (error) {
                    console.error('Error deleting old image:', error);
                }
            }
            res.status(200).send('Data updated successfully');
        }));
    }));
}));
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------- downloadmaster page end ----------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //
// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
