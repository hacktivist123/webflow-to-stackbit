import { format } from 'date-fns';

const Date = ({ dateString }) => {
  return <time dateTime={dateString}>{format(new Date(dateString), 'LLLL	d, yyyy')}</time>;
};

export default Date;
