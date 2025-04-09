export const fetchRegisterUser = async (
  nombreUsuario: string,
  password: string
) => {
  const response = await fetch("https://habitos-tracker-backend.vercel.app/users/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombreUsuario: nombreUsuario,
      password: password,
    }),
  });
  if (!response.ok) {
    throw new Error("Fallo al registrar el usuario");
  }
  return response;
};

export const fetchLoginUser = async (
  nombreUsuario: string,
  password: string
) => {
  // console.log("nombreUsuario: " + nombreUsuario);
  // console.log("password: " + password);

  const response = await fetch("https://habitos-tracker-backend.vercel.app/users/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombreUsuario: nombreUsuario,
      password: password,
    }),
  });
  if (!response.ok) {
    throw new Error("Fallo al iniciar sesion el usuario");
  }
  return response;
};
