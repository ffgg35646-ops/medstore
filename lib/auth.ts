export function loginUser(user: {
  name: string;
  email: string;
}) {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
}


export function logoutUser() {
  localStorage.removeItem("user");
}


export function getUser() {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}
