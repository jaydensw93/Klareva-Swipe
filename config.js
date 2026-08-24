// Klareva Creator Hub — Supabase connection.
//
// Paste your two values below, then run:  python3 deploy_hub.py
//
// Find them in Supabase: Project Settings -> API
//   url     = "Project URL"
//   anonKey = "anon public" key
//
// The anon key is MEANT to be public and sitting in this file is correct. It
// can only do what the Row Level Security policies allow, which is why those
// policies matter. The "service_role" key is the dangerous one. It bypasses
// every policy, so it belongs only in the scraper on the Mac. Never put it here.
window.KLAREVA_CFG = {
  url:     "https://khwankrrezpmcagzytaj.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtod2Fua3JyZXpwbWNhZ3p5dGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MzIwODYsImV4cCI6MjEwMjMwODA4Nn0.QYgotLylJmRbleQvNaB_69caTCWCARmLph3zJNEqbo4"
};
// Checkout link for the $39.99/mo membership (Whop/Stripe). Empty = button
// shows a "DM Jayden" note instead. Paste the live checkout URL here.
window.KLAREVA_CFG.payUrl = "https://buy.stripe.com/4gMbJ3dwfgtQ7p7023gA800";
