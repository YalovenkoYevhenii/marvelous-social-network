const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const ApiError = require('../exceptions/ApiError');

class FileService {
  saveFile(file) {
    try {
      const fileName = `${uuid.v4()}.jpg`;
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      ApiError.BadRequest('Can not find specified path');
    }
  }

  deleteFile(fileName) {
    try {
      const filePath = path.resolve('static', fileName);
      console.log('filepath ==>', filePath);
      fs.unlinkSync(filePath);
    } catch (e) {
      ApiError.BadRequest('Can not find specified path');
    }
  }
}

module.exports = new FileService();
