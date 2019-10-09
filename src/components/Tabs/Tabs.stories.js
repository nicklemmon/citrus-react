import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabs from './Tabs'
import Tab from './Tab'
import TabList from './TabList'
import TabPanels from './TabPanels'
import TabPanel from './TabPanel'

storiesOf('Tabs', module)
  .add('with required props only', () => (
    <Tabs id="my-tabs" initialActiveTabIndex={1}>
      <TabList>
        <Tab>Tab 1</Tab>

        <Tab>Tab 2</Tab>

        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>Panel 1</TabPanel>

        <TabPanel>Panel 2</TabPanel>

        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  ))
  .add('minimal variant', () => (
    <Tabs id="my-tabs" variant="minimal">
      <TabList>
        <Tab>Tab 1</Tab>

        <Tab>Tab 2</Tab>

        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>Panel 1</TabPanel>

        <TabPanel>Panel 2</TabPanel>

        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  ))
