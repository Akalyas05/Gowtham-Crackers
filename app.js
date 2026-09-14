/* ==========================================
   GOWTHAM CRACKERS - APPLICATION JAVASCRIPT
   ========================================== */

// --- INITIAL SEED DATA ---
const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    name: 'Royal Electric Sparklers (100 Pcs)',
    category: 'sparklers',
    price: 350,
    oldPrice: 700,
    discount: 50,
    rating: 4.9,
    reviews: 128,
    isEco: true,
    isBestseller: true,
    inStock: true,
    image: 'assets/images/sparklers.jpg',
    description: 'Long-lasting golden handheld electric sparklers emitting dazzling crackling lights. Safe for kids and zero smoke emission.'
  },
  {
    id: 'p2',
    name: 'Multi-Color Peacock Flower Pots (10 Box)',
    category: 'flowerpots',
    price: 490,
    oldPrice: 980,
    discount: 50,
    rating: 4.8,
    reviews: 95,
    isEco: true,
    isBestseller: true,
    inStock: true,
    image: 'assets/images/flowerpots.jpg',
    description: 'Vibrant ground fountain shooting multi-colored sparkles up to 15 feet high into the night sky.'
  },
  {
    id: 'p3',
    name: 'Deepawali Sky Blasters Rockets (24 Pack)',
    category: 'rockets',
    price: 680,
    oldPrice: 1360,
    discount: 50,
    rating: 4.9,
    reviews: 142,
    isEco: false,
    isBestseller: true,
    inStock: true,
    image: 'assets/images/rockets.jpg',
    description: 'High-altitude sky rockets with sparkling tail trails that burst into grand colorful floral umbrellas.'
  },
  {
    id: 'p4',
    name: 'Shubh Diwali Mega Family Combo Box',
    category: 'combo_boxes',
    price: 2490,
    oldPrice: 4980,
    discount: 50,
    rating: 5.0,
    reviews: 310,
    isEco: true,
    isBestseller: true,
    inStock: true,
    image: 'assets/images/combo_box.jpg',
    description: 'Ultimate 45-item celebration hamper packed with sparklers, flowerpots, rockets, ground chakkars, and multi-shot fountains.'
  },
  {
    id: 'p5',
    name: '30-Shot Grand Aerial Fireworks Show',
    category: 'aerial_shots',
    price: 1850,
    oldPrice: 3700,
    discount: 50,
    rating: 4.9,
    reviews: 84,
    isEco: true,
    isBestseller: false,
    inStock: true,
    image: 'assets/images/hero_banner.jpg',
    description: 'Spectacular multi-shot aerial battery lighting up the night with 30 rapid-fire colorful stars and golden palm effects.'
  },
  {
    id: 'p6',
    name: 'Color Changing Ground Chakkars (25 Pcs)',
    category: 'flowerpots',
    price: 280,
    oldPrice: 560,
    discount: 50,
    rating: 4.7,
    reviews: 64,
    isEco: true,
    isBestseller: false,
    inStock: true,
    image: 'assets/images/flowerpots.jpg',
    description: 'Fast-spinning ground spinners that smoothly shift colors from ruby red to emerald green and bright gold.'
  },
  {
    id: 'p7',
    name: 'Kid Special Crackling Magic Candles (10 Pcs)',
    category: 'sparklers',
    price: 220,
    oldPrice: 440,
    discount: 50,
    rating: 4.8,
    reviews: 79,
    isEco: true,
    isBestseller: false,
    inStock: true,
    image: 'assets/images/sparklers.jpg',
    description: 'Handheld colorful flame candles designed specially with safety handles for children.'
  },
  {
    id: 'p8',
    name: 'Sivakasi Deluxe Sound Maroons (1000 Wala)',
    category: 'sound_crackers',
    price: 890,
    oldPrice: 1780,
    discount: 50,
    rating: 4.6,
    reviews: 110,
    isEco: false,
    isBestseller: false,
    inStock: true,
    image: 'assets/images/rockets.jpg',
    description: 'Traditional long garland cracker with crisp festive thunder sounds to inaugurate celebrations.'
  },
  {
    id: 'p9',
    name: 'Royal Luxury VIP Gift Box Hamper',
    category: 'combo_boxes',
    price: 4990,
    oldPrice: 9980,
    discount: 50,
    rating: 5.0,
    reviews: 180,
    isEco: true,
    isBestseller: true,
    inStock: true,
    image: 'assets/images/combo_box.jpg',
    description: 'Grand corporate and wedding fireworks hamper containing 75 premium items in velvet gold packaging.'
  },
  {
    id: 'p10',
    name: 'Golden Waterfall Fountain (5 Pack)',
    category: 'aerial_shots',
    price: 750,
    oldPrice: 1500,
    discount: 50,
    rating: 4.8,
    reviews: 52,
    isEco: true,
    isBestseller: false,
    inStock: true,
    image: 'assets/images/hero_banner.jpg',
    description: 'Continuous 60-second cascading golden spark shower perfect for stage photography and family moments.'
  }
];

const DEFAULT_OFFERS = [
  {
    id: 'off1',
    title: 'Grand Diwali Dhamaka 50% Flat Offer',
    discountPercent: 50,
    couponCode: 'DIWALI50',
    startTime: '2026-09-01T00:00',
    endTime: '2026-11-15T23:59',
    enabled: true,
    includedProducts: ['All Sparklers', 'All Flower Pots', 'Family Combos']
  },
  {
    id: 'off2',
    title: 'Early Bird Festival Discount 20%',
    discountPercent: 20,
    couponCode: 'GOWTHAM20',
    startTime: '2026-09-01T00:00',
    endTime: '2026-10-31T23:59',
    enabled: true,
    includedProducts: ['Rockets', 'Aerial Shots']
  }
];

const DEFAULT_SHOP_DETAILS = {
  name: 'Gowtham Crackers Factory Direct Outlet',
  address: 'Gowtham Crackers Complex, Main Road, Sivakasi, Tamil Nadu - 626123',
  phone: '+91 98765 43210 / +91 98765 43211',
  email: 'support@gowthamcrackers.com',
  hours: 'Monday to Sunday: 8:00 AM - 10:00 PM',
  mapsUrl: 'https://maps.google.com'
};

