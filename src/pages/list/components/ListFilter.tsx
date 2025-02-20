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
          <span>description:</span> <input type="" name="description" />
          <span>createdAtStart:</span> <input type="date" name="createdAtStart" />
          <span>createdAtEnd:</span> <input type="date" name="createdAtEnd" />
        </div>
        <div>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};
