import React from 'react'
import { useStyles } from './styles';

export default function SimpleTable() {
  const classes = useStyles();

  return (
        <table className={classes.root}>
            <thead>
                <tr>
                    <th>testHeader</th>
                    <th>testHeader</th>
                    <th>testHeader</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>testBody</td>
                    <td>testBody</td>
                    <td>testBody</td>
                </tr>
            </tbody>
        </table>
    )
}