// --- LOCAL STORAGE DATA MANAGERS ---
function loadStorageData(key, fallback) {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
}

function saveStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Global Application State
const appState = {
  products: loadStorageData('gowtham_products', DEFAULT_PRODUCTS),
  offers: loadStorageData('gowtham_offers', DEFAULT_OFFERS),
  shopDetails: loadStorageData('gowtham_shop_details', DEFAULT_SHOP_DETAILS),
  cart: loadStorageData('gowtham_cart', []),
  orders: loadStorageData('gowtham_orders', []),
  isAdminLoggedIn: loadStorageData('gowtham_admin_logged_in', false),
  
  currentCategory: 'all',
  searchQuery: '',
  maxPrice: 10000,
  ecoOnly: false,
  sortBy: 'featured',
  soundEnabled: true,
  appliedCoupon: null,
  discountRate: 0,
  currentPaymentTab: 'upi',
  deliveryDetails: null
};

// --- WEB AUDIO FX SYNTHESIZER ---
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSoundFX(type) {
  if (!appState.soundEnabled) return;
  try {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'sparkle') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1600, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'pop') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'chime') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    }
  } catch (e) {
    console.log('Audio FX error:', e);
  }
}

// --- DYNAMIC FIREWORKS CANVAS ENGINE ---
function initCanvasEngine() {
  const canvas = document.getElementById('fireworks-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const colors = ['#FFD700', '#FF2E63', '#FF6B00', '#00E676', '#00F2FE', '#FFFFFF'];

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color || colors[Math.floor(Math.random() * colors.length)];
      this.radius = Math.random() * 2.5 + 1;
      this.vx = (Math.random() - 0.5) * 8;
      this.vy = (Math.random() - 0.5) * 8;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.01;
      this.gravity = 0.08;
    }

    update() {
      this.vx *= 0.98;
      this.vy *= 0.98;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }
  }

  function explode(x, y) {
    playSoundFX('pop');
    const particleCount = 40;
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(x, y, color));
    }
  }

  // Ambient fireworks spawner
  setInterval(() => {
    if (Math.random() > 0.3) {
      const rx = Math.random() * width;
      const ry = Math.random() * (height * 0.6);
      explode(rx, ry);
    }
  }, 2500);

  // Click burst interaction
  window.addEventListener('click', (e) => {
    // Avoid triggering burst when clicking form inputs
    if (['INPUT', 'BUTTON', 'TEXTAREA', 'SELECT', 'A'].includes(e.target.tagName)) return;
    explode(e.clientX, e.clientY);
  });

  function renderLoop() {
    ctx.fillStyle = 'rgba(11, 13, 23, 0.2)';
    ctx.fillRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.alpha <= 0) {
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initCanvasEngine();
  renderProducts();
  renderOffersList();
  renderShopDetailsCustomer();
  updateCartUI();
  initCountdownTimer();
  setupEventListeners();
});

// View Switcher
function switchView(viewId) {
  const views = document.querySelectorAll('.view-section');
  const navLinks = document.querySelectorAll('.nav-link');

  views.forEach((v) => {
    v.classList.remove('active');
    if (v.id === `view-${viewId}`) {
      v.classList.add('active');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.view === viewId) {
      link.classList.add('active');
    }
  });

  if (viewId === 'my-orders') renderMyOrders();
  if (viewId === 'contact') renderShopDetailsCustomer();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- PRODUCTS CATALOG ENGINE ---
function filterProducts() {
  return appState.products.filter((p) => {
    const matchCat = appState.currentCategory === 'all' || p.category === appState.currentCategory;
    const matchSearch = p.name.toLowerCase().includes(appState.searchQuery.toLowerCase()) ||
                        (p.description && p.description.toLowerCase().includes(appState.searchQuery.toLowerCase()));
    const matchPrice = p.price <= appState.maxPrice;
    const matchEco = !appState.ecoOnly || p.isEco;
    return matchCat && matchSearch && matchPrice && matchEco;
  }).sort((a, b) => {
    if (appState.sortBy === 'price-low') return a.price - b.price;
    if (appState.sortBy === 'price-high') return b.price - a.price;
    if (appState.sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
  });
}

function renderProducts() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const filtered = filterProducts();
  const countEl = document.getElementById('results-count-display');
  if (countEl) countEl.innerText = `Showing ${filtered.length} Fireworks`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-sub);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🎇</div>
        <h3>No Fireworks Found</h3>
        <p>Try searching for another cracker name or adjusting your filter settings.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p) => `
    <div class="product-card">
      <div class="product-thumb">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="badge-list">
          ${p.isEco ? `<span class="badge-tag eco">🌿 100% Eco Green</span>` : ''}
          ${p.isBestseller ? `<span class="badge-tag bestseller">🔥 Best Seller</span>` : ''}
          ${p.inStock === false ? `<span class="badge-tag stock-out">Out of Stock</span>` : `<span class="badge-tag discount">${p.discount || 50}% OFF</span>`}
        </div>
        <button class="quick-view-trigger" onclick="openQuickView('${p.id}')">🔍 Quick View</button>
      </div>
      <div class="product-details">
        <span class="product-cat-tag">${(p.category || '').replace('_', ' ')}</span>
        <h4 class="product-title">${p.name}</h4>
        <div class="product-rating">
          <span>★ ${p.rating || 4.9}</span>
          <span class="rating-count">(${p.reviews || 90} reviews)</span>
        </div>
        <div class="product-price-row">
          <span class="curr-price">₹${p.price}</span>
          <span class="old-price">₹${p.oldPrice || p.price * 2}</span>
          <span class="save-percent">Save ₹${(p.oldPrice || p.price * 2) - p.price}</span>
        </div>
        <button class="add-cart-btn" ${p.inStock === false ? 'disabled' : ''} onclick="addToCart('${p.id}')">
          ${p.inStock === false ? 'Out of Stock' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  `).join('');
}

