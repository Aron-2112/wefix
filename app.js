// ============================================================
// app.js — what your site DOES.
// Plain JavaScript, no libraries, no installs.
// It uses STARTUP and LISTINGS from data.js (loaded first).
// ============================================================

(function () {
  "use strict";

  // ----------------------------------------------------------
  // 1. Saving things in the browser (localStorage).
  //    This only remembers things on THIS browser on THIS device.
  //    Your teammates and your customers will NOT see it.
  //    A real product would need a server and a database for that.
  // ----------------------------------------------------------
  const storage = {
    get: function (key, fallback) {
      try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
      } catch (error) {
        return fallback; // storage blocked or broken: just carry on
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // storage blocked (e.g. private window): ignore
      }
    }
  };

  let savedIds = storage.get("savedIds", []);
  let currentItem = null;
  let startDate = null;
  let endDate = null;
  let calendarDate = new Date();
  calendarDate.setDate(1);

  // ----------------------------------------------------------
  // 2. Put the startup's name and pitch on the page.
  // ----------------------------------------------------------
  document.title = STARTUP.name;
  document.getElementById("brand-name").textContent = STARTUP.name;
  document.getElementById("tagline").textContent = STARTUP.tagline;
  document.getElementById("pitch").textContent = STARTUP.pitch;

  // ----------------------------------------------------------
  // 3. Views: show one section at a time, based on the #link in the address bar.
  // ----------------------------------------------------------
  function showView() {
    const requested = (window.location.hash || "#home").slice(1);
    const views = document.querySelectorAll("[data-view]");
    const exists = Array.prototype.some.call(views, function (view) {
      return view.id === requested;
    });
    const current = exists ? requested : "home";

    views.forEach(function (view) {
      view.hidden = view.id !== current;
    });

    document.querySelectorAll("nav a").forEach(function (link) {
      if (link.getAttribute("href") === "#" + current) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", showView);

  // ----------------------------------------------------------
  // 4. Explore page: build one card per listing.
  //    We use textContent (not innerHTML) so text is always shown
  //    as text — a basic security habit.
  // ----------------------------------------------------------
  const grid = document.getElementById("listing-grid");
  const searchBox = document.getElementById("search-box");
  const emptyMessage = document.getElementById("empty-message");
  const savedCount = document.getElementById("saved-count");

  function makeCard(item) {
    const card = document.createElement("article");
    card.className = "card";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item.category;

    const title = document.createElement("h2");
    title.textContent = item.name;

    const text = document.createElement("p");
    text.textContent = item.description;

    const meta = document.createElement("div");
    meta.className = "listing-meta";
    const price = document.createElement("span");
    price.className = "listing-price";
    price.append(document.createTextNode("$" + item.price));
    const perDay = document.createElement("small");
    perDay.textContent = " / day";
    price.append(perDay);
    const details = document.createElement("span");
    details.textContent = "★ " + item.rating + " · " + item.distance;
    meta.append(price, details);

    const actions = document.createElement("div");
    actions.className = "listing-actions";

    const isSaved = savedIds.indexOf(item.id) !== -1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button secondary";
    button.textContent = isSaved ? "Saved ✓" : "Save";
    button.setAttribute("aria-pressed", isSaved ? "true" : "false");
    button.addEventListener("click", function () {
      toggleSaved(item.id);
    });

    const reserve = document.createElement("button");
    reserve.type = "button";
    reserve.className = "button";
    reserve.textContent = "Check dates";
    reserve.addEventListener("click", function () {
      openBooking(item);
    });
    actions.append(reserve, button);

    card.append(tag, title, text, meta, actions);
    return card;
  }

  function toggleSaved(id) {
    if (savedIds.indexOf(id) === -1) {
      savedIds.push(id);
    } else {
      savedIds = savedIds.filter(function (savedId) { return savedId !== id; });
    }
    storage.set("savedIds", savedIds);
    renderListings();
  }

  function renderListings() {
    const query = searchBox.value.trim().toLowerCase();
    const matches = LISTINGS.filter(function (item) {
      const text = (item.name + " " + item.category + " " + item.description).toLowerCase();
      return text.indexOf(query) !== -1;
    });

    grid.replaceChildren.apply(grid, matches.map(makeCard));
    emptyMessage.hidden = matches.length > 0;
    savedCount.textContent = savedIds.length === 0
      ? "Tap Save on anything you like."
      : "You've saved " + savedIds.length + " item(s) on this device.";
  }

  searchBox.addEventListener("input", renderListings);

  // ----------------------------------------------------------
  // 5. Calendar booking flow.
  // ----------------------------------------------------------
  const monthTitle = document.getElementById("month-title");
  const calendarGrid = document.getElementById("calendar-grid");
  const dateSummary = document.getElementById("date-summary");

  function sameDay(a, b) {
    return a && b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  }

  function atMidnight(date) {
    const copy = new Date(date);
    copy.setHours(0, 0, 0, 0);
    return copy;
  }

  function formatDate(date) {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  function renderCalendar() {
    monthTitle.textContent = calendarDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
    calendarGrid.replaceChildren();

    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const first = new Date(year, month, 1);
    const gridStart = new Date(year, month, 1 - first.getDay());
    const today = atMidnight(new Date());

    for (let i = 0; i < 42; i++) {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + i);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "calendar-day";
      button.textContent = date.getDate();
      button.setAttribute("aria-label", date.toLocaleDateString("en-US", {
        weekday: "long", month: "long", day: "numeric", year: "numeric"
      }));

      if (date.getMonth() !== month) button.classList.add("other-month");
      if (sameDay(date, today)) button.classList.add("today");
      if (startDate && sameDay(date, startDate)) button.classList.add("selected");
      if (endDate && sameDay(date, endDate)) button.classList.add("selected");
      if (startDate && endDate && date > startDate && date < endDate) {
        button.classList.add("in-range");
      }
      if (atMidnight(date) < today) button.disabled = true;

      button.addEventListener("click", function () {
        selectDate(atMidnight(date));
      });
      calendarGrid.append(button);
    }
  }

  function selectDate(date) {
    if (!startDate || (startDate && endDate)) {
      startDate = date;
      endDate = null;
    } else if (date < startDate) {
      endDate = startDate;
      startDate = date;
    } else {
      endDate = date;
    }
    renderCalendar();
    updateBookingSummary();
  }

  function openBooking(item) {
    currentItem = item;
    startDate = null;
    endDate = null;
    document.getElementById("booking-tool-name").textContent = item.name;
    window.location.hash = "calendar";
    renderCalendar();
    updateBookingSummary();
  }

  function bookingDayCount() {
    if (!startDate || !endDate) return 0;
    return Math.max(1, Math.round((endDate - startDate) / 86400000) + 1);
  }

  function updateBookingSummary() {
    const rental = currentItem ? currentItem.price * bookingDayCount() : 0;
    const fee = rental ? Math.round(rental * 0.08 * 100) / 100 : 0;
    const total = rental + fee;
    const request = document.getElementById("request-booking");

    document.getElementById("summary-dates").textContent =
      startDate && endDate ? formatDate(startDate) + " - " + formatDate(endDate) : "Not selected";
    document.getElementById("summary-rental").textContent = "$" + rental;
    document.getElementById("summary-fee").textContent = "$" + fee;
    document.getElementById("summary-total").textContent = "$" + total;
    request.disabled = !(currentItem && startDate && endDate);

    dateSummary.textContent =
      startDate && endDate ? formatDate(startDate) + " - " + formatDate(endDate) : "No dates selected";
  }

  document.getElementById("previous-month").addEventListener("click", function () {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar();
  });
  document.getElementById("next-month").addEventListener("click", function () {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar();
  });
  document.getElementById("request-booking").addEventListener("click", function () {
    document.getElementById("booking-message").textContent =
      "Request sent to " + currentItem.owner + ". This is a prototype; no real payment was taken.";
  });

  // ----------------------------------------------------------
  // 6. Signup dialog.
  // ----------------------------------------------------------
  const dialog = document.getElementById("signup-dialog");
  document.getElementById("open-signup").addEventListener("click", function () {
    dialog.showModal();
  });
  document.getElementById("hero-signup").addEventListener("click", function () {
    dialog.showModal();
  });
  document.getElementById("close-signup").addEventListener("click", function () {
    dialog.close();
  });
  document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signup-name").value.trim();
    dialog.close();
    document.getElementById("open-signup").textContent = name ? "Hi, " + name : "Joined";
  });

  // Start up.
  renderListings();
  renderCalendar();
  showView();
})();
