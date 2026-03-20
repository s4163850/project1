function filterPets(status) {
  let pets = document.querySelectorAll('.pet-card');

  pets.forEach(pet => {
    if (status === 'all' || pet.dataset.status === status) {
      pet.style.display = "block";
    } else {
      pet.style.display = "none";
    }
  });
}

const input = document.getElementById("imageInput");

if (input) {
  input.addEventListener("change", function(e) {
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(e.target.files[0]);
  });
}

function validateForm() {
  let name = document.getElementById("name").value.trim();

  if (name === "") {
    alert("Enter pet name");
    return false;
  }

  alert("Pet added!");
  return true;
}