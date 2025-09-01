import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="self-center text-2xl font-bold text-gray-800">RecipeFinder</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-orange-600 rounded-lg md:bg-transparent md:text-orange-600 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-lg hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Recipes</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-lg hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Categories</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-lg hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-lg hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar