import { useState, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar, { SideBarItem } from "../../components/sidebar";
import { UserContext } from "../../context/user";
import { SectionProvider } from "../../context/section";
import { useQuery } from "@tanstack/react-query";
import { SectionService } from "../../../infraestructure";
import AddSectionForm from "./components/AddSectionForm";
import WrapperFormSection from "./components/wrapper-form-section";

const Dashboard = () => {
    const { user, credentials, closeSession } = useContext(UserContext);
    const fetchData = useQuery({ queryKey: ["dashboard", "sections"], queryFn: SectionService.getAll, staleTime: 10 * 60 * 1000, enabled: user ? true : false });
    const [showForm, setShowForm] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (!user) return <Navigate to="/" />

    const handleAddSection = () => {
        setShowForm(true);
    };

    const handleCloseModal = () => {
        setShowForm(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <SectionProvider>
            <div className="flex">
                {/* Botón del menú para dispositivos móviles */}
                <div className="lg:hidden p-4">
                    <button onClick={toggleMobileMenu} className="text-xl">
                        ☰
                    </button>
                </div>

                <div className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <SideBar>
                        {() => (
                            <>
                                {credentials.type === "administrator" && (
                                    <SideBarItem icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M8 12h8" />
                                            <path d="M12 8v8" />
                                        </svg>
                                    } text="Agregar Sección" context={{ handleClick: handleAddSection }} />
                                )}
                                <hr className="my-3" />
                                {fetchData.data && fetchData.data.data.map((item, index) => (
                                    <SideBarItem key={index} context={item} text={item.name} icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6">
                                            <rect width="18" height="18" x="3" y="3" rx="2" />
                                            <path d="M7 7v10" />
                                            <path d="M11 7v10" />
                                            <path d="m15 7 2 10" />
                                        </svg>
                                    } />
                                ))}
                                <hr className="my-3" />
                                <div onClick={closeSession}>
                                    <SideBarItem icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" x2="9" y1="12" y2="12" />
                                        </svg>
                                    } text="Cerrar Session" />
                                </div>
                            </>
                        )}
                    </SideBar>
                </div>

                <Outlet />
            </div>
            <WrapperFormSection isOpen={showForm}>
                <AddSectionForm onClose={handleCloseModal} OnSuccess={() => fetchData.refetch()} />
            </WrapperFormSection>
        </SectionProvider>
    );
};

export default Dashboard;