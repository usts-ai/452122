import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import BookingCalendar from '../components/BookingCalendar';
import PropertyList from '../components/PropertyList';
import RecentBookings from '../components/RecentBookings';
import Footer from '../components/Footer';
import { bookingStats } from '../data/mockData';

const Dashboard: React.FC = () => {
  // Animation variants pour l'effet d'apparition des éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />

      <main className="pt-24 pl-[240px] pr-4 pb-8">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* En-tête du Dashboard */}
          <motion.div 
            className="flex justify-between items-center mb-8" 
            variants={childVariants}
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
              <p className="text-gray-600">Bienvenue, Pierre ! Voici vos statistiques en temps réel.</p>
            </div>
            <motion.div 
              className="flex space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Exporter
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Nouvelle réservation
              </button>
            </motion.div>
          </motion.div>

          {/* Cartes de statistiques */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
            variants={childVariants}
          >
            <StatCard 
              title="Total des réservations" 
              value={bookingStats.totalBookings}
              icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              color="border-l-4 border-blue-500"
              percentChange={12}
            />
            <StatCard 
              title="Taux d'occupation" 
              value={`${bookingStats.occupancyRate}%`}
              icon="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              color="border-l-4 border-green-500"
              percentChange={8}
            />
            <StatCard 
              title="Séjour moyen" 
              value={`${bookingStats.averageStay} jours`}
              icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              color="border-l-4 border-purple-500"
              percentChange={-3}
            />
            <StatCard 
              title="Réservations en attente" 
              value={bookingStats.pendingBookings}
              icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              color="border-l-4 border-yellow-500"
              percentChange={5}
            />
          </motion.div>

          {/* Graphique et Calendrier */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
            variants={childVariants}
          >
            <RevenueChart />
            <BookingCalendar />
          </motion.div>

          {/* Liste de propriétés et Réservations récentes */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
            variants={childVariants}
          >
            <PropertyList />
            <div className="lg:col-span-2">
              <RecentBookings />
            </div>
          </motion.div>

          {/* Section Paiements */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            variants={childVariants}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">Intégration Stripe</h3>
                <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                  Configurer
                </button>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-3">Réglages de paiement</h4>
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                        <div className="flex items-center">
                          <svg className="w-8 h-8 text-blue-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                          <div>
                            <h5 className="font-medium text-gray-800">Paiement en ligne</h5>
                            <p className="text-sm text-gray-500">Accepter les paiements par carte</p>
                          </div>
                        </div>
                        <div className="relative">
                          <input type="checkbox" className="sr-only" id="toggle-payment" checked readOnly />
                          <div className="block bg-gray-200 w-14 h-7 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-blue-600 w-5 h-5 rounded-full transition transform translate-x-7"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                        <div className="flex items-center">
                          <svg className="w-8 h-8 text-green-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.14 4.93a2.86 2.86 0 0 0-2.83-2.83H7.69a2.86 2.86 0 0 0-2.83 2.83v14.14a2.86 2.86 0 0 0 2.83 2.83h8.62a2.86 2.86 0 0 0 2.83-2.83V4.93zM8 18.59c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1 1.1.49 1.1 1.1-.49 1.1-1.1 1.1zm0-3.31c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1 1.1.49 1.1 1.1-.49 1.1-1.1 1.1zm0-3.31c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1 1.1.49 1.1 1.1-.49 1.1-1.1 1.1zm8.62 6.62H10.9v-1.1h5.72v1.1zm0-3.31H10.9v-1.1h5.72v1.1zm0-3.31H10.9v-1.1h5.72v1.1z"/>
                          </svg>
                          <div>
                            <h5 className="font-medium text-gray-800">Factures automatiques</h5>
                            <p className="text-sm text-gray-500">Génération et envoi par email</p>
                          </div>
                        </div>
                        <div className="relative">
                          <input type="checkbox" className="sr-only" id="toggle-invoices" checked readOnly />
                          <div className="block bg-gray-200 w-14 h-7 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-green-600 w-5 h-5 rounded-full transition transform translate-x-7"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                        <div className="flex items-center">
                          <svg className="w-8 h-8 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"/>
                          </svg>
                          <div>
                            <h5 className="font-medium text-gray-800">Paiements partiels</h5>
                            <p className="text-sm text-gray-500">Accepter les acomptes</p>
                          </div>
                        </div>
                        <div className="relative">
                          <input type="checkbox" className="sr-only" id="toggle-partial" />
                          <div className="block bg-gray-200 w-14 h-7 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-3">Aperçu des paiements</h4>
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-gray-800">Total des paiements</span>
                          <span className="text-lg font-bold text-gray-900">28 450 €</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Ce mois</span>
                          <span>Objectif: 38 000 €</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-green-600 font-medium">+12.3%</span>
                          </div>
                          <p className="text-gray-500 text-xs">Paiements réussis</p>
                          <p className="font-bold text-gray-900">98%</p>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <span className="text-red-600 font-medium">-1.2%</span>
                          </div>
                          <p className="text-gray-500 text-xs">Paiements échoués</p>
                          <p className="font-bold text-gray-900">2%</p>
                        </div>
                      </div>
                      
                      <motion.button 
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm13 3.9V6H7v1.9h10zm-9.6 6h-2v2H7v-2H5v-1.4h2v-2h1.4v2h2V14h-2zm7.6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                        Connecter Stripe
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
