   import DatePicker from 'react-datepicker';
   import 'react-datepicker/dist/react-datepicker.css';

   function MyDatePicker() {
       return (
           <DatePicker
               selected={startDate}
               onChange={(date) => setStartDate(date)}
           />
       );
   }
   