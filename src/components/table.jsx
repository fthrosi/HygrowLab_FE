import React, { useState, useMemo } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

const Table = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    const sorted = [...data].sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (typeof valueA === 'string') {
        return sortConfig.direction === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      return sortConfig.direction === 'asc' ? valueA - valueB : valueB - valueA;
    });

    return sorted;
  }, [data, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prevState) => {
      const newDirection =
        prevState.key === key && prevState.direction === 'asc' ? 'desc' : 'asc';
      return { key, direction: newDirection };
    });
  };

  return (
    <table class="table-auto nunito w-full text-start mt-3 ">
      <thead className="border-b-2 border-gray-400">
        <tr>
          {columns.map((col) => (
            <th
              className="text-start py-2  px-4 "
              key={col.key}
              onClick={() => handleSort(col.key)}
              style={{ cursor: 'pointer' }}>
              <div
                style={{
                  display: 'flex',

                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {col.label}
                <div
                  style={{
                    position: 'relative',

                    width: '15px',
                    height: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <AiOutlineCaretUp
                    className=" absolute top-0"
                    color={
                      sortConfig.key === col.key &&
                      sortConfig.direction === 'asc'
                        ? 'black'
                        : 'gray'
                    }
                  />
                  <AiOutlineCaretDown
                    className=" absolute bottom-0"
                    color={
                      sortConfig.key === col.key &&
                      sortConfig.direction === 'desc'
                        ? 'black'
                        : 'gray'
                    }
                  />
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr className="border-b-2 border-gray-300" key={index}>
            {columns.map((col) => (
              <td className="py-2 px-4" key={col.key}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
