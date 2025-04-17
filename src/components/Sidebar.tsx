import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Tableau de bord' },
    { id: 'properties', icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z', label: 'Propriétés' },
    { id: 'bookings', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Réservations' },
    { id: 'payments', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', label: 'Paiements' },
    { id: 'clients', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', label: 'Clients' },
    { id: 'reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Rapports' },
    { id: 'settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', label: 'Paramètres' },
  ];

  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '80px' }
  };

  return (
    <motion.div 
      className="fixed left-0 top-0 h-full bg-gradient-to-b from-blue-800 to-blue-900 text-white z-40 pt-16"
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-blue-200 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isCollapsed ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              )}
            </svg>
          </motion.button>
        </div>

        <ul className="mt-2 flex-1">
          {menuItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-3 cursor-pointer ${activeItem === item.id ? 'bg-blue-700' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                </svg>
                <motion.span 
                  className="ml-3 font-medium"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isCollapsed ? 0 : 1, display: isCollapsed ? 'none' : 'block' }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto p-4">
          <motion.div
            className="flex items-center p-3 bg-blue-700 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-blue-500 p-2 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <motion.div 
              className="ml-3"
              initial={{ opacity: 1 }}
              animate={{ opacity: isCollapsed ? 0 : 1, display: isCollapsed ? 'none' : 'block' }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-sm font-medium">Besoin d'aide ?</div>
              <div className="text-xs text-blue-200">Contacter le support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
