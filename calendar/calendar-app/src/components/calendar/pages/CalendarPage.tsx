import { Navbar } from "../../shared/navbar/Navbar";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from "date-fns";
import { localizer, getMessages} from "../../../helpers";

export const CalendarPage = () => {
  
  const events = [{
    title: 'birthday',
    notes: 'buy dessert',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'rafael'
    }
  }]

  const eventStyleGetter = ( event: any, start: any, end: any, isSelected: any ) => {
    
  }

  
  return (
    <>
      <Navbar />

      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={ getMessages() }
      eventPropGetter={ eventStyleGetter }
    />
    </>
  )
}
