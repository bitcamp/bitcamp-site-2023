export interface Event {
  category: string;
  class: string;
  column: number;
  date: string;
  day: string;
  description: string;
  display: boolean;
  displayMode: boolean;
  end_time: string;
  event_name: string;
  id: string;
  link: string;
  location: string;
  mode: string;
  published: string;
  scheduleColumn: number;
  selectedDay: Date;
  starred_count: number;
  start_time: string;
  tags: string[];
  timeWindow: string;
  zoom_email: string;
  zoom_link: string;
}
