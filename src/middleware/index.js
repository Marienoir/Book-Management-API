import * as services from '../services';

export const validateInput = (data, type) => async (req, res, next) => {
  try {
    const getType = {
      body: req.body,
      params: req.params,
      queries: req.queries,
      headers: req.headers,
    };
    const options = {
      language: {
        key: '{{key}}',
      },
    };
    const result = getType[type];
    const isValid = await data.schema.validate(result, options);
    if (!isValid.error) {
      return next();
    }
    const {
      message,
    } = isValid.error.details[0];

    return res.status(400).json({
      status: 'fail',
      message: message.replace(/[\"]/gi, ''),
      errors: data.message,
    });
  } catch (error) {
    next(error);
  }
};

export const checkIfBookExistsByNameOrTitle = async (req, res, next) => {
  try {
    const { name } = req.query;
    const data = await services.getBooks(name);

    if (data.length === 0) {
      return res.status(404).json({
        code: 404,
        message: "Book unavailable",
      });
    }
    return next();
  } catch (error) {
    next(error);
  }
};

export const checkIfBookExistsByCategory = async (req, res, next) => {
  try {
    const { category } = req.query;
    const data = await services.getBooksByCategory(category);
    
    if (data.length === 0) {
      return res.status(404).json({
        code: 404,
        message: "Book unavailable",
      });
    }
    return next();
  } catch (error) {
    next(error);
  }
};
