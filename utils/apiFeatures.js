class apiFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // Removing excluded fields from queryString
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'limit', 'fields', 'page'];
    excludedFields.forEach((el) => delete queryObj[el]);

    console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }
}

module.exports = apiFeature;
