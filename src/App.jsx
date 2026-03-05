import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CsTickets from "./Components/CsTickets/CsTickets";

const getData = async () => {
  try {
    const res = await fetch("/data.json");

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("fetchData error:", error);
    throw error; // rethrow so caller can handle it too
  }
};

getData();
// .then((data) => {
//   console.log("Data:", data);
// })
// .catch((error) => {
//   // Handle error here
//   console.error("Caught in caller:", error.message);
// });

const ticketData = getData();
function App() {
  return (
    <>
      <Container></Container>
      <Navbar></Navbar>
      <Suspense fallback={"Loading..."}>
        <CsTickets ticketData={ticketData}></CsTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
