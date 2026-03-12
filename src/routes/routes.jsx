import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SocialIcons from "../components/SocialIcons";
import WhatsAppButton from "../components/WhatsAppButton";

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
        <SocialIcons />
        <WhatsAppButton />
    </>
);

const importPages = () => {
    const pages = import.meta.glob("../pages/**/page.jsx", { eager: true });
    const routes = [];
    const excludedPaths = new Set([
        "appointment",
        "user-login",
        "user-register",
        "admin-login",
        "admin",
        "admin/dashboard",
    ]);

    Object.keys(pages).forEach((key) => {
        const match = key.match(/\/pages\/(.*?)\/page\.jsx$/);

        if (match) {
            const routePath = match[1].toLowerCase();
            if (excludedPaths.has(routePath)) {
                return;
            }
            const Component = pages[key].default;
            
            // Log veya Admin sayfaları için Layout'suz (veya farklı layout'lu) route
            const isAdminPath = routePath.startsWith('admin');

            routes.push({
                path: routePath === "home" ? "/" : `/${routePath}`,
                element: isAdminPath ? (
                    <Component />
                ) : (
                    <Layout>
                        <Component />
                    </Layout>
                ),
            });
        }
    });

    return routes;
};

const AppRoutes = () => {
    const routes = importPages();

    return (
        <>
            <ScrollToTop />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}

                {/* Ana sayfa için ek route (boş path durumu) */}
                <Route path="/home" element={<Navigate to="/" replace />} />

                {/* Bilinmeyen rotalar için ana sayfaya yönlendirme */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
