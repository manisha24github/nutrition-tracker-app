import { findUser } from '../../services/user.mjs';

export const validateCredentials = async (event) => {
  let username = event.target.loginName.value;
  let password = event.target.loginPassword.value;

  if (await fetchData(username, password)) return true;

  return false;
};

const fetchData = async (username, password) => {
  return await findUser(username, password);
};
