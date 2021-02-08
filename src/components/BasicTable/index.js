import React from 'react'
import { useStyles } from './styles';

export default function SimpleTable() {
  const classes = useStyles();

  return (
        <table className={classes.root}>
            <thead>
                <tr>
                    <th>basicHeaer</th>
                    <th>basicHeaer</th>
                    <th>basicHeaer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>basicBody</td>
                    <td>basicBody</td>
                    <td>basicBody</td>
                </tr>
            </tbody>
        </table>
    )
}