export default function Table({ headers, items = [] }) {
  const headerElements = headers.map((header, index) => (
    <th className="table-header-item" key={index}>{header.title}</th>
  ));

  const itemElements = items.map((item, itemIndex) => {
    const tableCells = headers.map((header, headerIndex) => (
      <td className="table-item" key={headerIndex}>
        {item[header.key]}
      </td>
    ));

    return <tr className="table-item-row" key={itemIndex}>{tableCells}</tr>;
  });

  return (
    <table className="table">
      <thead className="table-header">
        <tr>{headerElements}</tr>
      </thead>
      <tbody>{itemElements}</tbody>
    </table>
  );
}
