import Settings from "../models/settings.js";

export const getSettings = async (req, res, next) => {
  try {
    const settings = await Settings.find();

    return res.status(200).json({
      success: true,
      count: settings.length,
      data: settings
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};



  const addSettings = async (req, res, next) => {
  try {
    const settings = await Settings.create(req.body);

    return res.status(201).json({
      success: true,
      data: settings,
    });
  } catch (err:any) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You missed a field' });
    }
    res.status(500).json({ error: 'Server error' });
  }
  next();
};

export default addSettings;
