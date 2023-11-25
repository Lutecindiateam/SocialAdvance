
// const fs = require('fs');
// const upload = require("../models/upload");
// const csv = require('csv-parser');

// exports.uploadProductsFromCSV = (req, res) => {
//     try {
//       const csvData = []; 
// console.log(csvData);
//       fs.createReadStream(req.file.path)
//         .pipe(csv())
//         .on('data', (row) => {
//           csvData.push(row); 
//           })
//         .on('end', async () => {
//           for (const row of csvData) {
//   console.log(row);
//               const product = {
//                 name: row.Name,
//                 address: row.Address,
//                 phone: row.Phone
//               };
  
//               // Save the product one at a time
//               const savedProduct = await upload.create(product);
//               if(savedProduct){
//               res.json({
//                 status: "200",
//                 message: 'Products uploaded successfully',
//               });
//             }
              
//           }
//         });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };

const fs = require('fs');
const upload = require('../models/upload');
const csv = require('csv-parser');

exports.uploadProductsFromCSV = (req, res) => {
  try {
    const csvData = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (row) => {
        csvData.push(row);
      })
      .on('end', async () => {
        const savedProducts = [];

        for (const row of csvData) {
          console.log(row);

          const product = {
            name: row.Name,
            address: row.Address,
            phone: row.Phone,
          };

          // Save the product one at a time
          const savedProduct = await upload.create(product);
          if (savedProduct) {
            savedProducts.push(savedProduct);
          }
        }

        // Send the response after processing all rows
        res.json({
          status: '200',
          message: 'Products uploaded successfully',
          savedProducts,
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
