import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { properties, availableDates } from '../data/mockData';

type CalendarView = 'month' | 'week';

const BookingCalendar: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<number>(1);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [view, setView] = useState<CalendarView>('month');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Générer les jours du mois actuel
  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    // Jours du mois précédent
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(date.getFullYear(), date.getMonth() - 1, daysInPrevMonth - i),
        isCurrentMonth: false,
        isBooked: false,
        isAvailable: false
      });
    }
    
    // Jours du mois actuel
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      const isAvailable = isDateAvailable(currentDate, selectedProperty);
      
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        isBooked: !isAvailable,
        isAvailable
      });
    }
    
    // Calculer les jours du mois suivant pour compléter la grille
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(date.getFullYear(), date.getMonth() + 1, i),
        isCurrentMonth: false,
        isBooked: false,
        isAvailable: false
      });
    }
    
    return days;
  };

  // Vérifier si une date est disponible
  const isDateAvailable = (date: Date, propertyId: number): boolean => {
    const propertyAvailability = availableDates[propertyId as keyof typeof availableDates];
    
    if (!propertyAvailability) return false;
    
    return propertyAvailability.some(range => 
      date >= range.start && date <= range.end
    );
  };

  // Générer le nom du mois
  const getMonthName = (month: number): string => {
    const monthNames = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    return monthNames[month];
  };

  // Naviguer au mois précédent
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Naviguer au mois suivant
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const days = getDaysInMonth(currentYear, currentMonth);
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Calendrier des réservations</h3>
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 text-sm rounded-full ${view === 'month' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setView('month')}
            >
              Mois
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-full ${view === 'week' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setView('week')}
            >
              Semaine
            </button>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-full">
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(parseInt(e.target.value))}
            >
              {properties.map(property => (
                <option key={property.id} value={property.id}>
                  {property.name} - {property.location}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <h4 className="text-lg font-medium text-gray-700">
            {getMonthName(currentMonth)} {currentYear}
          </h4>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {weekDays.map(day => (
            <div key={day} className="text-center py-2 text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
          
          {days.map((day, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative h-12 rounded-lg flex items-center justify-center cursor-pointer
                ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'}
                ${day.isBooked && day.isCurrentMonth ? 'bg-red-50' : ''}
                ${day.isAvailable && day.isCurrentMonth ? 'bg-green-50' : ''}
                ${selectedDate && day.date.toDateString() === selectedDate.toDateString() ? 'ring-2 ring-blue-500' : ''}
                ${new Date().toDateString() === day.date.toDateString() ? 'font-bold' : ''}
              `}
              onClick={() => setSelectedDate(day.date)}
            >
              <span className="text-sm">{day.date.getDate()}</span>
              {day.isBooked && day.isCurrentMonth && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              )}
              {day.isAvailable && day.isCurrentMonth && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-gray-600">Disponible</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-gray-600">Réservé</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
            <span className="text-gray-600">Autre mois</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCalendar;
