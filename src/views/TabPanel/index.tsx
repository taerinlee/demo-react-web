import React from 'react';
import clsx from 'clsx';

import { useStyles } from './styles';
import ExpandableTable from '../../components/ExpandableTable/'
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
        <div>
          {children}
        </div>
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
      <button type="button" className={clsx(classes.tab, tabActive0)} onClick={() => handleClick(0)} >ExpandableTable</button>
      <button type="button" className={clsx(classes.tab, tabActive1)} onClick={() => handleClick(1)} >BasicTable</button>
      <button type="button" className={clsx(classes.tab, tabActive2)} onClick={() => handleClick(2)} >SimpleTable</button>
      <TabPanel value={value} index={0}>
        <ExpandableTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SimpleTable />
      </TabPanel>
    </div>
  );
}
