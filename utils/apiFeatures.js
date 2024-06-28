class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else if (this.queryString.sortHandler) {
      this.mongooseQuery = this.mongooseQuery.sort(
        this.queryString.sortHandler
      );
    } else {
      this.mongooseQuery = this.mongooseQuery.sort("-updatedAt");
    }
    return this;
  }

  limitFields(fields) {
    if (fields) {
      const newFields = fields.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(newFields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }
    return this;
  }

  /* search() {
    if (this.queryString.keyword) {
      // eslint-disable-next-line prefer-const
      let query = {};

      query.$or = [
        { firstName: { $regex: this.queryString.keyword, $options: "i" } },
      ];
      console.log(query);
      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }
*/
  paginate() {
    const limit = this.queryString.limit;
    const skip = this.queryString.skip;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    // this.paginationResult = pagination;
    return this;
  }
}

module.exports = ApiFeatures;
