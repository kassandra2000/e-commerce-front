import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {  FcOk } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteService, GetService, PostService } from "../services/index.service";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/actions";

const SuccessPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("sessionId");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const cart = useSelector((state) => state.index.cart);
  const navigate = useNavigate();
console.log(id)
  const handleCheckPayment = async () => {
    try {

        const dataUser = await GetService("http://localhost:3001/users/me");

        const orderBody = {
          dateAdded: new Date().toLocaleDateString("en-CA"),
          status: "pending",
          total: cart
            .reduce(
              (acc, curr) => acc + parseFloat(curr.price) * curr.quantity,
              0.0
            )
            .toFixed(2),
          userId: dataUser.id,
          productId: cart.map((item) => item.id),
          sessionId: id
        };

console.log(orderBody)
      const response = await PostService(
        "http://localhost:3001/orders/check-status",
         orderBody 
      );
      setMessage(response.message);
      if (response.message.startsWith("Pagamento")) {
        console.log("ciaooo")
        const data = await DeleteService("http://localhost:3001/users/me/allCart");
       console.log(data)
        dispatch(resetCart());
        const data1 = await GetService("http://localhost:3001/users/me");
        console.log(data1)
        console.log(cart)
        setTimeout(() => {navigate("/");}, 1000);
      }
      console.log(response.message);
    } catch (error) {
      console.error(
        "Errore durante il controllo dello stato del pagamento:",
        error
      );
    }
  };

  useEffect(() => {
    if (id) {
      handleCheckPayment();
    }
  }, [id]); 

  return (
    message && (
      <Container
        className={`my-5 py-5 text-white w-50 ${
          message.startsWith("Pagamento") ? "bg-success" : "bg-danger"
        }`}
      >
        <h3 className="mb-3">
          {message.startsWith("Pagamento")
            ? "Pagamento completato con successo!"
            : "Errore nel pagamento!"}
        </h3>
        <span className="fs-6">
          {message.startsWith("Pagamento")
            ? "Grazie per il tuo ordine."
            : "Si è verificato un errore con il pagamento. Riprova: " + message}
        </span>
        {message.startsWith("Pagamento") ? (
          <FcOk className="fs-1 ms-3" />
        ) : (
          <span className="ms-2"> ❌</span>
        )}
      </Container>
    )
  );
};

export default SuccessPage;
