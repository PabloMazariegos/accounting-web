export default function Table({ headers, items = [] }) {
  const headerElements = headers.map((header, index) => (
    <th className="table-header-item" key={index}>
      {header.title}
    </th>
  ));

  const emptyResults = (
    <tr className="table-item-row">
      <td className="table-item text-center" colSpan={headers.length}>
        <span className="text-xs">Empty Results</span>
      </td>
    </tr>
  );

  const itemElements = items.map((item, itemIndex) => {
    const tableCells = headers.map((header, headerIndex) => (
      <td className="table-item" key={headerIndex}>
        {item[header.key]}
      </td>
    ));

    return (
      <tr className="table-item-row" key={itemIndex}>
        {tableCells}
      </tr>
    );
  });

  return (
    <table className="table">
      <thead className="table-header">
        <tr>{headerElements}</tr>
      </thead>
      <tbody>{items.length > 0 ? itemElements : emptyResults}</tbody>
    </table>
  );
}
