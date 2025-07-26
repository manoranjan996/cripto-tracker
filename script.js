async function fetchCrypto() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  try {
    const res = await fetch(url);
    const data = await res.json();

    const list = document.getElementById('crypto-list');
    list.innerHTML = '';

    data.forEach(coin => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${coin.image}" alt="${coin.name}">
        <div class="name">${coin.name} (${coin.symbol.toUpperCase()})</div>
        <div class="price">$${coin.current_price.toLocaleString()}</div>
      `;
      list.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to fetch data:', err);
  }
}

window.onload = fetchCrypto;
