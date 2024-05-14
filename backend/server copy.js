"use strict";
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
const app = (0, express_1.default)();
const port = 5000;
const uid = Date.now();
// Multer configuration for file upload
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "../admin/public/images");
    },
    filename: function (req, file, cb) {
        return cb(null, `${uid}_${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ storage });
// end
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
// Endpoint to insert carmaster
app.post('/carmaster', (req, res) => {
    console.log('Received data:', req.body);
    const { name, image } = req.body;
    const Uimage = `${uid}_${image}`;
    const INSERT_USER_QUERY = `INSERT INTO carmaster (name, image) VALUES (?, ?)`;
    connection.query(INSERT_USER_QUERY, [name, Uimage], (err, results) => {
        if (err) {
            console.error('Error inserting user: ' + err);
            res.status(500).send('Error inserting user');
            return;
        }
        console.log('User inserted successfully');
        res.status(200).send('User inserted successfully');
    });
});
// Endpoint to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.status(200).send('File uploaded successfully');
});
// Endpoint to fetch car data from the database
app.get('/carmaster', (req, res) => {
    const SELECT_CARS_QUERY = `SELECT * FROM carmaster`;
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
    const DELETE_CAR_QUERY = `DELETE FROM carmaster WHERE id = ?`;
    const SELECT_IMAGE_QUERY = `SELECT image FROM carmaster WHERE id = ?`;
    connection.query(SELECT_IMAGE_QUERY, carId, (err, imageResults) => {
        if (err) {
            console.error('Error selecting image:', err);
            res.status(500).send('Error selecting image');
            return;
        }
        // Inside the DELETE endpoint
        const imageName = imageResults[0] && imageResults[0].image;
        connection.query(DELETE_CAR_QUERY, carId, (err, carDeleteResults) => {
            if (err) {
                console.error('Error deleting car:', err);
                res.status(500).send('Error deleting car');
                return;
            }
            // Ensure imageName is not empty
            if (imageName) {
                const imagePath = `../admin/public/images/${imageName}`; // Construct full path
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
app.put('/carmaster/:id', (req, res) => {
    const id = req.params.id;
    const { name, image } = req.body;
    const Uimage = `${uid}_${image}`;
    console.log(Uimage);
    const UPDATE_USER_QUERY = `UPDATE carmaster SET name=?, image=? WHERE id=?`;
    connection.query(UPDATE_USER_QUERY, [name, Uimage, id], (err, results) => {
        if (err) {
            console.error('Error updating data: ' + err);
            res.status(500).send('Error updating data');
            return;
        }
        console.log('data updated successfully');
        res.status(200).send('data updated successfully');
    });
});
// Endpoint to delete an image file
app.delete('/delete-image/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = `../admin/public/images/${imageName}`;
    fs_1.default.unlink(imagePath, (err) => {
        if (err) {
            console.error('Error deleting image:', err);
            res.status(500).send('Error deleting image');
            return;
        }
        console.log('Image deleted successfully');
        res.status(200).send('Image deleted successfully');
    });
});
// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
