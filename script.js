

new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["Las Vegas", 
               "Orlando nightclub",
               "Virgina Tech", 
               "Sandy Hook Elementary School",
               "Sutherland spring church",
               "El Paso",
               "Stoneman Douglas High School",
               "San Bernardino",
               "Fort Hood",
               "Columbine High School",
               "Binghamton",
               "Aurora theater",
               "Washington Navy Yard",
               "Thousand Oaks",
               "Virgina Beach",
               "Pittsburgh synagogue",
               "Geneva County",
               "Santa Fee High School"],
      datasets: [{
          label: "Deaths",
          type: "line",
          borderColor: "#A93226",
          data: [58,49,32,
                 27,26,2,
                 17,14,14,
                 13,13,12,
                 12,12,12,
                 11,10,
                 10],
          fill: false
        }, 
                 
           /*        
          {
          label: "injuries",
          type: "line",
          borderColor: "#3e95cd",
          data: [851,53,23,
                 2,20,24,
                 17,24,32,
                 24,4,70,
                 8,25,5,
                 6,6,
                 14],
          fill: false
        }, 
      
                          
      {
          label: "Deaths",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [58,49,32,
                 27,26,2,
                 17,14,14,
                 13,13,12,
                 12,12,12,
                 11,10,
                 10],
        }, 
        */
        
        {
          label: "Injuries",
          type: "bar",
          backgroundColor: "#26A99F",
          backgroundColorHover: "#3e95cd",
          data: [851,53,23,
                 2,20,24,
                 17,24,32,
                 24,4,70,
                 8,25,5,
                 6,6,
                 14]
        }
                 
                 
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Worst mass shooting since 1999'
      },
      legend: { display: false }
    }
});