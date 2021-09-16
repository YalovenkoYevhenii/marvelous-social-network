const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

const config = require('../config');
const ApiError = require('../exceptions/ApiError');

class FileService {
  saveFile(file) {
    try {
      const fileName = `${uuid.v4()}.jpg`;
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      ApiError.BadRequest(config.s400incorrectPath);
    }
  }

  deleteFile(fileName) {
    try {
      const filePath = path.resolve('static', fileName);
      fs.unlinkSync(filePath);
    } catch (e) {
      ApiError.BadRequest(config.s400incorrectPath);
    }
  }
}

module.exports = new FileService();
