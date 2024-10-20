let token = localStorage.getItem("token");

const PostService = async (url, formRegister) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formRegister),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    } else {
      console.log("Successo nella registrazione");
    }
    const data = await response.json();
    // console.log("data "+data);
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
    return "Errore durante la registrazione:", error;
  }
};

const PostImgService = async (url, formRegister) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body:formRegister,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    } else {
      console.log("Prodotto creato con successo");
    }
    const data = await response.json();
    // console.log("data "+data);
    return data;
  } catch (error) {
    console.error("Errore durante la creazione del prodotto: ", error);
    return "Errore durante la creazione del prodotto: ", error;
  }
};



const GetService = async (url) => {
  token = localStorage.getItem("token");
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(` ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante la get:", error);
    return error.message;
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
    return error.message;
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
    } else {
      console.log("eliminato con successo");
      return "eliminato con successo";
    }
  } catch (error) {
    console.error("Errore durante l'eliminazione':", error);
    return error;
  }
};

export { PostService, GetService, PutService, DeleteService,PostImgService };
