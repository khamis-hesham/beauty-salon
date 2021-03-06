const { getUserData } = require('../../database/queries');

const userData = async (req, res, next) => {
  try {
    const { rows } = await getUserData(req.userId);
    delete rows[0].password;
    res.json({
      statusCode: 200,
      data: rows[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = userData;
