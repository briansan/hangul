import React from 'react';
import './App.css';
import { useTable } from 'react-table'
import KoreanGenerator from './components/koreanGen';


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Consonants',
        columns: [
          {
            Header: 'Korean',
            accessor: 'conKoreanSym',
          },
          {
            Header: 'English',
            accessor: 'conEnglishPro',
          },
        ],
      },
      {
        Header: 'Vowels',
        columns: [
          {
            Header: 'Korean',
            accessor: 'vowKoreanSym',
          },
          {
            Header: 'English',
            accessor: 'vowEnglishPro',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(
		() => [
			{ conKoreanSym: "ㄱ", conEnglishPro: "g" ,
			  vowKoreanSym: "ㅏ", vowEnglishPro: "ah" },
			{ conKoreanSym: "ㄴ", conEnglishPro: "n"  ,
			  vowKoreanSym: "ㅑ", vowEnglishPro: "yah" },
			{ conKoreanSym: "ㄷ", conEnglishPro: "d"  ,
			  vowKoreanSym: "ㅓ", vowEnglishPro: "uh" },
			{ conKoreanSym: "ㄹ", conEnglishPro: "r"  ,
			  vowKoreanSym: "ㅕ", vowEnglishPro: "yuh" },
			{ conKoreanSym: "ㅁ", conEnglishPro: "m" ,
			  vowKoreanSym: "ㅗ", vowEnglishPro: "oh" },
			{ conKoreanSym: "ㅂ", conEnglishPro: "b" ,
			  vowKoreanSym: "ㅛ", vowEnglishPro: "yoh" },
			{ conKoreanSym: "ㅅ", conEnglishPro: "s" ,
			  vowKoreanSym: "ㅜ", vowEnglishPro: "oo" },
			{ conKoreanSym: "ㅇ", conEnglishPro: "?"  ,
			  vowKoreanSym: "ㅠ", vowEnglishPro: "yoo" },
			{ conKoreanSym: "ㅈ", conEnglishPro: "j" ,
			  vowKoreanSym: "ㅡ", vowEnglishPro: "uh" },
			{ conKoreanSym: "ㅊ", conEnglishPro: "ch" ,
			  vowKoreanSym: "ㅣ", vowEnglishPro: "e" },
			{ conKoreanSym: "ㅋ", conEnglishPro: "k" },
			{ conKoreanSym: "ㅌ", conEnglishPro: "t" },
			{ conKoreanSym: "ㅍ", conEnglishPro: "p" },
			{ conKoreanSym: "ㅎ", conEnglishPro: "h" },
		],
		[]
	)

  return (
		<div className="container">
			<h1>Learn Korean</h1>
			<Table columns={columns} data={data} />
			<br/>
			<KoreanGenerator />
		</div>
  )
}

export default App;
