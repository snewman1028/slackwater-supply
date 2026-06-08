// FIELD NOTES ACCORDION

async function loadFieldNotes() {

  // grab the JSON 
  const response = await fetch("data/fieldnotes.json");

  // convert it
  const notes = await response.json();

  // put it in the accordion
  const container =
  document.getElementById("accordion-container");

if (!container) return;

  // close previous
  container.innerHTML = "";

  // loop through each note
  notes.forEach(note => {

    // create accordion item
    const item = document.createElement("div");
    item.classList.add("accordion-item");

    item.innerHTML = `
      <button class="accordion-header">
        ${note.title}
      </button>

      <div class="accordion-content">
        <p>${note.content}</p>
      </div>
    `;

    // add item to page
    container.appendChild(item);
  });

  // accordion functionality
  const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {

  header.addEventListener("click", () => {

    const content =
      header.nextElementSibling;

    // close all accordion items
    document.querySelectorAll(".accordion-content")
      .forEach(item => {
        if (item !== content) {
          item.style.display = "none";
        }
      });

    // toggle current item
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });

});

}
// Product rotation!

const products = [

  {
    name: "The Lantern Eel",

    image: "images/lure.jpg",

    alt: "Lantern Eel glowing fishing lure for low-light fishing conditions",

    description:
      "Designed for low-light waters, the Lantern Eel draws attention where visibility fails. Its subtle glow and movement mimic prey that shouldn’t be there… but is.",

    meta:
      "Best for: Low-light - All waters - Deep Waters"
  },

  {
    name: "Blackwater Spinner",

    image: "images/spinner.jpg",

    alt: "Blackwater Spinner Lure. For murky water fisihing",

    description:
      "Built for murky channels and aggressive strikes, the Blackwater Spinner produces vibration-heavy movement for reduced visibility conditions.",

    meta:
      "Best for: Murky Water - Pike - Bass"
  },

  {
    name: "Mireline Braid",

    image: "images/line.jpg",

    alt: "Mireline Braid. Cold-water fisihing line",

    description:
      "Low-visibility braided line designed for cold-water durability and silent casting across shallow marsh conditions.",

    meta:
      "Best for: Cold Water - Marsh Fishing - Night Casting"
  }

];

let currentProduct = 0;

// update product card
function updateProduct() {

  document.getElementById("product-name")
    .textContent =
      products[currentProduct].name;

  document.getElementById("product-image")
    .src =
      products[currentProduct].image;

  document.getElementById("product-description")
    .textContent =
      products[currentProduct].description;

  document.getElementById("product-meta")
    .textContent =
      products[currentProduct].meta;
}

// next product
document.getElementById("next-product")
  .addEventListener("click", () => {

    currentProduct++;

    if (currentProduct >= products.length) {
      currentProduct = 0;
    }

    updateProduct();
});

// previous product
document.getElementById("prev-product")
  .addEventListener("click", () => {

    currentProduct--;

    if (currentProduct < 0) {
      currentProduct =
        products.length - 1;
    }

    updateProduct();
});
// run function
loadFieldNotes();