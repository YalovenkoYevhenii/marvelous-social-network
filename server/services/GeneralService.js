class GeneralService {
  filterObjEmptyFields(obj) {
    const sample = obj;
    Object.keys(sample).forEach((key) => {
      if (!sample[key]) delete sample[key];
    });

    return sample;
  }
}

module.exports = new GeneralService();
