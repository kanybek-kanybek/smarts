import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import DetalProduct from "./pages/DetalProduct/DetalProduct";
import GroupProduct from "./pages/groupProduct/GroupProduct";
import Review from "./pages/review/review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detal/product",
        element: <DetalProduct />,
    },
    {
        path: "/group/product",
        element: <GroupProduct />,
    },
    {
        path: "/review",
        element: <Review />,
    },
]);
//start progect
function App() {
    return (
        <>
            <Header />
            <main>
                <RouterProvider router={router} />
            </main>
            <Footer />
        </>
    );
}

export default App;
