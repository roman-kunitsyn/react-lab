export const ListTable = ({ header, data, pagination }) => {
  const head = header();
  const dt = data();
  console.log(pagination, head, dt);
  return (
    <div className="component">
      <code>ListTable</code>
      <table>
        <thead>
          <tr>
            {head.map((h, index) => {
              return <th key={index}>{h.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dt.map((d, index) => {
            return (
              <tr key={index}>
                {head.map((h, index) => {
                  return <td key={index}>{h.render(d)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};
