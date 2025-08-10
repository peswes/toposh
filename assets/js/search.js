 const products = [
      { name: "iPhone 13", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
      { name: "Samsung Galaxy S21", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
      { name: "MacBook Pro", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
      { name: "AirPods Pro", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
      { name: "Smart Watch", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
      { name: "Bluetooth Speaker", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
      { name: "Canon Camera", image: "website-demo-image/Screenshot_20250701-134459~2.png", link: "#" },
    ];

    const searchInput = document.getElementById("searchInput");
    const resultsWrapper = document.getElementById("resultsWrapper");
    const resultsDropdown = document.getElementById("resultsDropdown");

    function displayResults(results) {
      resultsDropdown.innerHTML = "";

      if (results.length === 0) {
        resultsDropdown.innerHTML = `<div class="no-results">No matching products found.</div>`;
      } else {
        results.forEach(product => {
          const item = document.createElement("a");
          item.href = product.link;
          item.className = "search-result-item";
          item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
          `;
          resultsDropdown.appendChild(item);
        });
      }

      resultsWrapper.style.display = "block";
    }

    function filterProducts() {
      const query = searchInput.value.toLowerCase().trim();
      if (!query) {
        clearResults();
        return;
      }

      const filtered = products.filter(p => p.name.toLowerCase().includes(query));
      displayResults(filtered);
    }

    function clearResults() {
      resultsWrapper.style.display = "none";
      resultsDropdown.innerHTML = "";
    }

    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim() === "") {
        clearResults();
      } else {
        filterProducts();
      }
    });
