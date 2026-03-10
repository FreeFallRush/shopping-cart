interface RatingProps {
  rate: number;
  count: number;
}

function Rating({ rate, count }: RatingProps) {
  const fullStars = Math.floor(rate);
  const emptyStars = 5 - fullStars;

  return (
    <div>
      {"★".repeat(fullStars)}
      {"☆".repeat(emptyStars)}
      <span> ({count})</span>
    </div>
  );
}

export default Rating;
