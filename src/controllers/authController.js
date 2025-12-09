export const registerUser = async (req, res) => {
  res.status(201).json();
};

export const loginUser = async (req, res) => {
  res.status(200).json();
};

export const logoutUser = async (req, res) => {
  res.status(204).send();
};

export const refreshUserSession = async (req, res) => {
  res.status(200).json();
};
