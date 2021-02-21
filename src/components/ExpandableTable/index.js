import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import ModalContainer from '../common/ModalContainer';
import SimpleTable from '../SimpleTable';
import { rows } from './dummyData';
import { useStyles } from './styles';

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
  const [isExpanded, setIsExpanded] = useState(false);
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

export default function ExpandableTable() {
  const classes = useStyles();
  const data = rows.filter((ele) => ele.parentId === 0)
  const externalLinkImg = `${process.env.PUBLIC_URL}/icons/externalLink.svg`;
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Dessert (100g serving)<img onClick={() => setIsModalVisible(true)} src={externalLinkImg} alt="Link" /></TableCell>
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
      <ModalContainer
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        width={500}
      >
        <SimpleTable />
      </ModalContainer>
    </>
  );
}
