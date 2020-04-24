import React, { useState } from 'react';
import {
  NavBar,
  SidePanel,
  Svg,
  MeasurementsPanel,
  SegmentationTable,
  ButtonGroup,
  Button,
  Icon,
  IconButton,
  StudyBrowser,
  ViewportActionBar,
  ViewportGrid,
  Notification,
  Viewport,
} from '@ohif/ui';

import Header from './components/Header';
import ViewportToolbar from './components/ViewportToolBar';

import { tabs } from './studyBrowserMockData';

const Viewer = () => {
  const [activeMeasurementItem, setActiveMeasurementItem] = useState(null);
  const descriptionData = {
    date: '07-Sep-2010',
    modality: 'CT',
    description: 'CHEST/ABD/PELVIS W CONTRAST',
  };
  const measurementTableData = {
    title: 'Measurements',
    amount: 10,
    data: new Array(10).fill({}).map((el, i) => ({
      id: i + 1,
      label: 'Label short description',
      displayText: '24.0 x 24.0 mm (S:4, I:22)',
      isActive: activeMeasurementItem === i + 1,
    })),
    onClick: (id) => setActiveMeasurementItem((s) => (s === id ? null : id)),
    onEdit: (id) => alert(`Edit: ${id}`),
  };
  const [activeViewportIndex, setActiveViewportIndex] = useState(0);
  return (
    <div>
      <Header />
      <div
        className="flex flex-row flex-no-wrap flex-1 items-stretch overflow-hidden w-full"
        style={{ height: 'calc(100vh - 57px' }}
      >
        <SidePanel
          side="left"
          defaultComponentOpen="studies"
          childComponents={{
            iconName: 'group-layers',
            iconLabel: 'Studies',
            label: 'Studies',
            name: 'studies',
            content: <StudyBrowser tabs={tabs} />,
          }}
        />
        <div className="flex flex-col flex-1 h-full pb-2">
          <div className="flex flex-2 w-100 border-b border-transparent h-12">
            <ViewportToolbar />
          </div>
          <div className="flex flex-1 h-full overflow-hidden bg-black items-center justify-center">
            <ViewportGrid
              rows={1}
              cols={2}
              viewportContents={[
                <Viewport
                  viewportIndex={0}
                  onSeriesChange={(direction) => alert(`Series ${direction}`)}
                  studyData={{
                    label: 'A',
                    isTracked: true,
                    isLocked: false,
                    studyDate: '07-Sep-2011',
                    currentSeries: 1,
                    seriesDescription:
                      'Series description lorem ipsum dolor sit Series description lorem ipsum dolor sit Series description lorem ipsum dolor sit ',
                    modality: 'CT',
                    patientInformation: {
                      patientName: 'Smith, Jane',
                      patientSex: 'F',
                      patientAge: '59',
                      MRN: '10000001',
                      thickness: '5.0mm',
                      spacing: '1.25mm',
                      scanner: 'Aquilion',
                    },
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    CONTENT
                  </div>
                </Viewport>,
                <Viewport
                  viewportIndex={1}
                  onSeriesChange={(direction) => alert(`Series ${direction}`)}
                  studyData={{
                    label: 'A',
                    isTracked: false,
                    isLocked: true,
                    studyDate: '07-Sep-2010',
                    currentSeries: 2,
                    seriesDescription:
                      'Series description lorem ipsum dolor sit Series description lorem ipsum dolor sit Series description lorem ipsum dolor sit ',
                    modality: 'SR',
                    patientInformation: {
                      patientName: 'Smith, Jane',
                      patientSex: 'F',
                      patientAge: '59',
                      MRN: '10000001',
                      thickness: '2.0mm',
                      spacing: '1.25mm',
                      scanner: 'Aquilion',
                    },
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    CONTENT
                  </div>
                </Viewport>,
              ]}
              setActiveViewportIndex={setActiveViewportIndex}
              activeViewportIndex={activeViewportIndex}
            />
          </div>
        </div>
        <SidePanel
          side="right"
          defaultComponentOpen="measurements"
          childComponents={{
            iconName: 'list-bullets',
            iconLabel: 'Measure',
            label: 'Measurements',
            name: 'measurements',
            content: (
              <MeasurementsPanel
                descriptionData={descriptionData}
                measurementTableData={measurementTableData}
                actionButtons={
                  <React.Fragment>
                    <ButtonGroup onClick={() => alert('Export')}>
                      <Button
                        className="text-white border-primary-main bg-black text-base py-2 px-2"
                        size="initial"
                        color="inherit"
                      >
                        Export
                      </Button>
                      <IconButton
                        className="bg-black border-primary-main px-2 text-white px-2"
                        color="inherit"
                        size="initial"
                      >
                        <Icon name="arrow-down" />
                      </IconButton>
                    </ButtonGroup>
                    <Button
                      className="text-white border border-primary-main bg-black text-base py-2 px-2 ml-2"
                      variant="outlined"
                      size="initial"
                      color="inherit"
                      onClick={() => alert('Create Report')}
                    >
                      Create Report
                    </Button>
                  </React.Fragment>
                }
              />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Viewer;
