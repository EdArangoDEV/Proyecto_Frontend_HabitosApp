export const fetchHabitos = async (token: string) => {
  const response = await fetch("https://habitos-tracker-backend.vercel.app/habitos", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch habits");
  }
  return response;
};

export const fetchAddHabito = async (
  token: string,
  titulo: string,
  descripcion: string
) => {
  const response = await fetch("https://habitos-tracker-backend.vercel.app/habitos", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descripcion: descripcion,
    }),
  });
  if (!response.ok) {
    throw new Error("Fallo al agregar el habito");
  }
  return response;
};
