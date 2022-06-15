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

  const onDoubleClick = ( event: any ) => {
    console.log(event);
  }

  const onSelect = ( event: any ) => {
    console.log(event);
  }


  const onViewVhange = ( event: any ) => {
    console.log(event);
  }



  const eventStyleGetter = ( event: any, start: any, end: any, isSelected: any ) => {
    const style = {
      backgroundColor: 'salmon',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    
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
      onDoubleClickEvent={ onDoubleClick }
    />
    </>
  )
}
