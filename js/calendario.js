$(document).ready(function() {

    $('#calendar').fullCalendar({
    //  defaultDate: '2020-01-01', // Muestra el calendario a partir de ese día
	  defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Año Nuevo',
            url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-01-01'
        },
		{
          title: 'Carnaval',
		  url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-02-24',
          end: '2020-02-26',
        },
		{
          title: 'Feriados con Fines turísticos',
		  url:'https://www.argentina.gob.ar/interior/feriados-nacionales-2020',
          start: '2020-03-23',
          end: '2020-03-25',
        },
		{
          title: 'Día de Vacunación',
		  
          start: '2020-12-04'
        },

		   {
          title: 'Día de Vacunación',
           
          start: '2020-11-06',
        },
            {
          title: 'Día de Vacunación',
      
          start: '2020-12-09'
        },
          {
          title: 'Día de Vacunación',
      
          start: '2020-12-10'
        },
        {
          title: 'Día de Vacunación',
      
          start: '2020-12-11'
        },
        {
          title: 'Día de Vacunación',
           
          start: '2021-01-11',
        },
        {
          title: 'Día de Vacunación',
           
          start: '2021-01-12',
        },
         {
          title: 'Día de Vacunación',
           
          start: '2021-01-13',
        }
      ]
    });

  });
