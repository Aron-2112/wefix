// ============================================================
// data.js — ALL the fake data for your prototype lives here.
//
// There is no database. Everything below is made up, and that is
// on purpose: never put real people's names, emails, phone numbers
// or addresses in this file.
//
// To change what appears on the Explore page, edit LISTINGS.
// Each item is one card. Keep the same fields (id, name, category,
// description) or ask Copilot to add new ones everywhere they're needed.
// ============================================================

const STARTUP = {
  name: "weFix",
  tagline: "Borrow the tool. Finish the project.",
  pitch: "Find trusted tools nearby, reserve them for the exact dates you need, and keep useful gear in use instead of gathering dust."
};

const LISTINGS = [
  { id: 1, name: "DeWalt cordless drill", category: "Power tools", description: "20V drill with two batteries, charger, and a full bit set.", price: 12, owner: "Maya", distance: "1.2 km", rating: 4.9 },
  { id: 2, name: "Portable tile saw", category: "Renovation", description: "Compact wet saw for small tile and stone jobs.", price: 18, owner: "Jon", distance: "2.4 km", rating: 4.8 },
  { id: 3, name: "Pressure washer", category: "Outdoor", description: "Electric washer with three nozzles and 25 ft hose.", price: 15, owner: "Alex", distance: "0.8 km", rating: 4.9 },
  { id: 4, name: "Orbital sander", category: "Woodworking", description: "Five-inch sander with dust bag and assorted sandpaper.", price: 8, owner: "Sam", distance: "3.1 km", rating: 4.7 },
  { id: 5, name: "Extension ladder", category: "Ladders", description: "Lightweight aluminum ladder extending to 20 feet.", price: 14, owner: "Taylor", distance: "1.7 km", rating: 5.0 },
  { id: 6, name: "Rototiller", category: "Garden", description: "Mid-size electric tiller for garden beds and small plots.", price: 22, owner: "Riley", distance: "4.0 km", rating: 4.8 },
  { id: 7, name: "Paint sprayer", category: "Painting", description: "Easy-clean HVLP sprayer, ideal for furniture and fences.", price: 11, owner: "Casey", distance: "2.9 km", rating: 4.6 },
  { id: 8, name: "Shop vacuum", category: "Cleaning", description: "Six-gallon wet/dry vacuum with crevice and floor heads.", price: 9, owner: "Morgan", distance: "1.5 km", rating: 4.9 }
];
