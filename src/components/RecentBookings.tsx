import React from 'react';
import { motion } from 'framer-motion';
import { bookings, properties, users } from '../data/mockData';

const RecentBookings: React.FC = () => {
  // Fusionner les données des réservations avec les propriétés et les utilisateurs
  const bookingsWithDetails = bookings.slice(0, 5).map(booking => {
    const property = properties.find(p => p.id === booking.propertyId);
    const user = users.find(u => u.id === booking.userId);
    
    return {
      ...booking,
      property,
      user
    };
  });

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('fr-FR', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric' 
    }).format(date);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Réservations récentes</h3>
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
            Voir toutes
          </button>
        </div>
        
        <motion.div 
          className="overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Propriété
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookingsWithDetails.map((booking) => (
                <motion.tr 
                  key={booking.id}
                  variants={itemVariants}
                  className="hover:bg-gray-50 cursor-pointer"
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(243, 244, 246, 0.7)' }}
                >
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img className="h-8 w-8 rounded-full" src={booking.user?.avatar} alt="" />
                      </div>
                      <div className="ml-2">
                        <div className="text-sm font-medium text-gray-900">{booking.user?.name}</div>
                        <div className="text-xs text-gray-500">{booking.user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.property?.name}</div>
                    <div className="text-xs text-gray-500">{booking.property?.location}</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
                    </div>
                    <div className="text-xs text-gray-500">{booking.guests} invités</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.totalPrice}€</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${booking.status === 'confirmé' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'en attente' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                      {booking.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecentBookings;