// --- OFFERS SECTION RENDERER ---
function renderOffersList() {
  const container = document.getElementById('offers-list-container');
  if (!container) return;

  const now = new Date();

  container.innerHTML = appState.offers.map((off) => {
    const endDate = new Date(off.endTime);
    const isExpired = endDate < now;
    const isOfferActive = off.enabled && !isExpired;

    return `
      <div class="combos-banner" style="${!isOfferActive ? 'filter: grayscale(0.7); opacity: 0.8;' : ''}">
        <div>
          <span style="color: ${isOfferActive ? 'var(--primary-gold)' : 'var(--text-muted)'}; font-weight: 800; text-transform: uppercase;">
            ${isOfferActive ? '🔥 ACTIVE FESTIVE OFFER' : '⏰ OFFER ENDED'}
          </span>
          <h2 style="font-size: 2rem; color: #FFF; margin: 10px 0;">${off.title}</h2>
          <p style="color: var(--text-sub); margin-bottom: 12px;">
            Discount: <strong style="color: var(--primary-gold);">${off.discountPercent}% OFF</strong> on included categories.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">
            Valid From: ${new Date(off.startTime).toLocaleString()} to ${new Date(off.endTime).toLocaleString()}
          </div>
          ${isOfferActive ? `
            <div class="coupon-box">
              <span>Coupon Code:</span>
              <span class="coupon-code">${off.couponCode}</span>
            </div>
          ` : `
            <span class="status-badge" style="background: rgba(255,46,99,0.3); color: #FFF;">Offer Expired</span>
          `}
        </div>

        <div>
          <img src="assets/images/combo_box.jpg" alt="${off.title}" style="width: 100%; border-radius: 12px; border: 1px solid var(--glass-border);" />
        </div>
      </div>
    `;
  }).join('');
}

// --- SHOP DETAILS RENDERER ---
function renderShopDetailsCustomer() {
  const card = document.getElementById('customer-shop-details-card');
  if (!card) return;

  const s = appState.shopDetails;

  card.innerHTML = `
    <h3 style="color: var(--primary-gold); margin-bottom: 24px;">Store Location & Details</h3>
    
    <div class="contact-item">
      <div class="contact-icon">🏬</div>
      <div>
        <strong>${s.name}</strong>
        <p style="color: var(--text-sub); font-size: 0.9rem;">${s.address}</p>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">📞</div>
      <div>
        <strong>Phone / Helpline</strong>
        <p style="color: var(--text-sub); font-size: 0.9rem;">${s.phone}</p>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">✉️</div>
      <div>
        <strong>Email Support</strong>
        <p style="color: var(--text-sub); font-size: 0.9rem;">${s.email}</p>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon">⏰</div>
      <div>
        <strong>Opening Hours</strong>
        <p style="color: var(--text-sub); font-size: 0.9rem;">${s.hours}</p>
      </div>
    </div>

    <a href="${s.mapsUrl}" target="_blank" class="btn-secondary" style="margin-top: 10px; width: 100%; justify-content: center;">
      🗺️ Open Location in Google Maps
    </a>
  `;
}

// --- QUICK VIEW MODAL ---
function openQuickView(productId) {
  const p = appState.products.find((item) => item.id === productId);
  if (!p) return;

  const modalBody = document.getElementById('quickview-modal-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center;">
      <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border);">
        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 260px; object-fit: cover;" />
      </div>
      <div>
        <span style="color: var(--primary-gold); font-size: 0.8rem; text-transform: uppercase; font-weight: 700;">${p.category}</span>
        <h3 style="font-size: 1.4rem; color: #FFF; margin: 6px 0 10px;">${p.name}</h3>
        <p style="color: var(--text-sub); font-size: 0.9rem; margin-bottom: 16px;">${p.description || 'Festive quality fireworks from Sivakasi.'}</p>
        <div style="display: flex; gap: 12px; align-items: baseline; margin-bottom: 20px;">
          <span style="font-size: 1.6rem; font-weight: 800; color: var(--primary-gold);">₹${p.price}</span>
          <span style="text-decoration: line-through; color: var(--text-muted);">₹${p.oldPrice || p.price * 2}</span>
        </div>
        <button class="btn-primary" style="width: 100%; justify-content: center;" ${p.inStock === false ? 'disabled' : ''} onclick="addToCart('${p.id}'); closeQuickView();">
          🛒 Add to Cart Now
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickview-modal').classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickview-modal').classList.remove('active');
}

// --- CART STATE MANAGEMENT ---
function addToCart(productId) {
  playSoundFX('sparkle');
  const existing = appState.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = appState.products.find((item) => item.id === productId);
    if (product) {
      appState.cart.push({ ...product, qty: 1 });
    }
  }
  saveStorageData('gowtham_cart', appState.cart);
  updateCartUI();
  showToast('🎇 Added to Cart successfully!');
}

function updateCartQty(productId, delta) {
  const item = appState.cart.find((i) => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      appState.cart = appState.cart.filter((i) => i.id !== productId);
    }
  }
  saveStorageData('gowtham_cart', appState.cart);
  updateCartUI();
}

