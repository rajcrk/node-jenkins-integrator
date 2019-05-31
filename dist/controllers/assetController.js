"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assetData = require('../data/data');
/**
 * GET /All Asset
 * Veiw all property page.
 */
exports.getAllAsset = (req, res) => {
    console.log('===============Entering getAllAsset Controller================');
    console.log('----------AssetData-----------');
    console.log(assetData[0]);
    console.log('----------AssetData-----------');
    console.log('===============Leaving getAllAsset Controller================');
    res.send(assetData);
};
/**
 * Post /Add Asset
 * Add a new property
 */
exports.addAsset = (req, res) => {
    console.log('===============Entering addAsset Controller================');
    console.log(req.body);
    let asset;
    asset = {
        id: '2',
        name: req.body.name,
        type: req.body.type,
        address: {
            city: req.body.city,
            country: req.body.country,
            street: req.body.street
        },
        price: req.body.price,
        priceUnit: req.body.priceUnit,
        area: req.body.area,
        areaUnit: req.body.areaUnit
    };
    console.log('----------AssetData-----------');
    console.log(asset);
    console.log('----------AssetData-----------');
    assetData.push(asset);
    console.log(assetData);
    console.log('===============Leaving addAsset Controller================');
    res.send('Successfully Added New Asset');
};
//# sourceMappingURL=assetController.js.map