class PaginationService {
  async getPaginatedData(Model, options, page, limit) {
    const offset = (page - 1) * limit;

    const content = await Model.find(options).skip(+offset).limit(+limit);

    const count = await Model.countDocuments(options);
    const totalPages = Math.ceil(count / limit);
    const isRanOut = +page === totalPages;

    return { content, isRanOut };
  }
}

module.exports = new PaginationService();