function updateCartUI() {
  const totalCount = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge-count');
  if (badge) badge.innerText = totalCount;

  const drawerBody = document.getElementById('cart-drawer-body');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountEl = document.getElementById('cart-discount-val');
  const grandTotalEl = document.getElementById('cart-total-val');

  const subtotal = appState.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = Math.round(subtotal * appState.discountRate);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (discountEl) discountEl.innerText = `-₹${discountAmount}`;
  if (grandTotalEl) grandTotalEl.innerText = `₹${finalTotal}`;

  if (!drawerBody) return;

  if (appState.cart.length === 0) {
    drawerBody.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: var(--text-sub);">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">🛒</div>
        <h4>Your Cart is Empty</h4>
        <p style="font-size: 0.88rem; margin-top: 6px;">Add your favorite festive fireworks to continue.</p>
      </div>
    `;
    return;
  }

  drawerBody.innerHTML = appState.cart.map((item) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-details">
        <h5 class="cart-item-title">${item.name}</h5>
        <div class="cart-item-price">₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; color: #FFF;">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.toggle('active');
}

function applyCouponCode() {
  const codeInput = document.getElementById('promo-code-input');
  if (!codeInput) return;
  const code = codeInput.value.trim().toUpperCase();

  const matchedOffer = appState.offers.find((o) => o.couponCode === code && o.enabled);

  if (matchedOffer) {
    appState.discountRate = matchedOffer.discountPercent / 100;
    appState.appliedCoupon = code;
    showToast(`🎉 ${code} applied: ${matchedOffer.discountPercent}% Instant Discount!`);
  } else if (code === 'DIWALI50') {
    appState.discountRate = 0.5;
    appState.appliedCoupon = 'DIWALI50';
    showToast('🎉 DIWALI50 applied: 50% Instant Discount!');
  } else {
    showToast('❌ Invalid or Expired Promo Code.');
  }
  updateCartUI();
}

// --- CHECKOUT & DELIVERY FLOW ---
function proceedToCheckoutFlow() {
  if (appState.cart.length === 0) {
    showToast('⚠️ Your cart is empty! Add fireworks before checkout.');
    return;
  }
  toggleCartDrawer();
  switchView('checkout');
  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const itemsContainer = document.getElementById('checkout-items-summary');
  if (!itemsContainer) return;

  const subtotal = appState.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = Math.round(subtotal * appState.discountRate);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  itemsContainer.innerHTML = appState.cart.map((item) => `
    <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 8px; color: var(--text-sub);">
      <span>${item.name} × ${item.qty}</span>
      <span style="color: var(--primary-gold);">₹${item.price * item.qty}</span>
    </div>
  `).join('');

  document.getElementById('checkout-subtotal-val').innerText = `₹${subtotal}`;
  document.getElementById('checkout-discount-val').innerText = `-₹${discountAmount}`;
  document.getElementById('checkout-total-val').innerText = `₹${finalTotal}`;
}

// --- PAYMENT MODAL & SIMULATION ---
function openPaymentModal() {
  document.getElementById('payment-modal').classList.add('active');
  switchPaymentTab('upi');
}

function closePaymentModal() {
  document.getElementById('payment-modal').classList.remove('active');
}

function switchPaymentTab(tabName) {
  appState.currentPaymentTab = tabName;
  const tabs = document.querySelectorAll('.pay-tab-btn');
  tabs.forEach((t) => t.classList.remove('active'));
  
  const targetTab = document.querySelector(`.pay-tab-btn[data-tab="${tabName}"]`);
  if (targetTab) targetTab.classList.add('active');

  const contentArea = document.getElementById('payment-tab-content');
  if (!contentArea) return;

  const subtotal = appState.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = Math.round(subtotal * appState.discountRate);
  const payableAmount = Math.max(0, subtotal - discountAmount);

  if (tabName === 'upi') {
    contentArea.innerHTML = `
      <div class="upi-qr-box">
        <h4 style="color: var(--primary-gold); margin-bottom: 12px;">Scan UPI QR Code to Pay</h4>
        <div class="qr-code-img">
          <svg width="140" height="140" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#FFF"/>
            <path d="M10,10 h30 v30 h-30 z M15,15 h20 v20 h-20 z M22,22 h6 v6 h-6 z" fill="#000"/>
            <path d="M60,10 h30 v30 h-30 z M65,15 h20 v20 h-20 z M72,22 h6 v6 h-6 z" fill="#000"/>
            <path d="M10,60 h30 v30 h-30 z M15,65 h20 v20 h-20 z M22,72 h6 v6 h-6 z" fill="#000"/>
            <rect x="45" y="45" width="10" height="10" fill="#000"/>
            <rect x="60" y="60" width="15" height="15" fill="#000"/>
            <rect x="75" y="75" width="15" height="15" fill="#000"/>
          </svg>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-sub);">UPI ID: <strong style="color: var(--primary-gold);">gowthamcrackers@upi</strong></p>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Supports GPay, PhonePe, Paytm & BHIM</p>
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="simulatePaymentSuccess('UPI Instant Transfer')">
        ✓ Confirm ₹${payableAmount} Payment
      </button>
    `;
  } else if (tabName === 'card') {
    contentArea.innerHTML = `
      <div class="credit-card-preview">
        <div class="card-chip"></div>
        <div class="card-num-display" id="card-num-view">•••• •••• •••• 4242</div>
        <div class="card-details-row">
          <div>
            <span style="font-size: 0.65rem; color: #CBD5E1;">Card Holder</span>
            <div id="card-holder-view" style="font-weight: 700;">GOWTHAM KUMAR</div>
          </div>
          <div>
            <span style="font-size: 0.65rem; color: #CBD5E1;">Expires</span>
            <div id="card-exp-view" style="font-weight: 700;">12/28</div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Card Number</label>
        <input type="text" class="form-input" placeholder="4532 1234 5678 4242" maxlength="19" oninput="document.getElementById('card-num-view').innerText = this.value || '•••• •••• •••• 4242'" />
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="form-group">
          <label class="form-label">Expiry (MM/YY)</label>
          <input type="text" class="form-input" placeholder="12/28" maxlength="5" oninput="document.getElementById('card-exp-view').innerText = this.value || '12/28'" />
        </div>
        <div class="form-group">
          <label class="form-label">CVV Code</label>
          <input type="password" class="form-input" placeholder="•••" maxlength="3" />
        </div>
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="simulatePaymentSuccess('Credit/Debit Card')">
        🔒 Pay ₹${payableAmount} Securely
      </button>
    `;
  } else if (tabName === 'netbanking') {
    contentArea.innerHTML = `
      <div style="background: rgba(255,215,0,0.06); border: 1px solid var(--glass-border); padding: 14px; border-radius: 8px; margin-bottom: 16px; font-size: 0.82rem; color: var(--primary-gold);">
        ℹ️ Net Banking Simulation Mode: No real passwords or sensitive credentials are stored or requested.
      </div>
      <div class="form-group">
        <label class="form-label">Select Your Bank</label>
        <div class="bank-grid">
          <div class="bank-card active" onclick="selectBank(this)">SBI</div>
          <div class="bank-card" onclick="selectBank(this)">HDFC Bank</div>
          <div class="bank-card" onclick="selectBank(this)">ICICI Bank</div>
          <div class="bank-card" onclick="selectBank(this)">Axis Bank</div>
          <div class="bank-card" onclick="selectBank(this)">Kotak Bank</div>
          <div class="bank-card" onclick="selectBank(this)">PNB</div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Customer User ID (Simulation Only)</label>
        <input type="text" class="form-input" placeholder="Enter bank Customer ID / User ID" value="USER_GOWTHAM_DEMO" />
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center; margin-top: 14px;" onclick="simulatePaymentSuccess('NetBanking Direct')">
        ⚡ Complete NetBanking Transfer (₹${payableAmount})
      </button>
    `;
  } else if (tabName === 'cod') {
    contentArea.innerHTML = `
      <div style="background: rgba(255,215,0,0.06); border: 1px solid var(--glass-border); padding: 18px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
        <h4 style="color: var(--primary-gold); margin-bottom: 8px;">Cash on Delivery (COD)</h4>
        <p style="font-size: 0.88rem; color: var(--text-sub);">Pay in cash directly to our safe delivery courier upon order arrival.</p>
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="simulatePaymentSuccess('Cash on Delivery')">
        📦 Confirm Order via COD (₹${payableAmount})
      </button>
    `;
  }
}

function selectBank(el) {
  document.querySelectorAll('.bank-card').forEach((b) => b.classList.remove('active'));
  el.classList.add('active');
}

// --- ORDER CONFIRMATION & CREATION ---
function simulatePaymentSuccess(methodName) {
  playSoundFX('chime');
  closePaymentModal();

  const orderId = 'GOW-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = appState.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = Math.round(subtotal * appState.discountRate);
  const finalTotal = Math.max(0, subtotal - discountAmount);
  const now = new Date();
  const estDelivery = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  const newOrder = {
    orderId: orderId,
    orderDate: now.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    items: [...appState.cart],
    subtotal: subtotal,
    discountAmount: discountAmount,
    deliveryFee: 0,
    totalAmount: finalTotal,
    paymentMethod: methodName,
    deliveryDetails: appState.deliveryDetails || {
      name: 'Valued Customer',
      phone: '9876543210',
      address: 'Door 42, Main Road',
      area: 'Temple Area',
      city: 'Sivakasi',
      state: 'Tamil Nadu',
      pincode: '626123'
    },
    status: 'Order Placed',
    estimatedDelivery: estDelivery
  };

  appState.orders.unshift(newOrder);
  saveStorageData('gowtham_orders', appState.orders);

  // Render Printable Invoice Modal
  const invoiceModal = document.getElementById('invoice-modal');
  const invoiceBody = document.getElementById('invoice-modal-content');

  if (invoiceModal && invoiceBody) {
    invoiceBody.innerHTML = `
      <div class="invoice-box">
        <div class="invoice-header">
          <div>
            <h2 class="invoice-title">GOWTHAM CRACKERS</h2>
            <p style="font-size: 0.82rem; color: #666;">Sivakasi Factory Direct Invoice</p>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 800; font-size: 1.1rem; color: #111;">INVOICE</div>
            <div style="font-size: 0.85rem; color: #555;">Order ID: <strong>${newOrder.orderId}</strong></div>
            <div style="font-size: 0.85rem; color: #555;">Date: ${newOrder.orderDate}</div>
          </div>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 0.88rem; border-bottom: 1px solid #eee; padding-bottom: 14px;">
          <div>
            <strong>Deliver To:</strong><br />
            ${newOrder.deliveryDetails.name} (${newOrder.deliveryDetails.phone})<br />
            ${newOrder.deliveryDetails.address}, ${newOrder.deliveryDetails.area}<br />
            ${newOrder.deliveryDetails.city}, ${newOrder.deliveryDetails.state} - ${newOrder.deliveryDetails.pincode}
          </div>
          <div style="text-align: right;">
            <strong>Payment:</strong> ${newOrder.paymentMethod}<br />
            <strong>Status:</strong> <span style="color: green; font-weight: 800;">${newOrder.status}</span><br />
            <strong>Est. Delivery:</strong> ${newOrder.estimatedDelivery}
          </div>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${newOrder.items.map((item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>₹${item.price}</td>
                <td>₹${item.price * item.qty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="text-align: right; margin-top: 20px; font-size: 0.95rem;">
          <div>Subtotal: ₹${newOrder.subtotal}</div>
          <div>Discount Savings: -₹${newOrder.discountAmount}</div>
          <div>Delivery Charges: FREE</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #900C3F; margin-top: 8px;">Grand Total: ₹${newOrder.totalAmount}</div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <button class="btn-primary" onclick="closeInvoiceModal(); trackOrderFromInvoice('${newOrder.orderId}');">
            🚚 Track Order Delivery Status
          </button>
        </div>
      </div>
    `;

    invoiceModal.classList.add('active');
  }

  // Clear Cart
  appState.cart = [];
  saveStorageData('gowtham_cart', appState.cart);
  updateCartUI();
}

function closeInvoiceModal() {
  document.getElementById('invoice-modal').classList.remove('active');
}

function trackOrderFromInvoice(orderId) {
  switchView('tracking');
  document.getElementById('tracking-search-input').value = orderId;
  renderOrderTracking(orderId);
}

// --- DELIVERY TRACKING LOGIC ---
const ORDER_STAGES = [
  'Order Placed',
  'Order Confirmed',
  'Processing',
  'Packed',
  'Shipped',
  'Out for Delivery',
  'Delivered'
];

function trackOrderSubmit() {
  const query = document.getElementById('tracking-search-input').value.trim();
  if (!query) {
    showToast('⚠️ Please enter an Order ID.');
    return;
  }
  renderOrderTracking(query);
}

function renderOrderTracking(orderId) {
  const container = document.getElementById('tracking-results-card');
  if (!container) return;

  const order = appState.orders.find((o) => o.orderId.toLowerCase() === orderId.toLowerCase());

  container.style.display = 'block';

  if (!order) {
    container.innerHTML = `
      <div class="story-card" style="text-align: center; padding: 40px;">
        <h3>❌ Order Not Found</h3>
        <p style="color: var(--text-sub);">No active order matches ID: <strong>${orderId}</strong></p>
      </div>
    `;
    return;
  }

  // Find stage index
  const currentStageIndex = ORDER_STAGES.indexOf(order.status) !== -1 ? ORDER_STAGES.indexOf(order.status) : 0;
  const progressPercent = (currentStageIndex / (ORDER_STAGES.length - 1)) * 100;

  container.innerHTML = `
    <div class="story-card">
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--glass-border); padding-bottom: 14px; margin-bottom: 20px;">
        <div>
          <h3 style="color: var(--primary-gold);">Order ID: ${order.orderId}</h3>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Placed on: ${order.orderDate}</span>
        </div>
        <div style="text-align: right;">
          <span class="status-badge ${order.status.toLowerCase().replace(/ /g, '_')}">${order.status}</span>
          <div style="font-size: 0.85rem; color: var(--text-sub); margin-top: 4px;">Est Delivery: ${order.estimatedDelivery}</div>
        </div>
      </div>

      <!-- Timeline Progress Indicator -->
      <div class="tracking-timeline">
        <div class="timeline-progress-bar" style="width: ${progressPercent}%;"></div>
        ${ORDER_STAGES.map((stage, idx) => {
          let stateClass = '';
          if (idx < currentStageIndex) stateClass = 'completed';
          else if (idx === currentStageIndex) stateClass = 'active';
          
          return `
            <div class="timeline-step ${stateClass}">
              <div class="step-node">${idx < currentStageIndex ? '✓' : idx + 1}</div>
              <div class="step-label">${stage}</div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 0.9rem; border-top: 1px solid var(--glass-border); padding-top: 20px;">
        <div>
          <strong style="color: var(--primary-gold);">Delivery Address:</strong><br />
          ${order.deliveryDetails.name} (${order.deliveryDetails.phone})<br />
          ${order.deliveryDetails.address}, ${order.deliveryDetails.area}<br />
          ${order.deliveryDetails.city}, ${order.deliveryDetails.state} - ${order.deliveryDetails.pincode}
        </div>
        <div>
          <strong style="color: var(--primary-gold);">Order Items (${order.items.length}):</strong>
          <ul style="list-style: none; margin-top: 6px;">
            ${order.items.map((i) => `<li>• ${i.name} × ${i.qty} (₹${i.price * i.qty})</li>`).join('')}
          </ul>
          <div style="margin-top: 10px; font-weight: 800; color: #FFF;">Total Amount: ₹${order.totalAmount} (${order.paymentMethod})</div>
        </div>
      </div>
    </div>
  `;
}

// --- MY ORDERS VIEW ---
function renderMyOrders() {
  const container = document.getElementById('my-orders-list-container');
  if (!container) return;

  if (appState.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-sub);">
        <div style="font-size: 3rem; margin-bottom: 12px;">📦</div>
        <h3>No Previous Orders Found</h3>
        <p>Explore our fireworks catalog and place your first order!</p>
        <button class="btn-primary" style="margin-top: 16px;" onclick="switchView('products')">Explore Products</button>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.orders.map((o) => `
    <div class="story-card" style="margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--glass-border); padding-bottom: 12px; margin-bottom: 14px;">
        <div>
          <strong style="color: var(--primary-gold); font-size: 1.1rem;">${o.orderId}</strong>
          <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 10px;">${o.orderDate}</span>
        </div>
        <div>
          <span class="status-badge ${o.status.toLowerCase().replace(/ /g, '_')}">${o.status}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <div style="font-size: 0.9rem; color: var(--text-sub);">
            ${o.items.map((i) => `${i.name} (x${i.qty})`).join(', ')}
          </div>
          <div style="font-size: 1.1rem; font-weight: 800; color: #FFF; margin-top: 6px;">
            Total: ₹${o.totalAmount} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">(${o.paymentMethod})</span>
          </div>
        </div>

        <button class="btn-secondary btn-sm" onclick="trackOrderFromInvoice('${o.orderId}')">
          🚚 Track Order
        </button>
      </div>
    </div>
  `).join('');
}

// --- ADMIN PORTAL & CRUD MANAGEMENT ---
function openAdminPortal() {
  if (appState.isAdminLoggedIn) {
    switchView('admin');
    renderAdminProductsTable();
    renderAdminOffersTable();
    renderAdminOrdersTable();
    populateAdminShopForm();
  } else {
    document.getElementById('admin-login-modal').classList.add('active');
  }
}

function closeAdminLoginModal() {
  document.getElementById('admin-login-modal').classList.remove('active');
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('admin-user-input').value.trim();
  const p = document.getElementById('admin-pass-input').value.trim();

  if (u === 'admin' && p === 'admin123') {
    appState.isAdminLoggedIn = true;
    saveStorageData('gowtham_admin_logged_in', true);
    closeAdminLoginModal();
    showToast('🔓 Admin Authenticated Successfully!');
    openAdminPortal();
  } else {
    showToast('❌ Invalid Admin Credentials.');
  }
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach((c) => c.style.display = 'none');

  const targetBtn = document.querySelector(`.admin-tab-btn[onclick="switchAdminTab('${tabName}')"]`);
  if (targetBtn) targetBtn.classList.add('active');

  const targetContent = document.getElementById(`admin-tab-${tabName}`);
  if (targetContent) targetContent.style.display = 'block';

  if (tabName === 'products') renderAdminProductsTable();
  if (tabName === 'offers') renderAdminOffersTable();
  if (tabName === 'orders') renderAdminOrdersTable();
  if (tabName === 'shop') populateAdminShopForm();
}

// Admin Products CRUD
function renderAdminProductsTable() {
  const tbody = document.getElementById('admin-products-table-body');
  if (!tbody) return;

  tbody.innerHTML = appState.products.map((p) => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.image}" alt="${p.name}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;" />
          <strong>${p.name}</strong>
        </div>
      </td>
      <td>${p.category}</td>
      <td>₹${p.price}</td>
      <td>₹${p.oldPrice || p.price * 2}</td>
      <td>
        <span class="status-badge ${p.inStock === false ? 'placed' : 'delivered'}">
          ${p.inStock === false ? 'Out of Stock' : 'In Stock'}
        </span>
      </td>
      <td>
        <button class="btn-secondary btn-sm" onclick="openEditProductModal('${p.id}')">Edit</button>
        <button class="btn-danger" onclick="deleteProductAdmin('${p.id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function openAddProductModal() {
  document.getElementById('admin-product-form').reset();
  document.getElementById('prod-edit-id').value = '';
  document.getElementById('product-modal-title').innerText = 'Add New Cracker Product';
  document.getElementById('product-form-modal').classList.add('active');
}

function openEditProductModal(id) {
  const p = appState.products.find((item) => item.id === id);
  if (!p) return;

  document.getElementById('prod-edit-id').value = p.id;
  document.getElementById('prod-name').value = p.name;
  document.getElementById('prod-category').value = p.category;
  document.getElementById('prod-in-stock').value = String(p.inStock !== false);
  document.getElementById('prod-price').value = p.price;
  document.getElementById('prod-old-price').value = p.oldPrice || p.price * 2;
  document.getElementById('prod-image').value = p.image;
  document.getElementById('prod-description').value = p.description || '';

  document.getElementById('product-modal-title').innerText = 'Edit Cracker Product';
  document.getElementById('product-form-modal').classList.add('active');
}

function closeProductFormModal() {
  document.getElementById('product-form-modal').classList.remove('active');
}

function saveProductAdmin(e) {
  e.preventDefault();
  const id = document.getElementById('prod-edit-id').value;
  const name = document.getElementById('prod-name').value.trim();
  const category = document.getElementById('prod-category').value;
  const inStock = document.getElementById('prod-in-stock').value === 'true';
  const price = Number(document.getElementById('prod-price').value);
  const oldPrice = Number(document.getElementById('prod-old-price').value);
  const image = document.getElementById('prod-image').value.trim();
  const description = document.getElementById('prod-description').value.trim();

  if (id) {
    // Edit
    const index = appState.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      appState.products[index] = {
        ...appState.products[index],
        name, category, inStock, price, oldPrice, image, description
      };
    }
  } else {
    // Add
    const newProd = {
      id: 'p' + Date.now(),
      name, category, inStock, price, oldPrice, image, description,
      discount: Math.round(((oldPrice - price) / oldPrice) * 100) || 50,
      rating: 5.0,
      reviews: 1,
      isEco: true,
      isBestseller: false
    };
    appState.products.unshift(newProd);
  }

  saveStorageData('gowtham_products', appState.products);
  closeProductFormModal();
  renderAdminProductsTable();
  renderProducts();
  showToast('💾 Product Saved Successfully!');
}

function deleteProductAdmin(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    appState.products = appState.products.filter((p) => p.id !== id);
    saveStorageData('gowtham_products', appState.products);
    renderAdminProductsTable();
    renderProducts();
    showToast('🗑️ Product Deleted.');
  }
}

// Admin Offers CRUD
function renderAdminOffersTable() {
  const tbody = document.getElementById('admin-offers-table-body');
  if (!tbody) return;

  const now = new Date();

  tbody.innerHTML = appState.offers.map((off) => {
    const isExpired = new Date(off.endTime) < now;
    return `
      <tr>
        <td><strong>${off.title}</strong></td>
        <td>${off.discountPercent}% OFF</td>
        <td><code>${off.couponCode}</code></td>
        <td>${new Date(off.startTime).toLocaleString()}</td>
        <td>${new Date(off.endTime).toLocaleString()}</td>
        <td>
          <span class="status-badge ${isExpired ? 'placed' : (off.enabled ? 'delivered' : 'shipped')}">
            ${isExpired ? 'Offer Ended' : (off.enabled ? 'Active' : 'Disabled')}
          </span>
        </td>
        <td>
          <button class="btn-secondary btn-sm" onclick="openEditOfferModal('${off.id}')">Edit</button>
          <button class="btn-danger" onclick="deleteOfferAdmin('${off.id}')">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddOfferModal() {
  document.getElementById('admin-offer-form').reset();
  document.getElementById('offer-edit-id').value = '';
  document.getElementById('offer-modal-title').innerText = 'Add Special Offer';
  document.getElementById('offer-form-modal').classList.add('active');
}

function openEditOfferModal(id) {
  const off = appState.offers.find((o) => o.id === id);
  if (!off) return;

  document.getElementById('offer-edit-id').value = off.id;
  document.getElementById('offer-title').value = off.title;
  document.getElementById('offer-discount').value = off.discountPercent;
  document.getElementById('offer-code').value = off.couponCode;
  document.getElementById('offer-start-time').value = off.startTime;
  document.getElementById('offer-end-time').value = off.endTime;
  document.getElementById('offer-status').value = String(off.enabled);

  document.getElementById('offer-modal-title').innerText = 'Edit Special Offer';
  document.getElementById('offer-form-modal').classList.add('active');
}

function closeOfferFormModal() {
  document.getElementById('offer-form-modal').classList.remove('active');
}

function saveOfferAdmin(e) {
  e.preventDefault();
  const id = document.getElementById('offer-edit-id').value;
  const title = document.getElementById('offer-title').value.trim();
  const discountPercent = Number(document.getElementById('offer-discount').value);
  const couponCode = document.getElementById('offer-code').value.trim().toUpperCase();
  const startTime = document.getElementById('offer-start-time').value;
  const endTime = document.getElementById('offer-end-time').value;
  const enabled = document.getElementById('offer-status').value === 'true';

  if (id) {
    const idx = appState.offers.findIndex((o) => o.id === id);
    if (idx !== -1) {
      appState.offers[idx] = { ...appState.offers[idx], title, discountPercent, couponCode, startTime, endTime, enabled };
    }
  } else {
    appState.offers.unshift({
      id: 'off' + Date.now(), title, discountPercent, couponCode, startTime, endTime, enabled
    });
  }

  saveStorageData('gowtham_offers', appState.offers);
  closeOfferFormModal();
  renderAdminOffersTable();
  renderOffersList();
  showToast('💾 Offer Saved Successfully!');
}

function deleteOfferAdmin(id) {
  if (confirm('Delete this festive offer?')) {
    appState.offers = appState.offers.filter((o) => o.id !== id);
    saveStorageData('gowtham_offers', appState.offers);
    renderAdminOffersTable();
    renderOffersList();
    showToast('🗑️ Offer Deleted.');
  }
}

// Admin Shop Details
function populateAdminShopForm() {
  const s = appState.shopDetails;
  document.getElementById('admin-shop-name').value = s.name;
  document.getElementById('admin-shop-address').value = s.address;
  document.getElementById('admin-shop-phone').value = s.phone;
  document.getElementById('admin-shop-email').value = s.email;
  document.getElementById('admin-shop-hours').value = s.hours;
  document.getElementById('admin-shop-maps').value = s.mapsUrl;
}

function saveShopDetailsAdmin(e) {
  e.preventDefault();
  appState.shopDetails = {
    name: document.getElementById('admin-shop-name').value.trim(),
    address: document.getElementById('admin-shop-address').value.trim(),
    phone: document.getElementById('admin-shop-phone').value.trim(),
    email: document.getElementById('admin-shop-email').value.trim(),
    hours: document.getElementById('admin-shop-hours').value.trim(),
    mapsUrl: document.getElementById('admin-shop-maps').value.trim()
  };

  saveStorageData('gowtham_shop_details', appState.shopDetails);
  renderShopDetailsCustomer();
  showToast('🏬 Shop Details Updated Successfully!');
}

// Admin Orders & Status Dispatch
function renderAdminOrdersTable() {
  const tbody = document.getElementById('admin-orders-table-body');
  if (!tbody) return;

  if (appState.orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px;">No customer orders placed yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = appState.orders.map((o) => `
    <tr>
      <td>
        <strong>${o.orderId}</strong><br />
        <span style="font-size: 0.78rem; color: var(--text-muted);">${o.orderDate}</span>
      </td>
      <td>
        <strong>${o.deliveryDetails.name}</strong><br />
        <span>📞 ${o.deliveryDetails.phone}</span>
      </td>
      <td>
        ${o.deliveryDetails.address}, ${o.deliveryDetails.city} - ${o.deliveryDetails.pincode}
      </td>
      <td>
        <strong>₹${o.totalAmount}</strong> (${o.items.length} items)
      </td>
      <td>
        <span class="status-badge ${o.status.toLowerCase().replace(/ /g, '_')}">${o.status}</span>
      </td>
      <td>
        <select class="form-select" style="padding: 4px 8px; font-size: 0.8rem;" onchange="updateOrderStatusAdmin('${o.orderId}', this.value)">
          ${ORDER_STAGES.map((stage) => `
            <option value="${stage}" ${o.status === stage ? 'selected' : ''}>${stage}</option>
          `).join('')}
        </select>
      </td>
    </tr>
  `).join('');
}

function updateOrderStatusAdmin(orderId, newStatus) {
  const order = appState.orders.find((o) => o.orderId === orderId);
  if (order) {
    order.status = newStatus;
    saveStorageData('gowtham_orders', appState.orders);
    renderAdminOrdersTable();
    showToast(`🚚 Order ${orderId} Status Updated to: ${newStatus}`);
  }
}

// --- UTILITY TIMERS & EVENT LISTENERS ---
function initCountdownTimer() {
  setInterval(() => {
    const activeOffer = appState.offers.find((o) => o.enabled && new Date(o.endTime) > new Date());
    const targetTime = activeOffer ? new Date(activeOffer.endTime).getTime() : new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

    const diff = targetTime - new Date().getTime();

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = document.getElementById('timer-days');
      const hEl = document.getElementById('timer-hours');
      const mEl = document.getElementById('timer-mins');
      const sEl = document.getElementById('timer-secs');

      if (dEl) dEl.innerText = String(days).padStart(2, '0');
      if (hEl) hEl.innerText = String(hours).padStart(2, '0');
      if (mEl) mEl.innerText = String(mins).padStart(2, '0');
      if (sEl) sEl.innerText = String(secs).padStart(2, '0');
    }
  }, 1000);
}

function setupEventListeners() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view) switchView(view);
    });
  });

  // Standalone Search input listener
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Price slider listener
  const priceSlider = document.getElementById('price-range-slider');
  const priceVal = document.getElementById('max-price-val');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      appState.maxPrice = Number(e.target.value);
      if (priceVal) priceVal.innerText = `₹${e.target.value}`;
      renderProducts();
    });
  }

  // Eco filter listener
  const ecoCheck = document.getElementById('eco-filter-check');
  if (ecoCheck) {
    ecoCheck.addEventListener('change', (e) => {
      appState.ecoOnly = e.target.checked;
      renderProducts();
    });
  }

  // Sort select listener
  const sortSelect = document.getElementById('sort-products-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      appState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Delivery Checkout Form Handler
  const checkoutForm = document.getElementById('checkout-delivery-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      appState.deliveryDetails = {
        name: document.getElementById('del-name').value.trim(),
        phone: document.getElementById('del-phone').value.trim(),
        address: document.getElementById('del-address').value.trim(),
        area: document.getElementById('del-area').value.trim(),
        city: document.getElementById('del-city').value.trim(),
        state: document.getElementById('del-state').value.trim(),
        pincode: document.getElementById('del-pincode').value.trim()
      };
      openPaymentModal();
    });
  }

  // Contact form submission listener
  const contactForm = document.getElementById('gowtham-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playSoundFX('chime');
      showToast('✉️ Inquiry submitted! Our representative will call you shortly.');
      contactForm.reset();
    });
  }
}

function selectCategory(catName) {
  appState.currentCategory = catName;
  renderProducts();
  switchView('products');
}

function toggleAudio() {
  appState.soundEnabled = !appState.soundEnabled;
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (audioBtn) {
    audioBtn.innerText = appState.soundEnabled ? '🔊 Sound On' : '🔇 Muted';
  }
  showToast(appState.soundEnabled ? '🔊 Sound FX Enabled' : '🔇 Sound FX Muted');
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
