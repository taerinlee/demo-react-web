import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});

function createData(id, parentId, name, calories, fat, carbs, protein, detail) {
  return { id, parentId, name, calories, fat, carbs, protein, detail };
}

const rows = [
  createData(
    1,
    0,
    'Frozen yoghurt',
    159,
    6.0,
    24,
    4.0,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  ),
  createData(
    2,
    0,
    'Ice cream sandwich',
    237,
    9.0,
    37,
    4.3,
    'Maecenas rutrum urna vel lacus viverra, id ultrices dui rutrum'
  ),
  createData(
    3,
    0,
    'Eclair',
    262,
    16.0,
    24,
    6.0,
    'Morbi congue gravida nunc, eu cursus felis vulputate id'
  ),
  createData(
    4,
    0,
    'Cupcake',
    305,
    3.7,
    67,
    4.3,
    'Vestibulum efficitur, ipsum consectetur finibus maximus, ligula dolor vehicula ex, sed viverra nulla mauris id purus'
  ),
  createData(
    5,
    0,
    'Gingerbread',
    356,
    16.0,
    49,
    3.9,
    ' Suspendisse vehicula eu libero eget viverra'
  ),
  createData(
    6,
    3,
    'Gingerbread Sub',
    356,
    16.0,
    49,
    3.9,
    ' Suspendisse vehicula eu libero eget viverra'
  ),
  createData(
    7,
    3,
    'Gingerbread Sub2',
    356,
    16.0,
    49,
    3.9,
    ' Suspendisse vehicula eu libero eget viverra'
  )
];

const AddSubRow = (props) => {
    const addRows = []
    rows.map(element => {
        if(element.parentId === props.id) {
            addRows.push(element)
        }
    })

    
    return (
        <>
            {addRows.map(element => {
                return (
                    <TableRow key={element.id}>
                        <TableCell padding="checkbox" />
                        <TableCell colSpan="5">{element.name}</TableCell>
                    </TableRow>
                )
            })}
        </>
        
    )
}

const ExpandableTableRow = ({ children, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const upImg = `${process.env.PUBLIC_URL}/icons/up.svg`;
  const downImg = `${process.env.PUBLIC_URL}/icons/down.svg`;

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          {otherProps.index === 2 && <div onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <img src={upImg} alt="Up" /> : <img src={downImg} alt="Down" />}
          </div>}
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <AddSubRow id={otherProps.id} />
      )}
    </>
  );
};

export default function SimpleTable() {
  const classes = useStyles();
  const data = rows.filter(element => element.parentId === 0)

  return (
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <ExpandableTableRow
              key={row.id}
              id={row.id}
              index={index}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
  );
}
