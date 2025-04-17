import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { notifications } from '../data/mockData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const unreadNotifications = notifications.filter(notification => !notification.read).length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-8 h-8 mr-2 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6H4V4h16v2zm0 2H4v12h16V8zm-14 4h4v6H6v-6zm6 0h6v2h-6v-2zm0 4h4v2h-4v-2z" />
          </svg>
          <h1 className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            ReservationPro
          </h1>
        </motion.div>

        <div className="flex items-center space-x-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              className={`p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {showNotifications && (
              <motion.div 
                className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <motion.div 
                      key={notification.id}
                      className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                      whileHover={{ x: 5 }}
                    >
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <button className="text-sm text-blue-500 hover:text-blue-700">Voir toutes les notifications</button>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              className="flex items-center space-x-2"
              onClick={() => setShowProfile(!showProfile)}
            >
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
              <span className={`hidden md:inline font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Pierre Dupont</span>
              <svg className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showProfile && (
              <motion.div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Mon Profil
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Paramètres
                  </button>
                  <hr className="my-1" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Déconnexion
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
