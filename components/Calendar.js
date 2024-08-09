import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr, options) => format(date, formatStr, { ...options, locale: es }),
  parse: (date, formatStr, options) => parse(date, formatStr, { ...options, locale: es }),
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function GoogleCalendar() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Escribe un título para tu evento');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleDeleteEvent = (eventToDelete) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar el evento "${eventToDelete.title}"?`);
    if (confirmDelete) {
      setEvents(events.filter(event => event !== eventToDelete));
    }
  };

  return (
    <div className="p-4 w-[800px] mx-auto">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      selectable
      onSelectSlot={handleSelectSlot}
      onSelectEvent={handleDeleteEvent}
      messages={{
        next: "Sig.",
        previous: "Ant.",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
        noEventsInRange: "No hay eventos en este rango",
      }}
    />
  </div>
  );
}
