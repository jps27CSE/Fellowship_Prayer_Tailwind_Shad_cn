export interface PrayerMeetingFormData {
  meetingName: string;
  scheduledTime: string;
  meetingUrl: string;
  speakerUserId: string;
  moderatorUserId: string;
  worshiperUserId: string;
  specialSongUserId: string;
  banner: FileList | null;
  description: string;
  groupId: string;
}

export interface Group {
  id: string;
  name: string;
}
