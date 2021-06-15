const Tour = require('../model/tourModel');
const apiFeature = require('../utils/apiFeatures');

exports.getAllTours = async (req, res) => {
  try {
    const features = new apiFeature(Tour.find(), req.query).filter();
    const tours = await features.query;
    res.status(200).json({
      data: {
        numTour: tours.length,
        tours,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errMsg: 'something went wrong',
    });
  }
};

exports.getSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(401).json({
      errMsg: 'something went wrong',
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errMsg: 'Something went wrong',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errMsg: 'Something went wrong',
    });
  }
};
