module.exports.success = (res, data = {}, message = 'OK') => res.json({ success: true, message, data });
module.exports.error = (res, message = 'Error', code = 400) => res.status(code).json({ success: false, message });
