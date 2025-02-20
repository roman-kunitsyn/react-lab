export const ListFilter = ({
  filter,
  onFilterChange,
  onSubmitClicked,
  onResetClicked,
}) => {
  return (
    <div className="component">
      <code>ListFilter</code>
      <form>
        <div>
          <div>
            <span>createdAt:</span> <span>Start </span>{' '}
            <input type="date" name="createdAtStart" />
            <span>End</span> <input type="date" name="createdAtEnd" />
          </div>
          <span>ids:</span> <input type="" name="ids" />
          <span>name:</span> <input type="" name="name" />
          <span>description:</span>{' '}
          <input type="" name="description" />
        </div>
        <div>
          <input type="reset" value="Clear" />
          <input type="submit" value="Filter" />
        </div>
      </form>
    </div>
  );
};
