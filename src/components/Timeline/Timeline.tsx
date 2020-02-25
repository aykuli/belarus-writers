import React from 'react';
import { Typography } from '@material-ui/core';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';
import { TimeLine } from '../../types';

interface Props {
  timelineData: TimeLine[];
}

const Timeline = ({ timelineData }: Props) => {
  const timelineElements: JSX.Element[] = timelineData.map(
    (element: TimeLine, key: number) => {
      const date = `${element.dateStart} - ${element.dateEnd}`
      return (
        <VerticalTimelineElement
          date={date}
          key={key}
          style={{ marginBottom: 40 }}
        >
          <Typography variant="h2" className="vertical-timeline-element-title">
            {date}
          </Typography>
          {element.title && element.title.length ? (
            <Typography variant="h3" className="vertical-timeline-element-subtitle">
              {element.title}
            </Typography>
          ) : null}
          <Typography variant="body1">{element.description}</Typography>
        </VerticalTimelineElement>
      );
    }
  );

  return <VerticalTimeline>{timelineElements}</VerticalTimeline>;
};

export default Timeline;
