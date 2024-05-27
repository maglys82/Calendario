
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es } from 'date-fns/locale';

const locales = {
    'es': es,
};
import { dateFnsLocalizer } from 'react-big-calendar';


   export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
  