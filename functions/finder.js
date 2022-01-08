
const { getSuggetions } = require("../index");
exports.handler = function (event, _context, callback) {
  const input = event.path.split('/').pop()
  const suggestions = getSuggetions(decodeURIComponent(input));
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ suggestions }),
  })
}
