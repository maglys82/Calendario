import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';
import { Navbar } from '../';
import { localizer ,getMessagesEs} from '../../helper';


const events= [{
  title: "Cumpleanos de Maglys ",
  nota: "Comprar Pastel",
  start: new Date(),
  end: addHours( new Date(), 2),
  bgcolor: '#fafafa',
  user: {
    _id: '123',
    name:'Maglys Maita'

  }



}] 
export const CalendarPage = () => {
  const eventsStyleGetter = (events,fecha_ini,fecha_final,isSelected)=>{
    console.log({events,fecha_ini,fecha_final,isSelected});

    const style= {
      backgroundColor: 'green',
      borderRadius: '0px',
      opacite: '0.8',
      color: 'whitw',

    }

    return {
      style
    }

}


  return (
    <>
      <Navbar />
      <Calendar
        culture='ES'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={ getMessagesEs()}
        eventPropGetter={eventsStyleGetter}
      />
    </>
  )
}
