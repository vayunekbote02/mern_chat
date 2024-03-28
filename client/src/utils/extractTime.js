export function extractTime(dateString) {
  const date = new Date(dateString);

  // Get day name (abbreviated)
  const day = getDayName(date);

  // Get date in the format DD/MM
  const dayOfMonth = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Month is 0-indexed
  const formattedDate = `${dayOfMonth}/${month}`;

  // Get time in the format HH:MM
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const formattedTime = `${hours}:${minutes}`;

  return `${day} ${formattedDate} ${formattedTime}`;
}

// Helper function to get abbreviated day name (e.g., "Thu")
function getDayName(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
