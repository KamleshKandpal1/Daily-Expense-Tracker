export const getTimeAgo = dateString => {
  const now = new Date();
  const saved = new Date(dateString);
  const diffInMs = now - saved;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
};
