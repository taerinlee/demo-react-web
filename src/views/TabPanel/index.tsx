import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

import { useStyles } from './styles';
import SimpleTable from '../../components/SimpleTable/'
import BasicTable from '../../components/BasicTable/'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleClick = (newValue: number):void => {
    setValue(newValue);
  }

  const tabActive0 = clsx({ [classes.tabActive]: value === 0 });
  const tabActive1 = clsx({ [classes.tabActive]: value === 1 });
  const tabActive2 = clsx({ [classes.tabActive]: value === 2 });

  return (
    <div>
      <button type="button" className={clsx(classes.tab, tabActive0)} onClick={() => handleClick(0)} >Tab1</button>
      <button type="button" className={clsx(classes.tab, tabActive1)} onClick={() => handleClick(1)} >Tab2</button>
      <button type="button" className={clsx(classes.tab, tabActive2)} onClick={() => handleClick(2)} >Tab3</button>
      <TabPanel value={value} index={0}>
        <SimpleTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab 3
      </TabPanel>
    </div>
  );
}
