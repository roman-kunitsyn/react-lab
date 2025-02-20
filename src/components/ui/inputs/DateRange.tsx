export const DateRange = ({
  label,
  propName,
  startDate,
  endDate,
  onChange,
}) => {
  return (
    <div>
      <span>{label}:</span>
      <span>Start </span>
      <input
        type="date"
        name={`${propName}Start`}
        value={new Date(startDate).toDateString()}
        onChange={(event) => {
          console.log(event);
          onChange(event.target.name, event.target.value);
        }}
      />
      <span>End</span>
      <input
        type="date"
        name={`${propName}End`}
        value={new Date(endDate).toDateString()}
        onChange={(event) => {
          console.log(event);
          onChange(event.target.name, event.target.value);
        }}
      />
    </div>
  );
};
