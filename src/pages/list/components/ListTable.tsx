export const ListTable = ({ header, data, pagination }) => {
  const dt = data;
  console.log(pagination, header, dt);
  return (
    <div className="component">
      <code>ListTable</code>
      <table>
        <thead>
          <tr>
            {header.map((h, index) => {
              return <th key={index}>{h.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dt.map((d, index) => {
            return (
              <tr key={index}>
                {header.map((h, index) => {
                  return <td key={index}>{h.render(d)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={header.length}>
              {JSON.stringify(pagination)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
