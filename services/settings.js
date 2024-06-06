const { Setting } = require("../models");
createError = require("http-errors");

const validateSetting = (payload) => {
  /*
    Validate the setting created over here and throw error this way:
    const err = createError(422, "Invalid input...");
    throw err;  
  */
};

const createSetting = async (req, res, next) => {
  const { name, value, source_type, source_id, dataType } = req.body;
  try {
    validateSetting({ name, value, source_type, source_id, dataType });
    const setting = await Setting.create({
      name,
      value,
      source_type,
      source_id,
      dataType,
    });
    res.send(setting);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500);
    res.send(error.message);
  }
};

module.exports = {
  createSetting,
};
