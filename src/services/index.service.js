const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjgwNTM0MjIsImV4cCI6MTcyODMxMjYyMiwic3ViIjoiNzE1ZTg3NmEtNTk3ZC00MmJiLWE1NTMtNzRkOWIzNmZiNWE5In0.1k83nCNXqGDDrh0CxOm8mAXOcSUYK71aa08ihPnDyGy_Ymg2Y9dkxqeck74fswFAcrJy3d2XxPuWHjSnkfEdzg";

const PostService = async (url, formRegister) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formRegister),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Errore: ${errorData.message}`);
    }else{
        console.log("Successo nella registrazione");
    }
    const data = await response.json();
    // console.log("data "+data);
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
  }
};

const GetService = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Errore: ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante la get:", error);
  }
};

const PutService = async (url, clienti) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(clienti),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Errore: ${errorData.message}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante l'update:", error);
  }
};

const DeleteService = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Errore: ${errorData.message}`);
    } else console.log("eliminato con successo");
  } catch (error) {
    console.error("Errore durante l'eliminazione':", error);
  }
};

export { PostService, GetService, PutService, DeleteService };
