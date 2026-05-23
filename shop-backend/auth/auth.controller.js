const authService = require('./auth.service');
const { registerSchema, loginSchema } = require('./auth.validation');

exports.register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await authService.register(req.body);
    res.status(201).json({ message: 'User registered', user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const result = await authService.login(req.body);
    res.status(200).json({ message: 'Login successful', ...result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
