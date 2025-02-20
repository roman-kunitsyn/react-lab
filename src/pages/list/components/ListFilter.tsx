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
          <span>ids:</span> <input type="" name="ids" />
          <span>name:</span> <input type="" name="name" />
          <span>description:</span>{' '}
          <input type="" name="description" />
          <div>
            <span>createdAt:</span> <span>Start </span>{' '}
            <input type="date" name="createdAtStart" />
            <span>End</span> <input type="date" name="createdAtEnd" />
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};
