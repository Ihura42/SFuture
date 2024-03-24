document.addEventListener("DOMContentLoaded", function() {

  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          datasets: [{
              label: '# of trainings',
              data: [12, 19, 3, 5, 2, 3, 5],
              borderWidth: 1
          }]
      },
      options: {
          plugins: {
              legend: {
                  display: false
              },
              tooltips: {
                  enabled: false
              }
          },
          scales: {
              x: {
                  grid: {
                      display: false
                  }
              },
              y: {
                  grid: {
                      display: false
                  },
                  ticks: {
                      display: false
                  }
              }
          }
      }
  });
});

// Function to show modal
function showModal(cardIndex) {
  var modal = document.getElementById('myModal'+ cardIndex);
  var modalText = document.getElementById('modal-text');
  var content = "";

  modal.style.display = 'block';
  modalText.innerText = content;
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  
  var closeBtns = document.querySelectorAll('.close');
  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var modalId = this.closest('.modal').id;
      closeModal(modalId);
    });
  });
  
  
  window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });

  document.querySelectorAll('.add-exercise-btn').forEach(button => {
    button.addEventListener('click', () => {
        
      
        const cardDetails = button.closest('.card-ex').querySelector('.exercise-details').innerHTML;
        localStorage.setItem('addedExercise', cardDetails);

    });
});
