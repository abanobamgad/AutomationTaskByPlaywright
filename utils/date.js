/**
 * Returns a Date object N months before today.
 * Example: today = 2 Oct 2026 -> getDateMonthsAgo(2) = 2 Aug 2026
 */
function getDateMonthsAgo(months) {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  return d;
}

/** Formats a Date as YYYY-MM-DD (useful for <input type="date">) */
function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

module.exports = { getDateMonthsAgo, toISODate };
