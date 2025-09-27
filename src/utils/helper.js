export function formatViews(views) {
  if (views < 1000) return views.toString();
  if (views < 1_000_000) return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  if (views < 1_000_000_000) return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm';
  return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'b';
}

export function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now - past;

  const seconds = Math.ceil(diffMs / 1000);
  const minutes = Math.ceil(seconds / 60);
  const hours = Math.ceil(minutes / 60);
  const days = Math.ceil(hours / 24);
  const weeks = Math.ceil(days / 7);
  const months = Math.ceil(days / 30); // approx
  const years = Math.ceil(days / 365); // approx

  if (seconds < 60) return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
  if (minutes < 60) return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hr${hours !== 1 ? "s" : ""} ago`;
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
  if (weeks < 5) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

