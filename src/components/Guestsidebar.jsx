import React from 'react'

const GuestSidebar = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col md:grid md:grid-cols-12">
                {/* Guest Sidebar */}
                < aside className={`col-span-2 bg-[#e0e1dd] text-black flex flex-col md:sticky md:top-0 h-screen md:h-auto z-20 ${sidebarOpen ? 'block' : 'hidden'} md:block`
                }>
                    <div className="flex  mt-5 ">
                        <img src={image} alt="Citizen Resolve Logo" className="h-32 w-32 " />
                    </div>
                    <nav className="flex flex-col mt-5 px-5">
                        <Link to="/" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Home</Link>
                        <Link to="/government-action" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Government Action</Link>
                        <Link to="/news-and-update" className="p-2 hover:bg-[#003049] hover:text-white font-bold">News and Update</Link>
                        <Link to="/guidelines-and-safety-tips" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Guidelines and Safety Tips</Link>
                        <Link to="/faq" className="p-2 hover:bg-[#003049] hover:text-white font-bold">FAQ</Link>
                        <Link to="/about-us" className="p-2 hover:bg-[#003049] hover:text-white font-bold">About Us</Link>
                        <Link to="/team-and-support" className="p-2 hover:bg-[#003049] hover:text-white font-bold">Team and Support</Link>
                        <Link to="/login" className="p-2 hover:bg-[#003049] hover:text-white font-extrabold">Login</Link>

                    </nav>
                </aside >
                <div className="col-span-10 flex flex-col">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default GuestSidebar;