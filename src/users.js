export async function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Resource not found!");
    } else {
      const users = await res.json();
      return { users };
    }
  } catch (error) {
    return { msg: "server error" };
  }
}
