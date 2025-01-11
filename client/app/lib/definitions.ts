export interface Incident {
  type: string;
  percentage: number;
  status: string;
}

export interface City {
  name: string;
  count: number;
  incidents: Incident[];
}

// Social Media Post Types
export interface SocialMediaPost {
  Post_ID: number;
  Platform: 'Facebook' | 'Twitter';
  Post_Text: string;
  Created_At: string;
  Author: string;
}

// Parsed Post Types
export interface ParsedPost {
  Post_ID: number;
  Location: string;
  Issue_Type: 'Outage_Suspected' | 'Slowdown_Report' | 'Other';
  Confidence_Score: number;
}

// Alert Types
export interface Alert {
  Alert_ID: number;
  Generated_At: string;
  Location: string;
  Alert_Cause: 'Social_Media_Post';
  Status: 'Open' | 'Investigating' | 'Resolved';
}

// Network Device Types
export interface NetworkDevice {
  Device_ID: number;
  Location: string;
  Current_Status: 'Active' | 'Down' | 'Slowdown';
}

// Root Data Structure
export interface NetworkData {
  Social_Media_Post: SocialMediaPost[];
  Parsed_Post: ParsedPost[];
  Alert: Alert[];
  Network_Device: NetworkDevice[];
}
