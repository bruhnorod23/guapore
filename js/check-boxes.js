document.getElementById('myForm').addEventListener('change', function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var allChecked = true;
    checkboxes.forEach(function(checkbox) {
      if (!checkbox.checked) {
        allChecked = false;
      }
    });
    document.getElementById('nextBtn').disabled = !allChecked;
  });